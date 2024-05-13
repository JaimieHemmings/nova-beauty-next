'use server'
import ConnectDB from '@/config/database'
import Services from '@/models/Services'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'

async function deleteService(serviceId) {
  const sessionUser = await getSessionUser()

  // Check for session
  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required')
  }

  const { userId } = sessionUser;

  await ConnectDB()

  const service = await Services.findById(serviceId)

  if (!service) throw new Error('Service Not Found')

  // Proceed with property deletion
  await service.deleteOne()

  revalidatePath('/', 'layout')
}

export default deleteService