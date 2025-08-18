"use client"
import React, { useState } from 'react'
import { ArrowDownUp, Settings, RefreshCw, Grid3X3, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Assets } from '@/components/Assets'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

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
      {/* Main Swap Interface */}
      <div className=''>
        <Card>
          <CardContent className='p-6 space-y-3'>
            <div className='flex items-center justify-between'>
              <p className='font-bold text-[14px]'>Same-chain Swap</p>
              <div className=" flex items-center gap-3 ">
                <Image src={Assets.Refresh} alt='refresh' width={16} height={16} className='cursor-pointer hover:opacity-80' />
                <Image src={Assets.Settings} alt='settings' width={16} height={16} className='cursor-pointer hover:opacity-80' />
              </div>
            </div>

            {/* Chain Selection Bar */}
            <div className='flex items-center gap-2'>
              {chains.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => setSelectedChain(chain.id)}
                  className={`flex flex-col items-center transition-all duration-300 cursor-pointer p-2 w-fit ${
                    selectedChain === chain.id
                      ? 'opacity-100 scale-110'
                      : 'opacity-100 hover:opacity-80'
                  }`}
                >
                  <div className={`flex items-center justify-center ${
                    selectedChain === chain.id ? 'border border-white/10 rounded-[8px] bg-white/6 p-2' : ''
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
            </div>

            <div className='flex items-center gap-2'>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default SwapPage
