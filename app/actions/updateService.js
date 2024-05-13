'use server';

import ConnectDB from '@/config/database'
import Services from '@/models/Services'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

async function UpdateService(serviceId, formData) {
  await ConnectDB();

  const ServiceData = {
    type: formData.get('type'),
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price')
  };

  await Services.findByIdAndUpdate(
    serviceId,
    ServiceData
  );

  // Revalidate the cache
  revalidatePath('/', 'layout')

  redirect('/profile')
}

export default UpdateService;