import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'l0%5glOHI%9xdaX%';