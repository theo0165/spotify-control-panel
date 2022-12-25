import { Server, Socket } from 'socket.io';

const userInteraction = (client: Socket, global: Server) => {
  if (false) {
    console.log({ client, global });
  }
};

export default userInteraction;
