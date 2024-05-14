'use server'
import ConnectDB from '@/config/database'
import Message from '@/models/Message'
import { getSessionUser } from '@/utils/getSessionUser'

async function getUndreadMessageCount() {
  await ConnectDB()

  const sessionUser = await getSessionUser()

  if (!sessionUser || !sessionUser.user) {
    return { error: 'User ID is required' }
  }

  const { userId } = sessionUser;

  let count = '';

  if(sessionUser.user.isAdmin) {
    count = await Message.countDocuments({
      read: false,
    })
  }

  return { count }
}

export default getUndreadMessageCount