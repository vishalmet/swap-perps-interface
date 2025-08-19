"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Assets } from './Assets'
import { Bell, BookOpen, ChartCandlestick, ChartColumnStacked, ChevronDown, Coins, Scale, Settings, UserCircle, Users, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from './ThemeProvider'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { theme } = useTheme()
    
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        <header className={`w-full flex justify-between items-center p-2 px-4 relative ${theme === 'light' && pathname === '/swap' ? 'bg-[#F7F8FA]' : ''}`}>
            {/* Desktop Navigation */}
            <section className="hidden lg:flex items-center gap-4">
                <Image src={Assets.KanaLogo} alt="Kanalabs" width={100} height={100} />
                <div className="">
                    <ul className='flex items-center gap-4 text-[12px] text-[var(--color-text-primary)] font-bold cursor-pointer'>
                        {navigationItems.map((item) => (
                            <li 
                                key={item.id}
                                className={`flex items-center gap-1 transition-colors duration-200 ${
                                    activePage === item.id 
                                        ? 'text-[var(--color-primary-text)]' 
                                        : 'hover:text-[var(--color-primary-text)]'
                                }`}
                                onClick={() => handleNavigation(item.id, item.path)}
                            >
                                <item.icon size={16} />
                                {item.label}
                            </li>
                        ))}
                        <li className='flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors duration-200'>
                            More <ChevronDown size={16} />
                        </li>
                    </ul>
                </div>
            </section>

            {/* Mobile Logo */}
            <section className="lg:hidden flex items-center">
                <Image src={Assets.KanaLogo} alt="Kanalabs" width={80} height={80} />
            </section>

            {/* Desktop Action Buttons */}
            <section className='hidden lg:flex space-x-2'>
                {activePage === 'perps' ? (
                    // Show these 4 buttons only on perps page
                    <>
                        <Button variant='secondary' size='lg' className='text-[var(--color-text-tertiary)]'><Image src={theme === 'light' ? Assets.LightStar : Assets.Star} alt='star' width={16} height={16} />VIP<Image src={Assets.Info} alt='info' width={16} height={16} /></Button>
                        <Button variant='secondary' size='lg' className=''><Image src={theme === 'light' ? Assets.LightWin : Assets.Win} alt='Coins' width={16} height={16} />Win $20</Button>
                        <Button variant='secondary' size='lg' className=''><Image src={theme === 'light' ? Assets.LightDeposit : Assets.Deposit} alt='Card' width={16} height={16} />Deposit</Button>
                        <Button variant='secondary' size='lg' className=''><Image src={theme === 'light' ? Assets.LightUser : Assets.User} alt='User' width={16} height={16} />Sign in</Button>
                    </>
                ) : (
                    // Show Connect Wallet button on other pages (swap, trade, etc.)
                    <Button variant='secondary' size='lg'><UserCircle size={16} />Connect Wallet</Button>
                )}
                
                <Button variant='secondary' size='lg' className=' relative text-[var(--color-text-primary)]'><Bell size={16} className='relative' /> <span className='absolute top-1 right-2 bg-[#FFB74D] rounded-full w-2 h-2 flex items-center justify-center'></span></Button>
                <Button variant='secondary' size='lg' className='text-[var(--color-text-primary)]'><Settings size={16} /></Button>
                <ThemeToggle />
            </section>

            {/* Mobile Action Buttons */}
            <section className='lg:hidden flex items-center gap-2'>
                <ThemeToggle />
                <Button variant='secondary' size='sm' className='text-[var(--color-text-primary)]'><Bell size={16} /></Button>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className='p-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors'
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </section>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)] z-50'>
                    <div className='p-4 space-y-4'>
                        {/* Mobile Navigation */}
                        <nav className='space-y-3'>
                            {navigationItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                        activePage === item.id 
                                            ? 'bg-[var(--color-bg-secondary)] text-[var(--color-primary-text)]' 
                                            : 'hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]'
                                    }`}
                                    onClick={() => {
                                        handleNavigation(item.id, item.path)
                                        setIsMobileMenuOpen(false)
                                    }}
                                >
                                    <item.icon size={20} />
                                    <span className='font-bold'>{item.label}</span>
                                </div>
                            ))}
                            <div className='flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] transition-colors duration-200'>
                                <ChevronDown size={20} />
                                <span className='font-bold'>More</span>
                            </div>
                        </nav>

                        {/* Mobile Action Buttons */}
                        <div className='space-y-3 pt-4 border-t border-[var(--color-border-primary)]'>
                            {activePage === 'perps' ? (
                                <>
                                    <Button variant='secondary' size='lg' className='w-full text-[var(--color-text-tertiary)]'><Image src={theme === 'light' ? Assets.LightStar : Assets.Star} alt='star' width={16} height={16} />VIP<Image src={Assets.Info} alt='info' width={16} height={16} /></Button>
                                    <Button variant='secondary' size='lg' className='w-full'><Image src={theme === 'light' ? Assets.LightWin : Assets.Win} alt='Coins' width={16} height={16} />Win $20</Button>
                                    <Button variant='secondary' size='lg' className='w-full'><Image src={theme === 'light' ? Assets.LightDeposit : Assets.Deposit} alt='Card' width={16} height={16} />Deposit</Button>
                                    <Button variant='secondary' size='lg' className='w-full'><Image src={theme === 'light' ? Assets.LightUser : Assets.User} alt='User' width={16} height={16} />Sign in</Button>
                                </>
                            ) : (
                                <Button variant='secondary' size='lg' className='w-full'><UserCircle size={16} />Connect Wallet</Button>
                            )}
                            <Button variant='secondary' size='lg' className='w-full text-[var(--color-text-primary)]'><Settings size={16} />Settings</Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header