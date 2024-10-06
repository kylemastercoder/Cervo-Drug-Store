
import { IconMessageFilled } from '@tabler/icons-react'
import React from 'react'

const Chatbot = () => {
  return (
    <div className='fixed bottom-10 right-10 z-50 cursor-pointer bg-[#437634] rounded-full p-4'>
        <IconMessageFilled color='white' size={25} />
    </div>
  )
}

export default Chatbot