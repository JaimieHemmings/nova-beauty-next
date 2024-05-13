'use server';

import ConnectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

async function addMessage(previousState, formData) {
  await ConnectDB();

  const recipient = '66421477bd85005777308d11';

  const newMessage = new Message({
    recipient,
    property: formData.get('property'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    body: formData.get('message'),
  })

  await newMessage.save()

  // revalidate cache
  revalidatePath('/messages', 'page')

  return { submitted: true }
}

export default addMessage