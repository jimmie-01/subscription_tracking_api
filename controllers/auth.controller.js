import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
	const session = await mongoose.startSession();
	session.startTransaction();

	try {
		const { name, email, password } = req.body;

		// Check if user already exist
		const existingUser = await User.findOne({ email });

		if(existingUser) {
			const error = new Error('User already exists');
			error.statusCode = 409;
			throw error;
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUsers = await User.create([{
			name,
			email,
			password: hashedPassword
		}], { session });

		const token = jwt.sign({ userId: newUsers[0]._id,}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
		
		await session.commitTransaction();
		session.endSession();

		res.status(201).json({
			sucess: true,
			message: 'User Created Successfully',
			data: {
				token,
				user: newUsers[0]
			}
		})
	} catch (error) {
		await session.abortTransaction();
		session.endSession;
		next(error);
	}
}

export const signIn = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		// Check if user exists
		const user = await User.findOne({ email });

		if (!user) {
			const error = new Error('User not found');
			error.statusCode = 404;
			throw error;
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			const error = new Error('Invalid Password');
			error.statusCode = 401;
			throw error;
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

		res.status(200).json({
			success: true,
			message: 'User signed in successfully',
			data: {
				token,
				user
			}
		});
	} catch (error) {
		next(error);
	}
}

export const signOut = async (req, res, next) => {

}
