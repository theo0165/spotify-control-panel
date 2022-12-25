import { Server, Socket } from 'socket.io';

const userInteraction = (client: Socket, global: Server) => {
  console.log({ client, global });
};

export default userInteraction;
