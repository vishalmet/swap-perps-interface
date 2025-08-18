"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Assets } from './Assets'
import { Bell, BookOpen, ChartCandlestick, ChartColumnStacked, ChevronDown, Coins, Scale, Settings, UserCircle, Users } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

const Header = (props: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    
    // Set default active page based on current pathname
    const getActivePage = () => {
        if (pathname === '/') return 'swap'
        if (pathname === '/swap') return 'swap'
        if (pathname === '/perps') return 'perps'
        if (pathname === '/trade') return 'trade'
        if (pathname === '/operps') return 'operps'
        if (pathname === '/refer') return 'refer'
        if (pathname === '/learn') return 'learn'
        return 'swap'
    }

    const [activePage, setActivePage] = useState(getActivePage())

    const navigationItems = [
        { id: 'swap', label: 'Swap', icon: Coins, path: '/swap' },
        { id: 'trade', label: 'Trade', icon: ChartColumnStacked, path: '/trade' },
        { id: 'perps', label: 'Perps', icon: ChartCandlestick, path: '/perps' },
        { id: 'operps', label: 'OPerps', icon: Scale, path: '/operps' },
        { id: 'refer', label: 'Refer', icon: Users, path: '/refer' },
        { id: 'learn', label: 'Learn', icon: BookOpen, path: '/learn' },
    ]

    const handleNavigation = (pageId: string, path: string) => {
        setActivePage(pageId)
        router.push(path)
    }

    return (
        <header className='w-full flex justify-between items-center'>
            <section className=" flex items-center gap-4">
                <Image src={Assets.KanaLogo} alt="Kanalabs" width={100} height={100} />
                <div className="">
                    <ul className='flex items-center gap-4 text-[12px] text-white font-bold cursor-pointer'>
                        {navigationItems.map((item) => (
                            <li 
                                key={item.id}
                                className={`flex items-center gap-1 transition-colors duration-200 ${
                                    activePage === item.id 
                                        ? 'text-[#00FFF0]' 
                                        : 'hover:text-[#00FFF0]'
                                }`}
                                onClick={() => handleNavigation(item.id, item.path)}
                            >
                                <item.icon size={16} />
                                {item.label}
                            </li>
                        ))}
                        <li className='flex items-center gap-1 hover:text-[#00FFF0] transition-colors duration-200'>
                            More <ChevronDown size={16} />
                        </li>
                    </ul>
                </div>
            </section>
            <section className='space-x-2'>
                <Button variant='secondary' size='lg'><UserCircle size={16} />Connect Wallet</Button>
                <Button variant='secondary' size='lg' className='text-white/40'><Image src={Assets.Star} alt='star' width={16} height={16} />VIP<Image src={Assets.Info} alt='info' width={16} height={16} /></Button>
                <Button variant='secondary' size='lg' className=''><Image src={Assets.Win} alt='Coins' width={16} height={16} />Win $20</Button>
                <Button variant='secondary' size='lg' className=''><Image src={Assets.Deposit} alt='Card' width={16} height={16} />Deposit</Button>
                <Button variant='secondary' size='lg' className=''><Image src={Assets.User} alt='User' width={16} height={16} />Sign in</Button>
                
                <Button variant='secondary' size='lg' className=' relative text-white'><Bell size={16} className='relative' /> <span className='absolute top-1 right-2 bg-[#FFB74D] rounded-full w-2 h-2 flex items-center justify-center'></span></Button>
                <Button variant='secondary' size='lg' className='text-white'><Settings size={16} /></Button>
            </section>
        </header>
    )
}

export default Header