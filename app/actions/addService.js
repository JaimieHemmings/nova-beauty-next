'use server';
import ConnectDB from "@/config/database";
import ServicesList from "@/models/Services";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function addService(formData) {
    await ConnectDB();
    const sessionUser = await getSessionUser();
    if(!sessionUser || !sessionUser.userId) {
        throw new error("User ID is required")
    }
    const { userId } = sessionUser;

    const serviceData = {
        type: formData.get('type'),
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price')
    }

    console.log(serviceData)

    const newService = new ServicesList(serviceData);
    await newService.save()

    revalidatePath('/', 'layout');
    redirect('/profile')
}

export default addService