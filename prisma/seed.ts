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
      image: '/images/user.png',
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
      phoneNumber: '0123456789',
      bio: 'I am an admin user.',
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
    where: { id: '1', name: 'Technology', slug: 'technology' },
    update: {},
    create: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  const categoryNews = await prisma.category.upsert({
    where: { id: '2', name: 'News', slug: 'news' },
    update: {},
    create: {
      name: 'News',
      slug: 'news',
    },
  });
  // Seed posts
  const post1 = await prisma.post.upsert({
    where: { slug: 'technology-post' },
    update: {},
    create: {
      title: 'Technology Post',
      slug: 'technology-post',
      thumbnail: '/images/thumnail/thumnail-1.jpg',
      description: 'This is a technology post description.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      userId: admin.id, // Assuming admin.id is the ID of the admin user
    },
  });

  const post2 = await prisma.post.upsert({
    where: { slug: 'news-post' },
    update: {},
    create: {
      title: 'News Post',
      slug: 'news-post',
      thumbnail: '/images/thumnail/thumnail-2.jpg',
      description: 'This is a news post description.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      userId: user.id, // Assuming user.id is the ID of the regular user
    },
  });
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
