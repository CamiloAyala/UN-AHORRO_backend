import Joi from 'joi';

// Joi schemes for user entity

const userSchema = Joi.object ({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    photo: Joi.string()
});

const loginSchema = Joi.object ({
    email: Joi.string().email().required,
    password: Joi.string().required
});


// Interfaces

interface userI {
    firstName: string
    lastName: string
    email: string
    password: string
    photo: string
}

interface loginI {
    email: string
    password: string
}

export { userSchema, loginSchema, userI, loginI }