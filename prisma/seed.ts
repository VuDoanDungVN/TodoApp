import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Tạo Role
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

  // Tạo User
  const user1 = await prisma.user.create({
    data: {
      email: 'vudungit92@gmail.com',
      password: 'admin',
      roleId: userRole.id,
      name: 'Vũ Dũng',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: 'password2',
      roleId: userRole.id,
      name: 'User Two',
    },
  });

  // Tạo Personal Information cho User
  await prisma.personalInformation.create({
    data: {
      phoneNumber: '123456789',
      bio: 'This is user one bio',
      userId: user1.id,
    },
  });

  await prisma.personalInformation.create({
    data: {
      phoneNumber: '987654321',
      bio: 'This is user two bio',
      userId: user2.id,
    },
  });

  // Tạo Address cho User
  await prisma.address.create({
    data: {
      address: '123 Main St, City, Country',
      userId: user1.id,
    },
  });

  await prisma.address.create({
    data: {
      address: '456 Main St, City, Country',
      userId: user2.id,
    },
  });

  // Tạo Category
  const category1 = await prisma.category.create({
    data: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
  });

  // Tạo Post
  const post1 = await prisma.post.create({
    data: {
      title: 'First Post',
      slug: 'first-post',
      description: 'This is the first post',
      content: 'Content of the first post',
      userId: user1.id,
      thumbnail: '/images/thumnail/thumnail-2.jpg',
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Second Post',
      slug: 'second-post',
      description: 'This is the second post',
      content: 'Content of the second post',
      userId: user2.id,
      thumbnail: '/images/thumnail/thumnail-1.jpg',
    },
  });

  // Tạo Conversation
  const conversation1 = await prisma.conversation.create({
    data: {
      userId: user1.id,
    },
  });

  const conversation2 = await prisma.conversation.create({
    data: {
      userId: user2.id,
    },
  });

  // Tạo Message
  await prisma.message.create({
    data: {
      content: 'Hello, this is a message in conversation 1',
      userId: user1.id,
      conversationId: conversation1.id,
    },
  });

  await prisma.message.create({
    data: {
      content: 'Hello, this is a message in conversation 2',
      userId: user2.id,
      conversationId: conversation2.id,
    },
  });

  // Tạo Account
  await prisma.account.create({
    data: {
      userId: user1.id,
      providerType: 'oauth',
      providerId: 'github',
      providerAccountId: '12345',
    },
  });

  await prisma.account.create({
    data: {
      userId: user2.id,
      providerType: 'oauth',
      providerId: 'google',
      providerAccountId: '67890',
    },
  });

  // Tạo Session
  await prisma.session.create({
    data: {
      userId: user1.id,
      expires: new Date('2024-12-31'),
      sessionToken: 'session-token-1',
      accessToken: 'access-token-1',
    },
  });

  await prisma.session.create({
    data: {
      userId: user2.id,
      expires: new Date('2024-12-31'),
      sessionToken: 'session-token-2',
      accessToken: 'access-token-2',
    },
  });

  // Tạo Verification Request
  await prisma.verificationRequest.create({
    data: {
      identifier: 'user1@example.com',
      token: 'verification-token-1',
      expires: new Date('2024-12-31'),
    },
  });

  await prisma.verificationRequest.create({
    data: {
      identifier: 'user2@example.com',
      token: 'verification-token-2',
      expires: new Date('2024-12-31'),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
