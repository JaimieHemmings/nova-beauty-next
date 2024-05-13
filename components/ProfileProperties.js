'use client'
import { useState } from 'react'
import Link from 'next/link'
import deleteService from '@/app/actions/deleteService';

function ProfileProperties({ properties: initialProperties }) {
    const [services, setServices] = useState(initialProperties);
  
    const handleDeleteService = async (serviceId) => {
        const confirmed = window.confirm(
          'Are you sure you want to delete this service?'
        );
      
        if (!confirmed) return;
      
        const deleteServiceById = deleteService.bind(null, serviceId);
      
        await deleteServiceById();
      
        const updatedServices = services.filter(
          (services) => services._id !== serviceId
        );
      
        setServices(updatedServices);
      };
  
    return services.map((service) => (
      <div key={service._id}>
        <div className='mt-2'>
          <p>{service.name}</p>
          <p>{service.type}</p>
          <p>£{service.price}</p>
        </div>
        <div className='mt-2'>
          <Link
            href={`/services/${service._id}/edit`}
          >
            Edit
          </Link>
          <button
            onClick={() => handleDeleteService(service._id)}
            type='button'
          >
            Delete
          </button>
        </div>
      </div>
    ))
  }
  
  export default ProfileProperties