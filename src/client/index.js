import express from 'express';
import { homePageRouter } from './private/home';
// import { authPageRouter } from './public/auth';

const router = express.Router();

// router.use('/auth', authPageRouter);

router.use('/', homePageRouter);

export const clientRouter = router;
