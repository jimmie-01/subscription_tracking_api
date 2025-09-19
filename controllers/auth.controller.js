import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({ email, password: hashedPassword });
		res.status(201).json({ user: newUser });
	} catch (error) {
		next(error);
	}
}

export const signin = async (req, res, next) => {

}

export const signout = async (req, res, next) => {

}