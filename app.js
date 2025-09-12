import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subRouter from './routes/subscription.routes.js';

const app = express();

// prepend '/api/auth/sign-up' to each specific routes endpoint
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/sub', subRouter);

app.get('/', (req, res) => {
	res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT, () => {
	console.log(`server running on http://localhost:${PORT}`);
});

export default app;