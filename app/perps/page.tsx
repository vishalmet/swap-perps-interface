import React from 'react'
import { TrendingUp, TrendingDown, BarChart3, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PerpsPage = () => {
  const tradingPairs = [
    { 
      symbol: 'ETH/USD', 
      price: '$2,450.50', 
      change: '+2.45%', 
      volume: '$125.4M', 
      trend: 'up',
      high: '$2,480.00',
      low: '$2,420.00'
    },
    { 
      symbol: 'BTC/USD', 
      price: '$48,250.00', 
      change: '-1.23%', 
      volume: '$89.2M', 
      trend: 'down',
      high: '$48,800.00',
      low: '$47,900.00'
    },
    { 
      symbol: 'SOL/USD', 
      price: '$85.25', 
      change: '+5.67%', 
      volume: '$45.8M', 
      trend: 'up',
      high: '$86.00',
      low: '$84.50'
    },
    { 
      symbol: 'MATIC/USD', 
      price: '$0.92', 
      change: '+0.87%', 
      volume: '$23.1M', 
      trend: 'up',
      high: '$0.93',
      low: '$0.91'
    }
  ]

  const orderBook = [
    { price: '$2,450.50', size: '125.4', total: '125.4', side: 'bid' },
    { price: '$2,450.25', size: '89.2', total: '214.6', side: 'bid' },
    { price: '$2,450.00', size: '156.7', total: '371.3', side: 'bid' },
    { price: '$2,449.75', size: '98.3', total: '469.6', side: 'ask' },
    { price: '$2,449.50', size: '134.8', total: '604.4', side: 'ask' },
    { price: '$2,449.25', size: '76.9', total: '681.3', side: 'ask' },
  ]

  return (
    <div className='p-4 px-16'>
      <div className='max-w-7xl mx-auto p-6 space-y-6'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold text-white'>Perpetuals</h1>
          <p className='text-gray-400'>Trade with leverage up to 100x</p>
        </div>

        {/* Trading Pairs Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {tradingPairs.map((pair, index) => (
            <div key={index} className='bg-[#1C1F20] rounded-2xl p-4 border border-[#FFFFFF]/10 hover:border-[#00FFF0]/50 transition-colors cursor-pointer'>
              <div className='flex justify-between items-start mb-3'>
                <h3 className='text-lg font-bold text-white'>{pair.symbol}</h3>
                {pair.trend === 'up' ? (
                  <TrendingUp size={20} className='text-green-500' />
                ) : (
                  <TrendingDown size={20} className='text-red-500' />
                )}
              </div>
              <div className='space-y-2'>
                <p className='text-2xl font-bold text-white'>{pair.price}</p>
                <p className={`text-sm font-medium ${pair.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {pair.change}
                </p>
                <div className='text-xs text-gray-400 space-y-1'>
                  <p>24h High: {pair.high}</p>
                  <p>24h Low: {pair.low}</p>
                  <p>Volume: {pair.volume}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Trading Interface */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Chart Area */}
          <div className='lg:col-span-2 bg-[#1C1F20] rounded-2xl p-6 border border-[#FFFFFF]/10'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-bold text-white'>ETH/USD Chart</h3>
              <div className='flex gap-2'>
                <Button variant="outline" size="sm">1H</Button>
                <Button variant="outline" size="sm">4H</Button>
                <Button variant="outline" size="sm" className='bg-[#00FFF0] text-black'>1D</Button>
                <Button variant="outline" size="sm">1W</Button>
              </div>
            </div>
            <div className='h-80 bg-[#0E0E0E] rounded-xl flex items-center justify-center'>
              <div className='text-center text-gray-400'>
                <BarChart3 size={48} className='mx-auto mb-2' />
                <p>Chart coming soon</p>
              </div>
            </div>
          </div>

          {/* Order Book */}
          <div className='bg-[#1C1F20] rounded-2xl p-6 border border-[#FFFFFF]/10'>
            <div className='flex items-center gap-2 mb-4'>
              <BookOpen size={20} className='text-[#00FFF0]' />
              <h3 className='text-xl font-bold text-white'>Order Book</h3>
            </div>
            <div className='space-y-1'>
              {orderBook.map((order, index) => (
                <div key={index} className={`flex justify-between text-sm p-2 rounded ${
                  order.side === 'bid' ? 'bg-green-500/10' : 'bg-red-500/10'
                }`}>
                  <span className={`font-medium ${order.side === 'bid' ? 'text-green-500' : 'text-red-500'}`}>
                    {order.price}
                  </span>
                  <span className='text-white'>{order.size}</span>
                  <span className='text-gray-400'>{order.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trading Form */}
        <div className='bg-[#1C1F20] rounded-2xl p-6 border border-[#FFFFFF]/10'>
          <h3 className='text-xl font-bold text-white mb-4'>Place Order</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Buy Order */}
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-green-500'>Buy ETH</h4>
              <div className='space-y-3'>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Price (USD)</label>
                  <input 
                    type="text" 
                    placeholder="0.00" 
                    className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'
                    defaultValue="2,450.50"
                  />
                </div>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Size (ETH)</label>
                  <input 
                    type="text" 
                    placeholder="0.00" 
                    className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'
                  />
                </div>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Leverage</label>
                  <select className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'>
                    <option>1x</option>
                    <option>5x</option>
                    <option>10x</option>
                    <option>25x</option>
                    <option>50x</option>
                    <option>100x</option>
                  </select>
                </div>
                <Button variant="default" size="default" className='w-full bg-green-600 hover:bg-green-700'>
                  Buy ETH
                </Button>
              </div>
            </div>

            {/* Sell Order */}
            <div className='space-y-4'>
              <h4 className='text-lg font-semibold text-red-500'>Sell ETH</h4>
              <div className='space-y-3'>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Price (USD)</label>
                  <input 
                    type="text" 
                    placeholder="0.00" 
                    className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'
                    defaultValue="2,450.50"
                  />
                </div>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Size (ETH)</label>
                  <input 
                    type="text" 
                    placeholder="0.00" 
                    className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'
                  />
                </div>
                <div>
                  <label className='block text-sm text-gray-400 mb-1'>Leverage</label>
                  <select className='w-full bg-[#0E0E0E] rounded-lg p-3 text-white border border-[#FFFFFF]/10 focus:border-[#00FFF0] outline-none'>
                    <option>1x</option>
                    <option>5x</option>
                    <option>10x</option>
                    <option>25x</option>
                    <option>50x</option>
                    <option>100x</option>
                  </select>
                </div>
                <Button variant="default" size="default" className='w-full bg-red-600 hover:bg-red-700'>
                  Sell ETH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerpsPage
