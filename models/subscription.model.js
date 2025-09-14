import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Subscription name is required'],
		trim: true,
		minLength: 2,
		maxLength: 100
	},
	price: {
		type: Number,
		required: [true, 'Subscription price is required'],
		min: [0, 'Price must be greater than 0'],
	},
	currency: {
		type: String,
		enum: ['USD', 'GBP', 'EURO', 'NGN'],
		default: 'NGN',
	},
	fequency: {
		type: String,
		enum: ['daily', 'weekly', 'monthly', 'yearly'],
	},
	category: {
		type: String,
		enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'other'],
		required: true
	},
	paymentMethod: {
		type: String,
		required: true,
		trim: true
	},
	status: {
		type: String,
		enum: ['active', 'cancelled', 'paused', 'expired'],
		default: 'active'
	},
	startDate: {
		type: Date,
		required: true,
		validate: {
			validator: (value) => value <= new Date(),
			message: 'Start date must be in the past'
		}

	},
	renewalDate: {
		type: Date,
		required: true,
		validate: {
			
		}
	},
	renewalInterval: {
		type: String,
		enum: ['monthly', 'yearly', 'weekly', 'daily'],
		default: 'monthly'
	},
	notes: {
		type: String
	}
}, { timestamps: true });