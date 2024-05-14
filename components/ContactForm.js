'use client'
import { FaPaperPlane } from 'react-icons/fa';
import addMessage from '@/app/actions/addMessage';
import { useFormStatus, useFormState } from 'react-dom';

function SubmitMessageButton() {
    const status = useFormStatus()
    return (
      <button
        type='submit'
      >
        <FaPaperPlane />{' '}
        {status.pending ? 'Sending...' : 'Send Message'}
      </button>
    )
  }

  const ContactForm = () => {
  
    const [submitState, formAction] = useFormState(addMessage, {})
  
    return (
      <section className='container contact-form'>
        
        <h3>Contact Me!</h3>
        { submitState.submitted ? (
          <p>
            Your message has been sent successfully
          </p>
        ) : (
          <form action={formAction}>
            <div className="row">
              <div className="col">
              <label htmlFor='name'>Name:</label>
              <input id='name' name='name' type='text' placeholder='Enter your name' required />

              <label htmlFor='email'>Email:</label>
              <input id='email' name='email' type='email' placeholder='Enter your email' required />
              
              <label htmlFor='phone'>Phone:</label>
              <input id='phone' name='phone' type='text' placeholder='Enter your phone number' />

              </div>
              <div className="col">
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' placeholder='Enter your message'></textarea>
              </div>
            </div>
              

            <div className="flex-center">
              <SubmitMessageButton />
            </div>
          </form>
        )}
      </section>
    )
  }

  export default ContactForm