import { getUserByEmail } from '@/repositories/getUserByEmail';

export const getUserAction = async () => {
  try {
    const events = await getUserByEmail();

    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
