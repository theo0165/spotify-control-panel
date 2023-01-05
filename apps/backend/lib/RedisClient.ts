import IORedis from 'ioredis';

const RedisClient = new IORedis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10),
});

export default RedisClient;
