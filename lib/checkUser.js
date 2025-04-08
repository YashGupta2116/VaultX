import {currentUser} from '@clerk/nextjs/server';
import {db} from './prisma';

export const checkUser = async () => {
  // check if clerk user is there or not
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // check if user is there in db
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress, // there can be multiple email addresses
      },
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
