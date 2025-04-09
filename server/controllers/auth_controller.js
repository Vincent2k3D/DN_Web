import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user_model.js';


const authController ={
    singup: async (req, res) => {
        const { name, email, password, phone, address } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email đã tồn tại!' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                phone,
                address,
            });

            // Save user to database
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }   
}

export default authController;