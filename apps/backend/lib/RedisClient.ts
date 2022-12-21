import IORedis from 'ioredis';

const RedisClient = new IORedis({
  port: parseInt(process.env.REDIS_PORT, 10),
});

export default RedisClient;
