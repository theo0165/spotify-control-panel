export * from './server';
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT?: string;
      DATABASE_URL: string;
    }
  }
}
