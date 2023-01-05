import { PrismaClient } from '@prisma/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import app from '../../../package.json';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.application.deleteMany();

  await prisma.application.create({
    data: {
      name: 'name',
      value: 'Controller for Spotify',
    },
  });

  await prisma.application.create({
    data: {
      name: 'version',
      value: app.version,
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
