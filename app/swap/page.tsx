"use client"
import React, { useState } from 'react'
import { ArrowDownUp, LayoutGrid, Shuffle, CircleX, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Assets } from '@/components/Assets'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from '@/components/ui/accordion'
import Footer from '@/components/Footer'
import { useTheme } from '@/components/ThemeProvider'

const SwapPage = () => {
    const { theme } = useTheme()
    const [activeTab, setActiveTab] = useState<'same-chain' | 'cross-chain'>('same-chain')
    const [selectedChain, setSelectedChain] = useState('aptos')
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')

    const chains = [
        { id: 'aptos', name: 'Aptos', icon: Assets.Aptos, active: true },
        { id: 'zksync', name: 'zkSync', icon: Assets.ZkSync },
        { id: 'bsc', name: 'BSC', icon: Assets.Bsc },
        { id: 'polygon', name: 'Polygon', icon: Assets.Polygon },
        { id: 'arbitrum', name: 'Arbitrum', icon: Assets.Arbitrum },
        { id: 'avalanche', name: 'Avalanche', icon: Assets.Avalanche },
        { id: 'ethereum', name: 'Ethereum', icon: Assets.Ethereum },
        { id: 'solana', name: 'Solana', icon: Assets.Solana },
        { id: 'sui', name: 'Sui', icon: Assets.Sui },
    ]

    return (
        <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-[#F7F8FA]' : ''}`}>
            <main className='p-2 sm:p-4 flex-1'>
                <div className="max-w-xl mx-auto px-2 sm:px-0">
                    {/* Main Swap Interface */}
                    <section className='flex items-center justify-between'>
                        <div className="flex items-center w-full sm:w-auto">
                            <button
                                onClick={() => setActiveTab('same-chain')}
                                className={`relative flex gap-2 sm:gap-3 rounded-t-xl text-[10px] sm:text-xs cursor-pointer font-bold border border-b-0 border-[var(--color-border-primary)] py-2 sm:py-4 px-3 sm:px-6 transition-all duration-200 flex-1 sm:flex-none ${activeTab === 'same-chain'
                                    ? theme === 'light' ? 'bg-[#FCFDFE] text-[var(--color-text-primary)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]'
                                    : theme === 'light' ? 'bg-[#EFF7F8] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]' : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                                    }`}
                            >
                                <Image src={theme === 'light' ? Assets.LightSplit : Assets.Split} alt='split' width={16} height={14} className='cursor-pointer hover:opacity-80 sm:w-[18px] sm:h-[16px]' />
                                <span className='hidden sm:inline'>Same-chain</span>
                                <span className='sm:hidden'>Same</span>
                                {activeTab === 'same-chain' && <div className={`absolute -bottom-0.5 left-0 w-full border-b-2 ${theme === 'light' ? 'border-[#FCFDFE]' : 'border-[var(--color-bg-secondary)]'}`}></div>}
                            </button>
                            <button
                                onClick={() => setActiveTab('cross-chain')}
                                className={`relative flex gap-2 sm:gap-3 rounded-t-xl text-[10px] sm:text-xs cursor-pointer font-bold border border-b-0 border-[var(--color-border-primary)] py-2 sm:py-4 px-3 sm:px-6 transition-all duration-200 flex-1 sm:flex-none ${activeTab === 'cross-chain'
                                    ? theme === 'light' ? 'bg-[#FCFDFE] text-[var(--color-text-primary)]' : 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]'
                                    : theme === 'light' ? 'bg-[#EFF7F8] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]' : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                                    }`}
                            >
                                <Shuffle className='w-[16px] h-[14px] sm:w-[18px] sm:h-[16px]' />
                                <span className='hidden sm:inline'>Cross-chain</span>
                                <span className='sm:hidden'>Cross</span>
                                {activeTab === 'cross-chain' && <div className={`absolute -bottom-0.5 left-0 w-full border-b-2 ${theme === 'light' ? 'border-[#FCFDFE]' : 'border-[var(--color-bg-secondary)]'}`}></div>}
                            </button>
                        </div>
                        <LayoutGrid className='w-[16px] h-[16px] text-[var(--color-primary-text)] cursor-pointer hover:opacity-80 m-2' />
                    </section>
                    <Card className={`rounded-tl-none ${theme === 'light' ? 'bg-[#FCFDFE]' : ''}`}>
                        <CardContent className='p-3 sm:p-6 space-y-3'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold text-[14px]'>{activeTab === 'same-chain' ? 'Same-chain Swap' : 'Cross-chain Swap'}</p>
                                <div className=" flex items-center gap-3 ">
                                    <Image src={Assets.Refresh} alt='refresh' width={16} height={16} className='cursor-pointer hover:opacity-80' />
                                    <Image src={Assets.Settings} alt='settings' width={16} height={16} className='cursor-pointer hover:opacity-80' />
                                </div>
                            </div>

                            {/* Chain Selection Band */}
                            <section className='flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2'>
                                {chains.map((chain) => (
                                    <button
                                        key={chain.id}
                                        onClick={() => setSelectedChain(chain.id)}
                                        className={`flex flex-col items-center transition-all duration-300 cursor-pointer p-1 sm:p-2 w-fit min-w-[60px] sm:min-w-0 ${selectedChain === chain.id
                                            ? 'opacity-100 scale-110'
                                            : 'opacity-100 hover:opacity-80'
                                            }`}
                                    >
                                        <div className={`flex items-center justify-center ${selectedChain === chain.id ? 'border border-[var(--color-border-primary)] rounded-[8px] bg-[var(--color-hover-primary)] p-2' : ''
                                            }`}>
                                            <Image
                                                src={chain.icon}
                                                alt={chain.name}
                                                width={24}
                                                height={24}
                                                className='rounded-full'
                                            />
                                        </div>
                                    </button>
                                ))}
                            </section>

                            {/* From */}
                            <Card className={`flex py-3 sm:py-4 px-3 sm:px-6 gap-2 h-auto ${theme === 'light' ? 'bg-[#F2F9F9]' : 'bg-[var(--color-bg-card)]'}`}>
                                <section className='flex w-full gap-2'>
                                    <div className=" flex-1 flex flex-col justify-between">
                                        <p className='text-[12px]'>Pay from <span className='text-button-primary font-bold pl-1'> Connect Wallet</span></p>
                                        <div className=" mt-auto relative">
                                            <input
                                                type="text"
                                                placeholder='0.00'
                                                value={fromAmount}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                                                        setFromAmount(value);
                                                    }
                                                }}
                                                className='bg-transparent outline-none py-2 font-medium text-xl w-full pr-8'
                                            />
                                            {fromAmount && (
                                                <CircleX
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
                                                    onClick={() => setFromAmount('')}
                                                />
                                            )}
                                            <div className="border-b border-[var(--color-border-primary)]"></div>
                                        </div>
                                    </div>
                                    <Card className={`flex flex-row items-center gap-2 p-2 sm:p-4 text-base ${theme === 'light' ? 'bg-[#FCFDFE]' : ''}`}>
                                        <Image src={theme === 'light' ? Assets.LightPlaceholder : Assets.TokenPlaceholder} alt='token' width={32} height={32} className='' />
                                        <p className='font-bold text-sm sm:text-base'>Token <br /> <span className='font-medium'><span className='font-normal'>on</span> Chain</span></p>
                                    </Card>
                                </section>
                                <div className="flex justify-between items-center text-[var(--color-text-secondary)] text-[12px]">
                                    <p>USD <span>0</span></p>
                                    <p> Balance -</p>
                                </div>
                            </Card>

                            {/* To */}
                            <Card className={`flex py-3 sm:py-4 px-3 sm:px-6 gap-2 h-auto relative ${theme === 'light' ? 'bg-[#F2F9F9]' : 'bg-[var(--color-bg-card)]'}`}>
                                <div className="absolute -top-1 cursor-pointer hover:opacity-80 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] rounded-[8px] w-fit p-2 z-50 border border-[var(--color-border-primary)]">
                                    <ArrowDownUp className='text-[var(--color-text-secondary)]' />
                                </div>
                                <section className='flex w-full gap-2'>
                                    <div className=" flex-1 flex flex-col justify-between">
                                        <p className='text-[12px]'>Receive to <span className='text-button-primary font-bold pl-1'> Connect Wallet</span></p>
                                        <div className=" mt-auto relative">
                                            <input
                                                type="text"
                                                placeholder='0.00'
                                                value={toAmount}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (value === '' || /^\d*\.?\d*$/.test(value)) {
                                                        setToAmount(value);
                                                    }
                                                }}
                                                className='bg-transparent outline-none py-2 font-medium text-xl w-full pr-8'
                                            />
                                            {toAmount && (
                                                <CircleX
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
                                                    onClick={() => setToAmount('')}
                                                />
                                            )}
                                            <div className="border-b border-[var(--color-border-primary)]"></div>
                                        </div>
                                    </div>
                                    <Card className={`flex flex-row items-center gap-2 p-2 sm:p-4 ${theme === 'light' ? 'bg-[#FCFDFE]' : ''}`}>
                                        <Image src={theme === 'light' ? Assets.LightPlaceholder : Assets.TokenPlaceholder} alt='token' width={32} height={32} className='sm:w-[40px] sm:h-[40px]' />
                                        <p className='font-bold text-sm sm:text-base'>Token <br /> <span className='font-medium'><span className='font-normal'>on</span> Chain</span></p>
                                    </Card>
                                </section>
                                <div className="flex justify-between items-center text-[var(--color-text-secondary)] text-[12px]">
                                    <p>USD <span>0</span></p>
                                    <p> Balance -</p>
                                </div>
                            </Card>
                            <Button variant='outline' className='w-full'>
                                Swap Now
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <Accordion type='single' collapsible className={`max-w-xl mx-auto mb-10 sm:mb-20 mt-6 ${theme === 'light' ? 'bg-[#FCFDFE]' : ''}`}>
                    <AccordionItem value='item-1' className='text-[var(--color-text-primary)]'>
                        <AccordionTrigger className='text-[var(--color-text-secondary)]'>
                            Additional details
                        </AccordionTrigger>
                        <AccordionContent className='px-6'>
                            <div className='space-y-3'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[var(--color-text-secondary)] text-sm'>Minimum Received</span>
                                    <span className='text-[var(--color-text-secondary)]'>0.00</span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <span className='text-[var(--color-text-secondary)] text-sm'>Transaction Fee</span>
                                    <span className='text-[var(--color-text-secondary)]'>0.00</span>
                                </div>
                                <div className='flex items-center gap-2 text-[var(--color-primary)] cursor-pointer hover:opacity-80'>
                                    <span className='text-sm font-medium'>More routes</span>
                                    <ExternalLink className='w-[16px] h-[16px] text-[var(--color-primary)]' />
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>
            <Footer />
        </div>
    )
}

export default SwapPage
