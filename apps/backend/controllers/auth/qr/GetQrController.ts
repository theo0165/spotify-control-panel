import { Controller } from '@scp/types';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../../prisma/prisma';

const GetQrController: Controller = async (req, res) => {
  const token = uuidv4();
  const { sessionID: sessionId } = req;

  await prisma.qrToken.deleteMany({ where: { sessionId } });

  await prisma.qrToken.create({ data: { token, sessionId } });

  return res.json({
    url: `${process.env.REACT_APP_SERVER_BASE_URL}/auth/qr/login?token=${token}`,
  });
};

export default GetQrController;
