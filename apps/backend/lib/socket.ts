import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';

class Socket extends Server {
  private static io: Socket;

  constructor(httpServer: HttpServer) {
    super(httpServer, {});
  }

  public static getInstance(httpServer?: HttpServer): Socket {
    if (!Socket.io) {
      if (!httpServer) throw Error('No http server provided');

      Socket.io = new Socket(httpServer);
    }

    return Socket.io;
  }
}

export default Socket;
