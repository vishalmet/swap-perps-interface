"use client"
import React, { useState } from 'react'
import { ArrowDownUp, Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Assets } from '@/components/Assets'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from '@/components/ui/accordion'

const SwapPage = () => {
    const [activeTab, setActiveTab] = useState<'same-chain' | 'cross-chain'>('same-chain')
    const [selectedChain, setSelectedChain] = useState('aptos')

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
        <main className='max-w-xl mx-auto space-y-6 m-10'>
            <div className="">
                {/* Main Swap Interface */}
                <section className='flex items-center justify-between'>
                    <div className="flex items-center">
                        <button
                            onClick={() => setActiveTab('same-chain')}
                            className={` relative flex gap-3 rounded-t-xl text-xs cursor-pointer border border-b-0 border-white/10 shadow-sm py-4 px-6 transition-all duration-200 ${activeTab === 'same-chain'
                                    ? 'bg-[#17181A] text-white/80'
                                    : 'bg-[#111213] text-[#A5A5A6] hover:text-white/80'
                                }`}
                        >
                            <Image src={Assets.Split} alt='split' width={18} height={16} className='cursor-pointer hover:opacity-80' />
                            Same-chain
                            {activeTab === 'same-chain' && <div className="absolute -bottom-0.5 left-0 w-full border-b-2 border-[#17181A]"></div>}
                        </button>
                        <button
                            onClick={() => setActiveTab('cross-chain')}
                            className={` relative flex gap-3 rounded-t-xl text-xs cursor-pointer border border-b-0 border-white/10 shadow-sm py-4 px-6 transition-all duration-200 ${activeTab === 'cross-chain'
                                    ? 'bg-[#17181A] text-white/80'
                                    : 'bg-[#111213] text-[#A5A5A6] hover:text-white/80'
                                }`}
                        >
                            <Shuffle className='w-[18px] h-[16px]' />
                            Cross-chain
                            {activeTab === 'cross-chain' && <div className="absolute -bottom-0.5 left-0 w-full border-b-2 border-[#17181A]"></div>}
                        </button>
                    </div>
                </section>
                <Card className='rounded-tl-none'>
                    <CardContent className='p-6 space-y-3'>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold text-[14px]'>{activeTab === 'same-chain' ? 'Same-chain Swap' : 'Cross-chain Swap'}</p>
                            <div className=" flex items-center gap-3 ">
                                <Image src={Assets.Refresh} alt='refresh' width={16} height={16} className='cursor-pointer hover:opacity-80' />
                                <Image src={Assets.Settings} alt='settings' width={16} height={16} className='cursor-pointer hover:opacity-80' />
                            </div>
                        </div>

                        {/* Chain Selection Band */}
                        <section className='flex items-center gap-2'>
                            {chains.map((chain) => (
                                <button
                                    key={chain.id}
                                    onClick={() => setSelectedChain(chain.id)}
                                    className={`flex flex-col items-center transition-all duration-300 cursor-pointer p-2 w-fit ${selectedChain === chain.id
                                        ? 'opacity-100 scale-110'
                                        : 'opacity-100 hover:opacity-80'
                                        }`}
                                >
                                    <div className={`flex items-center justify-center ${selectedChain === chain.id ? 'border border-white/10 rounded-[8px] bg-white/6 p-2' : ''
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
                        <Card className='flex py-4 px-6 gap-2 h-auto bg-[#111213]'>
                            <section className=' flex w-full gap-2'>
                                <div className=" flex-1 flex flex-col justify-between">
                                    <p className='text-[12px]'>Pay from <span className='text-button-primary font-bold pl-1'> Connect Wallet</span></p>
                                    <div className=" mt-auto">
                                        <input type="text" placeholder='0.00' className='bg-transparent outline-none py-2 font-medium text-xl w-full' />
                                        <div className="border-b border-white/10"></div>
                                    </div>
                                </div>
                                <Card className=' flex flex-row items-center gap-2 p-4 text-base'>
                                    <Image src={Assets.TokenPlaceholder} alt='token' width={40} height={40} />
                                    <p className='font-bold'>Token <br /> <span className='font-medium'><span className='font-normal'>on</span> Chain</span></p>
                                </Card>
                            </section>
                            <div className="flex justify-between items-center text-[#777879] text-[12px]">
                                <p>USD <span>0</span></p>
                                <p> Balance -</p>
                            </div>
                        </Card>

                        {/* To */}
                        <Card className='flex py-4 px-6 gap-2 h-auto bg-[#111213] relative'>
                            <div className="absolute -top-1 cursor-pointer hover:opacity-80 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#17181A] text-white/80 rounded-[8px] w-fit p-2 z-50 border border-white/10">
                                <ArrowDownUp className='text-white/60' />
                            </div>
                            <section className=' flex w-full gap-2'>
                                <div className=" flex-1 flex flex-col justify-between">
                                    <p className='text-[12px]'>Receive to <span className='text-button-primary font-bold pl-1'> Connect Wallet</span></p>
                                    <div className=" mt-auto">
                                        <input type="text" placeholder='0.00' disabled className='bg-transparent outline-none py-2 font-medium text-xl w-full' />
                                        <div className="border-b border-white/10"></div>
                                    </div>
                                </div>
                                <Card className=' flex flex-row items-center gap-2 p-4'>
                                    <Image src={Assets.TokenPlaceholder} alt='token' width={40} height={40} />
                                    <p className='font-bold'>Token <br /> <span className='font-medium'><span className='font-normal'>on</span> Chain</span></p>
                                </Card>
                            </section>
                            <div className="flex justify-between items-center text-[#777879] text-[12px]">
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

            <Accordion type='single' collapsible>
                <AccordionItem value='item-1' className='text-white/80'>
                    <AccordionTrigger className='text-[#777879]'>
                        Additional details
                    </AccordionTrigger>
                    <AccordionContent className='px-6'>
                        <div className='space-y-3'>
                            <div className='flex justify-between items-center'>
                                <span className='text-[#777879] text-sm'>Minimum Received</span>
                                <span className='text-white/60'>0.00</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span className='text-[#777879] text-sm'>Transaction Fee</span>
                                <span className='text-white/60'>0.00</span>
                            </div>
                            <div className='flex items-center gap-2 text-[#00FFF0] cursor-pointer hover:opacity-80'>
                                <span className='text-sm font-medium'>More routes</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 7h10v10" />
                                    <path d="M7 17 17 7" />
                                </svg>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}

export default SwapPage
