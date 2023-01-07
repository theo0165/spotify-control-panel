import { Controller } from '@scp/types';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../../prisma/prisma';

const GetQrController: Controller = async (req, res) => {
  const token = uuidv4();

  if (!req.query || !req.query.socketid) {
    return res.status(400).json({ error: 'Missig socket ID' });
  }

  const socketId = req.query.socketid.toString();

  await prisma.qrToken.create({ data: { token, socketId } });

  return res.json({
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth/qr/login?token=${token}`,
  });
};

export default GetQrController;
