'use client'
import { useFormStatus } from 'react-dom'

function SubmitButton({
  pendingText = 'Adding Service...',
  text = 'Add Service',
}) {
  const status = useFormStatus()
  return (
    <button
      type='submit'
      disabled={status.pending}
    >
      {status.pending ? pendingText : text}
    </button>
  )
}

export default SubmitButton