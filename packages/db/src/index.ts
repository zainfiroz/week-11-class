import mongoose from "mongoose";

// Define the User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    purchasedCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

// Define the Admin schema and model
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});


// Define the Course schema with middleware to set default adminId
const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true },
    published: { type: Boolean, default: false },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});


export const Course = mongoose.model('Course', courseSchema);
export const Admin = mongoose.model('Admin', adminSchema);
export const User = mongoose.model('User', userSchema);

