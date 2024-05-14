'use client'
import { useFormStatus } from 'react-dom'
import addService from '@/app/actions/addService'
import { getSessionUser } from '@/utils/getSessionUser'

const AddServicePage = async ({
    pendingText = 'Adding Service...',
    text = 'Add Service',
    }) => {
    const status = useFormStatus()

    
    await ConnectDB();
    const sessionUser = await getSessionUser();

    if(sessionUser.user.isAdmin) {
      return (
        <div className="container">
          <form action={addService}>
          <h2>Add Service</h2>
    
          <div className='mb-4'>
            <label htmlFor='type'>
              Service Type
            </label>
            <select
              id='type'
              name='type'
              required
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
          <div>
            <label htmlFor='name'>
              Service Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='eg. Gel Polish Nails...'
              required
            />
          </div>
          <div>
            <label>
              Service Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              placeholder='20'
              required
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
              placeholder='Add a description of your service'
            ></textarea>
          </div>
    
          <div>
          <button
          type='submit'
          disabled={status.pending}
        >
          {status.pending ? pendingText : text}
        </button>
          </div>
        </form>
        </div>
      )
    } else {
      return
    }
}

export default AddServicePage
