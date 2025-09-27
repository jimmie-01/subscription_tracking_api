import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subRouter = Router();

subRouter.get('/', (req, res) => {});

subRouter.get('/:id', (req, res) => {});

subRouter.post('/', authorize, createSubscription);

subRouter.put('/:id', (req, res) => {});

subRouter.delete('/:id', (req, res) => {});

subRouter.get('/user/:id', authorize, getUserSubscriptions);

subRouter.put('/:id/cancel', (req, res) => {});

subRouter.get('/upcoming-renewals', (req, res) => {});

export default subRouter;