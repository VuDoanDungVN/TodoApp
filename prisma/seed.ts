import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Seed roles
  const adminRole = await prisma.role.create({
    data: {
      name: 'Admin',
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: 'User',
    },
  });

  // Seed users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin',
      roleId: adminRole.id,
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      name: 'Regular User',
      email: 'user@example.com',
      password: 'user',
      roleId: userRole.id,
    },
  });

  // Seed personal information
  await prisma.personalInformation.create({
    data: {
      userId: adminUser.id,
      firstName: 'Admin',
      lastName: 'User',
      phoneNumber: '123456789',
      bio: 'Admin bio',
    },
  });

  await prisma.personalInformation.create({
    data: {
      userId: regularUser.id,
      firstName: 'Regular',
      lastName: 'User',
      phoneNumber: '987654321',
      bio: 'Regular user bio',
    },
  });

  // Seed addresses
  await prisma.address.create({
    data: {
      userId: adminUser.id,
      address: 'Admin Address 123',
    },
  });

  await prisma.address.create({
    data: {
      userId: regularUser.id,
      address: 'Regular Address 456',
    },
  });

  // Seed verification requests
  await prisma.verificationRequest.create({
    data: {
      identifier: adminUser.email,
      token: 'adminVerificationToken',
      expires: new Date(),
    },
  });

  await prisma.verificationRequest.create({
    data: {
      identifier: regularUser.email,
      token: 'userVerificationToken',
      expires: new Date(),
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
