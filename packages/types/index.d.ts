export * from './server';
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT?: string;
      DATABASE_URL: string;
      SESSION_SECRET: string;
      SESSION_COOKIE_NAME: string;
      REDIS_PORT: string;
    }
  }
}
