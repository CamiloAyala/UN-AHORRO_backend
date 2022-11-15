import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { userI } from '../models/user.model';

const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response) => {
    const user: userI = req.body as userI;

    // TODO: Password hashing

    try {
        const create = await prisma.user.create({
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

export const logIn = (req: Request, res: Response) => {
    res.send("login");
}