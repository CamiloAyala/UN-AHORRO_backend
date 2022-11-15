import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { PrismaClient } from '@prisma/client';

import { JWT_SECRET } from "../config/config";

const prisma = new PrismaClient();

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
}

export default new Strategy(opts, async (payload, done) => {
    const user = await prisma.user.findUnique({
        where: {
            userID: payload.id
        }
    })

    if(user) return done(null, user);

    return done(null, false);
})
