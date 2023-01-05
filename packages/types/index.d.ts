import { SpotifyToken } from './server';
import { Device, Playlist, User } from './Spotify';

export * from './server';
export * from './Spotify';
export * from './states';
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_URL: string;
      SERVER_PORT?: string;
      DATABASE_URL: string;
      SESSION_SECRET: string;
      SESSION_COOKIE_NAME: string;
      REDIS_PORT: string;
      REDIS_HOST: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REDIRECT_URI: string;
      SPOTIFY_QR_REDIRECT_URI: string;
      REACT_APP_SERVER_BASE_URL: string;
      CORS_ALLOW: string;
    }
  }
}

declare module 'express-session' {
  interface SessionData {
    state?: string;
    token?: SpotifyToken;
    user?: User;
    playlists: Playlist[];
    devices: Device[];
  }
}

export enum CustomEnumTest {}

// export enum MovementEvents {
//   USER_INTERACT = 'USER_INTERACT',
//   LEFT = 'USER_INTERACT_LEFT',
//   RIGHT = 'USER_INTERACT_RIGHT',
//   CLICK = 'USER_INTERACT_CLICK',
//   DOUBLE_CLICK = 'USER_INTERACT_DOUBLE_CLICK',
//   LONG_CLICK = 'USER_INTERACT_LONG_CLICK',
// }
