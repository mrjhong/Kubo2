import { MovieModel } from "../models/movieModel.js";
import { UserModel } from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const userService = {
    async createUser(user) {
        return await UserModel.createUser(user);
    },
   
    async getAllUsers() {
        const users = await UserModel.getAllUsers();
        let data = [];
        for (let user of users) {
            let  viewedForUser = await MovieModel.getViewedMoviesByUser(user.id);
            data.push({ user, viewedForUser });

        }
        return data;
    },

    async authenticateUser(username, password) {
        const user = await UserModel.getUserByUsername(username);
        if (!user) {
            return false
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            
            return false;

        }
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '3h' });
        return token;
    },
    async registerUser(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await UserModel.createUser({ name: username, password: hashedPassword });
    }
   
}