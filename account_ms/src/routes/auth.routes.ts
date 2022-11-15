import { Router } from 'express';
import { logIn, signUp } from '../controllers/auth.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import { loginSchema, userSchema } from '../models/user.model';

const router = Router();

router.post("/signup", validationMiddleware(userSchema, "body"), signUp);
router.post("/login", validationMiddleware(loginSchema, "body"), logIn);

export default router;