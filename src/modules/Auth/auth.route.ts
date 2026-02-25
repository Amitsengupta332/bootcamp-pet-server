import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/register', AuthController.CreateUser)
export const AuthRoutes = router;
