import prisma from '@/prisma';

export const getUserByEmail = async () => {
  try {
    const user = await prisma.user.findMany();
    return user;
  } catch (error) {
    throw error;
  }
};
