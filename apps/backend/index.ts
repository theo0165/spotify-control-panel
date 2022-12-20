import cookieParser from 'cookie-parser';
import express from 'express';
import router from './src/routes';

const PORT = process.env.SERVER_PORT ?? 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
