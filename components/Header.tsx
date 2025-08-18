import React from 'react'
import Image from 'next/image'
import { Assets } from './Assets'
import { Bell, BookOpen, ChartCandlestick, ChartColumnStacked, ChevronDown, Coins, Scale, Settings, UserCircle, Users } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='w-full flex justify-between items-center'>
            <section className=" flex items-center gap-4">
                <Image src={Assets.KanaLogo} alt="Kanalabs" width={100} height={100} />
                <div className="">
                    <ul className='flex items-center gap-4 text-[12px] text-white font-bold cursor-pointer'>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><Coins size={16} />Swap</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><ChartColumnStacked size={16} />Trade</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><ChartCandlestick size={16} />Perps</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><Scale size={16} />OPerps</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><Users size={16} />Refer</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'><BookOpen size={16} />Learn</li>
                        <li className='flex items-center gap-1 hover:text-[#00FFF0]'>More <ChevronDown size={16} /></li>
                    </ul>
                </div>
            </section>
            <section className='space-x-2'>
                <Button variant='secondary' size='lg'><UserCircle size={16} />Connect Wallet</Button>
                <Button variant='secondary' size='lg' className=' relative text-white'><Bell size={16} className='relative' /> <span className='absolute top-1 right-2 bg-[#FFB74D] rounded-full w-2 h-2 flex items-center justify-center'></span></Button>
                <Button variant='secondary' size='lg' className='text-white'><Settings size={16} /></Button>
            </section>
        </header>
    )
}

export default Header