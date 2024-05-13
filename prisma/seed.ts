import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Tạo dữ liệu cho mô hình Role
  const adminRole = await prisma.role.create({
    data: {
      name: 'admin',
    },
  });

  const userRole = await prisma.role.create({
    data: {
      name: 'user',
    },
  });

  // Tạo dữ liệu cho mô hình User
  const user1 = await prisma.user.create({
    data: {
      name: 'Vũ Dũng',
      email: 'vudungit92@gmail.com',
      password: 'admin',
      roleId: userRole.id,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
      roleId: userRole.id,
    },
  });

  // Tạo dữ liệu cho mô hình Account
  await prisma.account.createMany({
    data: [
      {
        userId: user1.id,
        providerType: 'email',
        providerId: 'vudungit92@gmail.com',
        providerAccountId: 'vudungit92@gmail.com',
      },
      {
        userId: user2.id,
        providerType: 'email',
        providerId: 'jane@example.com',
        providerAccountId: 'jane@example.com',
      },
    ],
  });

  // Tạo dữ liệu cho mô hình PersonalInformation
  const personalInfo1 = await prisma.personalInformation.create({
    data: {
      phoneNumber: '123456789',
      bio: 'I love coding!',
      userId: user1.id,
    },
  });

  const personalInfo2 = await prisma.personalInformation.create({
    data: {
      phoneNumber: '987654321',
      bio: 'I love reading!',
      userId: user2.id,
    },
  });

  // Tạo dữ liệu cho mô hình Address
  const address1 = await prisma.address.create({
    data: {
      userId: user1.id,
      address: '123 Main Street',
    },
  });

  const address2 = await prisma.address.create({
    data: {
      userId: user2.id,
      address: '456 Elm Street',
    },
  });

  // Tạo dữ liệu cho mô hình Session
  const session1 = await prisma.session.create({
    data: {
      userId: user1.id,
      expires: new Date(),
      sessionToken: 'session_token_1',
      accessToken: 'access_token_1',
    },
  });

  const session2 = await prisma.session.create({
    data: {
      userId: user2.id,
      expires: new Date(),
      sessionToken: 'session_token_2',
      accessToken: 'access_token_2',
    },
  });

  // Tạo dữ liệu cho mô hình Post
  const post1 = await prisma.post.create({
    data: {
      title: 'First Post',
      slug: 'first-post',
      thumbnail: 'https://example.com/thumbnail.jpg',
      description: 'This is the first post',
      content: 'Lorem ipsum dolor sit amet...',
      userId: user1.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: 'Second Post',
      slug: 'second-post',
      thumbnail: 'https://example.com/thumbnail.jpg',
      description: 'This is the second post',
      content: 'Lorem ipsum dolor sit amet...',
      userId: user2.id,
    },
  });

  // Tạo dữ liệu cho mô hình Category
  await prisma.category.create({
    data: {
      name: 'Technology',
      slug: 'technology',
    },
  });

  await prisma.category.create({
    data: {
      name: 'Science',
      slug: 'science',
    },
  });

  // Tạo dữ liệu cho mô hình Conversation và Message
  const conversation1 = await prisma.conversation.create({
    data: {
      participants: {
        connect: [{ id: user1.id }, { id: user2.id }],
      },
    },
  });

  await prisma.message.createMany({
    data: [
      {
        content: 'Hello, how are you?',
        senderId: user1.id,
        conversationId: conversation1.id,
      },
      {
        content: "I'm good, thanks! How about you?",
        senderId: user2.id,
        conversationId: conversation1.id,
      },
      {
        content: "I'm great!",
        senderId: user1.id,
        conversationId: conversation1.id,
      },
    ],
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
