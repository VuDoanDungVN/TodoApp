import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Tạo các roles
  const roleAdmin = await prisma.role.create({
    data: {
      name: 'admin',
    },
  });

  const roleUser = await prisma.role.create({
    data: {
      name: 'user',
    },
  });

  // Tạo các users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      roleId: roleAdmin.id,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password456',
      roleId: roleUser.id,
    },
  });

  // Tạo các accounts
  await prisma.account.createMany({
    data: [
      {
        userId: user1.id,
        providerType: 'email',
        providerId: 'john@example.com',
        providerAccountId: 'john123',
      },
      {
        userId: user2.id,
        providerType: 'email',
        providerId: 'jane@example.com',
        providerAccountId: 'jane456',
      },
    ],
  });

  // Tạo các sessions
  await prisma.session.createMany({
    data: [
      {
        userId: user1.id,
        expires: new Date(),
        sessionToken: 'sessionToken1',
        accessToken: 'accessToken1',
      },
      {
        userId: user2.id,
        expires: new Date(),
        sessionToken: 'sessionToken2',
        accessToken: 'accessToken2',
      },
    ],
  });

  // Tạo các thông tin cá nhân
  const personalInfo1 = await prisma.personalInformation.create({
    data: {
      userId: user1.id,
      phoneNumber: '123456789',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  });

  const personalInfo2 = await prisma.personalInformation.create({
    data: {
      userId: user2.id,
      phoneNumber: '987654321',
      bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  });

  // Tạo địa chỉ
  const address1 = await prisma.address.create({
    data: {
      userId: user1.id,
      address: '123 Main St, City',
    },
  });

  const address2 = await prisma.address.create({
    data: {
      userId: user2.id,
      address: '456 Elm St, Town',
    },
  });

  console.log('Seed data generated successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
