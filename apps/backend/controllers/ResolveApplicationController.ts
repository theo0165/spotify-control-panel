import { Controller } from '@scp/types';
import client from '../prisma/prisma';

const ResolveApplicationController: Controller = async (req, res) => {
  const appData = await client.application.findMany();
  const appDataParsed = appData.reduce(
    (obj, item) => ({
      ...obj,
      [item.name]: item.value,
    }),
    {},
  );

  res.json(appDataParsed);
};

export default ResolveApplicationController;
