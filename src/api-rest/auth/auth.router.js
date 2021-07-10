import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/', AuthController.getSingleton().register);

export const authRouter = router;
