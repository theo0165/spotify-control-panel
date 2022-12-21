import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';
import express from 'express';
import session from 'express-session';
import IORedis from 'ioredis';
import router from './src/routes';

const PORT = process.env.SERVER_PORT ?? 3001;
const app = express();
const StoreRedis = connectRedis(session);
const redisClient = new IORedis({
  port: parseInt(process.env.REDIS_PORT, 10),
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    name: process.env.SESSION_COOKIE_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    store: new StoreRedis({ client: redisClient }),
  }),
);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
