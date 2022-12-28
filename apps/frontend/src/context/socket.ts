import { createContext } from 'react';
import { io as SocketIo } from 'socket.io-client';

export const socket = SocketIo(process.env.REACT_APP_SERVER_BASE_URL, {
  withCredentials: true,
});

export const SocketContext = createContext(socket);
