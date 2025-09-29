import { Router } from 'express';
import authorize from '../middleware/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';

const subRouter = Router();

subRouter.get('/', (req, res) => res.send({ title: 'GET all subscritions'}));

subRouter.get('/:id', (req, res) => res.send({ title: 'GET Subscription Details' }));

subRouter.post('/', authorize, createSubscription);

subRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE Subscription' }));

subRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE Subscription' }));

subRouter.get('/user/:id', authorize, getUserSubscriptions);

subRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL Subscription' }));

subRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET Upcoming Renewals' }));

export default subRouter;