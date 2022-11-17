import Router from 'express';
import passport from 'passport';

const router = Router();

router.get("/user", passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json("Hello");
});

export default router;