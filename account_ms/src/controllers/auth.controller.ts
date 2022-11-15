import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createHmac } from 'crypto';
import jwt from 'jsonwebtoken';

import { loginI, userI } from '../models/user.model';
import { JWT_SECRET } from '../config/config';
import { token } from 'morgan';

const prisma = new PrismaClient();

function createJWTToken(payload: any){
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}


export const signUp = async (req: Request, res: Response) => {
    const user: userI = req.body as userI;

    try {
        user.password = createHmac('sha512', "").update(user.password).digest('hex')
        
        await prisma.user.create({
            data: {
                ...user
            }
        })

        return res.status(201).json({
            message: "User created"
        });

    }catch(error: any){
        let errorMessage = {
            statusCode: 0,
            message: ""
        };

        error.code == "P2002"
        ? (errorMessage.statusCode = 400, errorMessage.message = "This email alredy exists")
        : (errorMessage.statusCode = 500, errorMessage.message = "SignUp error");

        return res.status(errorMessage.statusCode).json({message: errorMessage.message})
    }
}

export const logIn = async (req: Request, res: Response) => {
    const credentials: loginI = req.body as loginI;

    try{

        const user = await prisma.user.findUnique({
            where: {
                email: credentials.email
            }
        })

        if(user == null){
            return res.status(404).json({
                message: "Invalid email or password."
            })
        }

        let loginPassword = createHmac('sha512', "").update(credentials.password).digest('hex')
        
        if(loginPassword != user.password){
            return res.status(404).json({
                message: "Invalid email or password."
            })
        }

        let payload = {
            id: user.userID,
            email: user.email
        }

        return res.status(200).json({
            token: createJWTToken(payload),
            payload: user,           
            firstName: user.firstName,
            lastName: user.lastName,
            photo: user.photo,

        });

    }catch(error){
        return res.status(400).json(error)
    }
}