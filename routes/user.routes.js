import { Router } from 'express';

import authorize from '../middleware/auth.middleware.js';
import { getUsers, getUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {});

userRouter.put('/:id', (req, res) => {});

userRouter.delete('/:id', (req, res) => {});

export default userRouter;