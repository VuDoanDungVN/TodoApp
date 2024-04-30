import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: { name: 'Admin' },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'User' },
    update: {},
    create: { name: 'User' },
  });

  // Seed users
  const admin = await prisma.user.upsert({
    where: { email: 'vudungit92@gmail.com' },
    update: {},
    create: {
      email: 'vudungit92@gmail.com',
      password: 'admin',
      roleId: adminRole.id,
      name: 'Vũ Dũng',
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: 'userpassword',
      roleId: userRole.id,
      name: 'Regular User',
    },
  });

  // Seed personal information
  await prisma.personalInformation.upsert({
    where: { userId: admin.id },
    update: {},
    create: {
      userId: admin.id,
      phoneNumber: '1234567890',
      bio: 'I am the admin user.',
    },
  });

  await prisma.personalInformation.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      phoneNumber: '0987654321',
      bio: 'I am a regular user.',
    },
  });

  // Seed addresses
  await prisma.address.upsert({
    where: { userId: admin.id },
    update: {},
    create: {
      userId: admin.id,
      address: '123 Admin Street, City, Country',
    },
  });

  await prisma.address.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      address: '456 User Avenue, City, Country',
    },
  });

  // Seed categories
  const categoryTech = await prisma.category.upsert({
    where: { name: 'Technology' },
    update: {},
    create: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  const categoryNews = await prisma.category.upsert({
    where: { name: 'News' },
    update: {},
    create: {
      name: 'News',
      slug: 'news',
    },
  });

  // Seed posts
  await prisma.post.createMany({
    data: [
      {
        title: 'First Post',
        slug: 'first-post',
        thumbnail: 'https://example.com/thumbnail.jpg',
        description: 'This is the first post.',
        content: 'This is the content of the first post.',
        readTime: 5,
        userId: admin.id,
        categoryId: categoryTech.id,
      },
      {
        title: 'Second Post',
        slug: 'second-post',
        thumbnail: 'https://example.com/thumbnail2.jpg',
        description: 'This is the second post.',
        content: 'This is the content of the second post.',
        readTime: 10,
        userId: user.id,
        categoryId: categoryNews.id,
      },
    ],
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
