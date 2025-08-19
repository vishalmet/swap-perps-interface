import React from 'react'


const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)] p-2 gap-2 sm:gap-0'>
        <p className='text-[#00FF00] flex items-center gap-2 text-xs'> <span className='h-2 flex items-center justify-center w-2 bg-[#00FF00] rounded-full'></span> Online</p>
        <p className='text-[var(--color-text-tertiary)] text-xs'>v1</p>
    </div>
  )
}

export default Footer