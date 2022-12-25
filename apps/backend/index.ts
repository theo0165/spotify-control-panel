import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import RedisClient from './lib/RedisClient';
import Socket from './lib/socket';
import router from './routes';

const PORT = process.env.SERVER_PORT ?? 3001;
const app = express();
const StoreRedis = connectRedis(session);

const httpServer = createServer(app);

Socket.getInstance(httpServer);

app.use(
  cors({
    origin: [...process.env.CORS_ALLOW.split(',')],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    name: process.env.SESSION_COOKIE_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: new Date(253402300000000).valueOf(),
    },
    store: new StoreRedis({ client: RedisClient }),
  }),
);

app.use('/', router);

httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
