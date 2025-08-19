import React from 'react'


const Footer = () => {
  return (
    <div className='flex items-center justify-between bg-black border-t border-white/10 p-2'>
        <p className='text-[#00FF00] flex items-center gap-2 text-xs'> <span className='h-2 flex items-center justify-center w-2 bg-[#00FF00] rounded-full'></span> Online</p>
        <p className='text-white/50 text-xs'>v1</p>
    </div>
  )
}

export default Footer