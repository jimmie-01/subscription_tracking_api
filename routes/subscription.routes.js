import { Router } from 'express';

const subRouter = Router();

subRouter.get('/', (req, res) => {});

subRouter.get('/:id', (req, res) => {});

subRouter.post('/', (req, res) => {});

subRouter.put('/:id', (req, res) => {});

subRouter.delete('/:id', (req, res) => {});

subRouter.get('/user/:id', (req, res) => {});

subRouter.put('/:id/cancel', (req, res) => {});

subRouter.get('/upcoming-renewals', (req, res) => {});

export default subRouter;