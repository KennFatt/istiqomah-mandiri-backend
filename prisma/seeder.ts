import { Chance } from 'chance';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const chance = new Chance();

async function seed() {
  /** Create 50 record of Keluarga */
  await prisma.keluarga.createMany({
    skipDuplicates: true,
    data: Array(51)
      .fill(0)
      .map(() => {
        return {
          no_induk: chance.string({
            length: 3,
            numeric: true,
          }),
          no_kk: chance.string({
            length: 16,
            numeric: true,
          }),
          no_nik: chance.string({
            length: 16,
            numeric: true,
          }),
          address: chance.address(),
          is_registered: chance.bool(),
        };
      }),
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
