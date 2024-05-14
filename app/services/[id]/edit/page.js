import ConnectDB from "@/config/database"
import ServicesList from "@/models/Services"
import { convertToSerializeableObject } from "@/utils/convertToObject"
import UpdateService from "@/app/actions/updateService";
import SubmitButton from "@/components/SubmitButton";

const ServiceEditPage = async ({ params }) => {
    await ConnectDB()
    const serviceDoc = await ServicesList.findById(params.id).lean();
    const service = convertToSerializeableObject(serviceDoc)

    if (!service) {
        return (
          <h1>
            Service Not Found
          </h1>
        )
      }

    const updateServiceById = UpdateService.bind(null, service._id)
    
  return (
    <section className="container">
      <h2>Edit Property</h2>
      <form action={updateServiceById}>
        <div>
            <label htmlFor='type'>
            Service Type
            </label>
            <select
                id='type'
                name='type'
                required
                defaultValue={service.type}
                >
                <option value='Nails'>Nails</option>
                <option value='Massages'>Massage</option>
                <option value='Microdermabrasion'>Microdermabrasion</option>
                <option value='Waxing'>Waxing</option>
                <option value='Facials'>Facials</option>
                <option value='Lashes'>Lashes</option>
                <option value='Hair'>Hair</option>
                <option value='Brows'>Brows</option>
            </select>
        </div>
        <div className='mb-4'>
            <label>
            Service Name
            </label>
            <input
                type='text'
                id='name'
                name='name'
                placeholder='eg. Gel polish Nails'
                required
                defaultValue={service.name}
            />
        </div>
        <div className='mb-4'>
            <label
                htmlFor='description'
            >
                Description
            </label>
            <textarea
                id='description'
                name='description'
                rows='4'
                placeholder='Add an optional description of your service'
                defaultValue={service.description}
            ></textarea>
        </div>
        <div className='mb-4'>
            <label>
            Service Price
            </label>
            <input
                type='number'
                id='price'
                name='price'
                placeholder='0'
                required
                defaultValue={service.price}
            />
        </div>
        <SubmitButton
          pendingText='Updating Service...'
          text='Update Service'
        />
      </form>
    </section>
  )
}

export default ServiceEditPage
