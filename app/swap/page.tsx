"use client"
import React, { useState } from 'react'
import { ArrowDownUp, Settings, RefreshCw, Grid3X3, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Assets } from '@/components/Assets'
import Image from 'next/image'

const SwapPage = () => {
  const [activeTab, setActiveTab] = useState<'same-chain' | 'cross-chain'>('same-chain')
  const [selectedChain, setSelectedChain] = useState('ethereum')

  const chains = [
    { id: 'ethereum', name: 'Ethereum', icon: Assets.Ethereum, active: true },
    { id: 'arbitrum', name: 'Arbitrum', icon: Assets.Arbitrum },
    { id: 'polygon', name: 'Polygon', icon: Assets.Polygon },
    { id: 'avalanche', name: 'Avalanche', icon: Assets.Avalanche },
    { id: 'bsc', name: 'BSC', icon: Assets.Bsc },
    { id: 'solana', name: 'Solana', icon: Assets.Solana },
    { id: 'aptos', name: 'Aptos', icon: Assets.Aptos },
    { id: 'sui', name: 'Sui', icon: Assets.Sui },
    { id: 'zksync', name: 'zkSync', icon: Assets.ZkSync },
  ]

  return (
    <div className='max-w-2xl mx-auto space-y-6'>
      {/* Main Swap Interface */}
      <div className='bg-[#1C1F20] rounded-2xl border border-[#FFFFFF]/10 overflow-hidden'>
        {/* Tab Navigation */}
        <div className='flex items-center justify-between p-4 border-b border-[#FFFFFF]/10'>
          <div className='flex items-center gap-6'>
            <button
              onClick={() => setActiveTab('same-chain')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'same-chain'
                  ? 'text-[#00FFF0] bg-[#00FFF0]/10'
                  : 'text-white hover:text-[#00FFF0]'
              }`}
            >
              <ArrowUpDown size={16} />
              Same-chain
            </button>
            <button
              onClick={() => setActiveTab('cross-chain')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'cross-chain'
                  ? 'text-[#00FFF0] bg-[#00FFF0]/10'
                  : 'text-white hover:text-[#00FFF0]'
              }`}
            >
              <ArrowUpDown size={16} className='rotate-45' />
              Cross-chain
            </button>
          </div>
          <Button variant="ghost" size="icon" className='text-gray-400 hover:text-white'>
            <Grid3X3 size={16} />
          </Button>
        </div>

        {/* Chain Selection Bar */}
        <div className='p-4 border-b border-[#FFFFFF]/10'>
          <div className='flex items-center gap-3 overflow-x-auto pb-2'>
            {chains.map((chain) => (
              <button
                key={chain.id}
                onClick={() => setSelectedChain(chain.id)}
                className={`flex flex-col items-center gap-1 min-w-[60px] transition-all ${
                  selectedChain === chain.id
                    ? 'opacity-100 scale-110'
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedChain === chain.id ? 'ring-2 ring-[#00FFF0]' : ''
                }`}>
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    width={32}
                    height={32}
                    className='rounded-full'
                  />
                </div>
                <span className='text-xs text-white font-medium'>{chain.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Swap Interface */}
        <div className='p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold text-white'>
              {activeTab === 'same-chain' ? 'Same-chain Swap' : 'Cross-chain Swap'}
            </h2>
            <div className='flex items-center gap-2'>
              <Button variant="ghost" size="icon" className='text-gray-400 hover:text-white'>
                <RefreshCw size={16} />
              </Button>
              <Button variant="ghost" size="icon" className='text-gray-400 hover:text-white'>
                <Grid3X3 size={16} />
              </Button>
            </div>
          </div>

          {/* Pay From Section */}
          <div className='bg-[#0E0E0E] rounded-xl p-4 mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-gray-400'>Pay from</span>
            </div>
            <div className='flex items-center gap-3'>
              <input
                type="text"
                placeholder="0.00"
                className='flex-1 bg-transparent text-2xl font-bold text-white outline-none'
                defaultValue="0.00"
              />
              <div className='flex flex-col items-end'>
                <div className='text-sm text-gray-400'>USD 0</div>
                <div className='text-xs text-[#00FFF0] cursor-pointer hover:underline'>
                  Connect Wallet
                </div>
              </div>
            </div>
            <div className='mt-3 flex items-center gap-3'>
              <div className='flex-1 bg-[#1C1F20] rounded-lg p-3 border border-dashed border-[#FFFFFF]/20 cursor-pointer hover:border-[#00FFF0]/50 transition-colors'>
                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 bg-[#00FFF0] rounded-full flex items-center justify-center'>
                    <span className='text-black font-bold text-xs'>T</span>
                  </div>
                  <div className='text-left'>
                    <div className='text-white font-medium'>Token</div>
                    <div className='text-gray-400 text-xs'>on {chains.find(c => c.id === selectedChain)?.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-2 text-sm text-gray-400'>Balance -</div>
          </div>

          {/* Swap Direction Arrow */}
          <div className='flex justify-center mb-4'>
            <div className='w-10 h-10 bg-[#00FFF0] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#70FFF7] transition-colors'>
              <ArrowDownUp size={20} className='text-black' />
            </div>
          </div>

          {/* Receive To Section */}
          <div className='bg-[#0E0E0E] rounded-xl p-4 mb-6'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-gray-400'>Receive to</span>
            </div>
            <div className='flex items-center gap-3'>
              <input
                type="text"
                placeholder="0.00"
                className='flex-1 bg-transparent text-2xl font-bold text-white outline-none'
                defaultValue="0.00"
              />
              <div className='flex flex-col items-end'>
                <div className='text-sm text-gray-400'>USD 0</div>
                <div className='text-xs text-[#00FFF0] cursor-pointer hover:underline'>
                  Connect Wallet
                </div>
              </div>
            </div>
            <div className='mt-3 flex items-center gap-3'>
              <div className='flex-1 bg-[#1C1F20] rounded-lg p-3 border border-dashed border-[#FFFFFF]/20 cursor-pointer hover:border-[#00FFF0]/50 transition-colors'>
                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 bg-[#00FFF0] rounded-full flex items-center justify-center'>
                    <span className='text-black font-bold text-xs'>T</span>
                  </div>
                  <div className='text-left'>
                    <div className='text-white font-medium'>Token</div>
                    <div className='text-gray-400 text-xs'>on {chains.find(c => c.id === selectedChain)?.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-2 text-sm text-gray-400'>Balance -</div>
          </div>

          {/* Swap Button */}
          <Button 
            variant="outline" 
            size="default" 
            className='w-full h-12 text-lg font-bold border-[#00FFF0] text-white hover:bg-[#00FFF0] hover:text-black transition-all'
          >
            Swap now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SwapPage
