import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

class Socket extends Server {
  private static io: Socket;

  constructor(httpServer: HttpServer) {
    super(httpServer, {
      cors: {
        origin: process.env.CORS_ALLOW.split(','),
        credentials: true,
      },
    });
  }

  public static getInstance(httpServer?: HttpServer): Socket {
    if (!Socket.io) {
      if (!httpServer) throw new Error('No http server provided');

      Socket.io = new Socket(httpServer);
    }

    return Socket.io;
  }
}

export default Socket;
