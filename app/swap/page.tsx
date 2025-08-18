import React from 'react'
import { ArrowDownUp, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SwapPage = () => {
  const tokenPairs = [
    { from: 'ETH', to: 'USDC', fromAmount: '1.0', toAmount: '2,450.50', price: '$2,450.50' },
    { from: 'BTC', to: 'ETH', fromAmount: '0.05', toAmount: '1.2', price: '$48,000.00' },
    { from: 'SOL', to: 'USDT', fromAmount: '100', toAmount: '8,500.00', price: '$85.00' },
    { from: 'MATIC', to: 'USDC', fromAmount: '500', toAmount: '450.00', price: '$0.90' },
  ]

  return (
    <div className='p-4 px-16'>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold text-white'>Swap</h1>
          <p className='text-gray-400'>Trade tokens instantly</p>
        </div>

        {/* Swap Interface */}
        <div className='bg-[#1C1F20] rounded-2xl p-6 border border-[#FFFFFF]/10'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold text-white'>Swap</h2>
            <Button variant="ghost" size="icon" className='text-gray-400 hover:text-white'>
              <Settings size={16} />
            </Button>
          </div>

          {/* From Token */}
          <div className='bg-[#0E0E0E] rounded-xl p-4 mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-gray-400'>From</span>
              <span className='text-sm text-gray-400'>Balance: 2.5 ETH</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>ETH</span>
              </div>
              <input 
                type="text" 
                placeholder="0.0" 
                className='flex-1 bg-transparent text-2xl font-bold text-white outline-none'
                defaultValue="1.0"
              />
              <Button variant="outline" size="sm">ETH</Button>
            </div>
          </div>

          {/* Swap Arrow */}
          <div className='flex justify-center mb-4'>
            <div className='w-10 h-10 bg-[#00FFF0] rounded-full flex items-center justify-center'>
              <ArrowDownUp size={20} className='text-black' />
            </div>
          </div>

          {/* To Token */}
          <div className='bg-[#0E0E0E] rounded-xl p-4 mb-6'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-sm text-gray-400'>To</span>
              <span className='text-sm text-gray-400'>Balance: 1,250 USDC</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-green-500 rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>USDC</span>
              </div>
              <input 
                type="text" 
                placeholder="0.0" 
                className='flex-1 bg-transparent text-2xl font-bold text-white outline-none'
                defaultValue="2,450.50"
              />
              <Button variant="outline" size="sm">USDC</Button>
            </div>
          </div>

          {/* Swap Button */}
          <Button variant="default" size="default" className='w-full'>
            Swap ETH for USDC
          </Button>
        </div>

        {/* Recent Swaps */}
        <div className='bg-[#1C1F20] rounded-2xl p-6 border border-[#FFFFFF]/10'>
          <h3 className='text-lg font-bold text-white mb-4'>Recent Swaps</h3>
          <div className='space-y-3'>
            {tokenPairs.map((pair, index) => (
              <div key={index} className='flex items-center justify-between p-3 bg-[#0E0E0E] rounded-lg'>
                <div className='flex items-center gap-3'>
                  <div className='flex -space-x-2'>
                    <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-xs'>{pair.from}</span>
                    </div>
                    <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
                      <span className='text-white font-bold text-xs'>{pair.to}</span>
                    </div>
                  </div>
                  <div>
                    <p className='text-white font-medium'>{pair.fromAmount} {pair.from} → {pair.toAmount} {pair.to}</p>
                    <p className='text-gray-400 text-sm'>{pair.price}</p>
                  </div>
                </div>
                <span className='text-[#00FFF0] text-sm'>2 min ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapPage
