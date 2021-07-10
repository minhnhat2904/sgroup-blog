import express from 'express';

const router = express.Router();

router.use('/login', (req, res) => res.render('pages/auth/login'));
router.use('/register', (req, res) => res.render('pages/auth/register'));

export const authPageRouter = router;
