import React from 'react'
import { TrendingUp, TrendingDown, BarChart3, BookOpen, ChevronDown, Ellipsis, MoveDown, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Assets } from '@/components/Assets'
import Image from 'next/image'
import Footer from '@/components/Footer'

// Header Component with trading pair info
const PerpsHeader = () => (
  <Card className='bg-transparent flex flex-row gap-0 rounded-[8px]'>
    <CardAction className='flex items-center gap-1 text-white/80 font-bold border-r border-white/10 p-4 cursor-pointer hover:bg-white/5 rounded-l-xl'>
      <Image src={Assets.PerpPair} alt='perp pair' width={30} height={24} /> 
      APT-PERP<ChevronDown />
    </CardAction>
    <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'>
      <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Mark</span><br />
      <span className='text-sm text-white/80 font-bold'>$7.32</span>
    </CardAction>
    <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'>
      <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>24h change</span><br />
      <span className='text-sm text-[#66BB6A] font-bold'>+2 %</span>
    </CardAction>
    <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'>
      <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Oracle Price</span><br />
      <span className='text-sm text-white/80 font-bold'>$11.1</span>
    </CardAction>
    <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'>
      <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>24h volume</span><br />
      <span className='text-sm text-white/80 font-bold'>245,694,542</span>
    </CardAction>
    <CardAction className='py-1 px-4 w-[180px] hover:bg-white/5 rounded-r-xl flex justify-between items-center gap-2'>
      <span>
        <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Funding</span><br />
        <span className='text-sm font-bold text-[#FFB74D]'>0.012%</span>
      </span>
      <span>
        <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Next Funding</span><br />
        <span className='text-sm text-white/80 font-bold'>00:23:34</span>
      </span>
    </CardAction>
  </Card>
)

// Chart Component
const PerpsChart = () => (
  <Card className='rounded-[8px] min-h-[600px] flex justify-center items-center'>
    <CardContent>Graph</CardContent>
  </Card>
)

// Chart Component
const BuyOrSell = () => (
  <div className="w-full">
    <Card className='rounded-[8px] min-h-[200px] w-full flex justify-center items-center'>
      <CardContent>Graph</CardContent>
    </Card>
  </div>
)

// Orderbook Component
const Orderbook = () => {
  const sellOrders = [
    { price: '22.025', size: '307.825', sum: '307.825' },
    { price: '22.000', size: '45.082', sum: '352.907' },
    { price: '21.990', size: '0.114', sum: '353.021' },
    { price: '21.980', size: '0.500', sum: '353.521' },
    { price: '21.975', size: '1.200', sum: '354.721' },
    { price: '21.970', size: '0.800', sum: '355.521' },
    { price: '21.965', size: '0.300', sum: '355.821' },
    { price: '21.960', size: '0.600', sum: '356.421' },
    { price: '21.955', size: '0.400', sum: '356.821' },
    { price: '21.950', size: '0.700', sum: '357.521' },
    { price: '21.945', size: '0.250', sum: '357.771' },
    { price: '21.940', size: '0.350', sum: '358.121' },
    { price: '21.935', size: '0.450', sum: '358.571' },
    { price: '21.930', size: '0.550', sum: '359.121' },
    { price: '21.925', size: '0.650', sum: '359.771' }
  ]

  const buyOrders = [
    { price: '21.920', size: '0.750', sum: '0.750' },
    { price: '21.915', size: '0.850', sum: '1.600' },
    { price: '21.910', size: '0.950', sum: '2.550' },
    { price: '21.905', size: '1.050', sum: '3.600' },
    { price: '21.900', size: '1.150', sum: '4.750' },
    { price: '21.895', size: '1.250', sum: '6.000' },
    { price: '21.890', size: '1.350', sum: '7.350' },
    { price: '21.885', size: '1.450', sum: '8.800' },
    { price: '21.880', size: '1.550', sum: '10.350' },
    { price: '21.875', size: '1.650', sum: '12.000' },
    { price: '21.870', size: '1.750', sum: '13.750' },
    { price: '21.865', size: '1.850', sum: '15.600' },
    { price: '21.860', size: '1.950', sum: '17.550' },
    { price: '21.855', size: '2.050', sum: '19.600' },
    { price: '21.850', size: '2.150', sum: '21.750' }
  ]

  return (
    <Card className='rounded-[8px] h-[65%] w-full bg-transparent flex flex-col'>
      <CardHeader className='text-sm py-2 px-3 border-b border-white/10 font-bold flex-shrink-0'>
        Orderbook
      </CardHeader>

      {/* Headers - Fixed */}
      <div className='py-2 px-3'>
        <div className="flex text-[10px] font-bold">
          <p className='w-1/3'>Price <br /> <span className='text-white/40'>(eUSDT)</span></p>
          <p className='w-1/3 text-end'>Size <br /> <span className='text-white/40'>(eAPT)</span></p>
          <p className='w-1/3 text-end'>Sum <br /> <span className='text-white/40'>(eAPT)</span></p>
        </div>
      </div>

      {/* Scrollable Orders Container */}
      <div className='flex-1 flex flex-col'>
        {/* Sell Orders Section - Scrollable */}
        <div className='h-[150px] overflow-y-auto font-mono' style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
          {sellOrders.map((order, index) => (
            <div key={`ask-${index}`} className='flex text-[10px] px-3 py-0.5 hover:bg-[#EF5350]/20 cursor-pointer relative'>
              <div className='w-1/3 text-[#EF5350]'>{order.price}</div>
              <div className='w-1/3 text-end text-white/80'>{order.size}</div>
              <div className='w-1/3 text-end text-white/80'>{order.sum}</div>
              {/* Red stair-like background - decreasing from top, covering Size and Sum columns */}
              <div
                className='absolute right-0 top-0 bottom-0 bg-[#EF5350]/20'
                style={{
                  width: `${Math.max(33.33, 66.67 - (Math.floor(index / 2) * 10))}%`
                }}
              />
            </div>
          ))}
        </div>

        {/* Current Market Price - Fixed Center */}
        <div className='flex items-center py-2 px-3 flex-shrink-0'>
          <span className='text-[#EF5350] font-bold text-lg'>2345.5</span>
          <svg className='w-4 h-4 text-[#EF5350] ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
          <span className='text-white/60 text-base ml-2 underline'>2345.6</span>
        </div>

        {/* Buy Orders Section - Scrollable */}
        <div className='h-[150px] overflow-y-auto font-mono' style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
          {buyOrders.map((order, index) => (
            <div key={`bid-${index}`} className='flex text-[10px] px-3 py-0.5 hover:bg-[#66BB6A]/20 cursor-pointer relative'>
              <div className='w-1/3 text-[#66BB6A]'>{order.price}</div>
              <div className='w-1/3 text-end text-white/80'>{order.size}</div>
              <div className='w-1/3 text-end text-white/80'>{order.sum}</div>
              {/* Green stair-like background - increasing from top by 2 rows, covering Size and Sum columns */}
              <div
                className='absolute right-0 top-0 bottom-0 bg-[#66BB6A]/20'
                style={{
                  width: `${Math.min(66.67, 33.33 + (Math.floor(index / 2) * 10))}%`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// Trades Component
const Trades = () => {
  const tradesData = [
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'buy' },
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'sell' },
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'buy' },
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'sell' },
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'buy' },
    { price: '5.606', size: '23.234', time: '12:36:28', side: 'sell' }
  ]

  return (
    <Card className='rounded-[8px] h-[34%] w-full bg-transparent'>
      <CardHeader className='text-sm py-2 px-3 border-b border-white/10 font-bold flex-shrink-0'>
        Trades
      </CardHeader>
      <CardContent className='flex px-2 py-1 bg-[#121414] border-b border-white/10'>
        <p className='text-white/60 text-[10px] w-1/3'>Price</p>
        <p className='text-white/60 text-[10px] w-1/3'>Size</p>
        <p className='text-white/60 text-[10px] w-1/2'>Time</p>
      </CardContent>
      <div className="h-[70%] overflow-y-auto font-mono" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
        {tradesData.map((trade, index) => (
          <div key={`trade-${index}`} className="flex text-[10px] px-2 py-1 border-b border-white/10 last:border-b-0">
            <p className={`w-1/3 ${trade.side === 'buy' ? 'text-[#66BB6A]' : 'text-[#EF5350]'}`}>
              {trade.price}
            </p>
            <p className='w-1/3'>{trade.size}</p>
            <p className='w-1/2 flex justify-between items-center'>
              {trade.time} <ExternalLink className='text-primary cursor-pointer hover:opacity-80' size={10} />
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

// History Component with Tabs
const PerpsHistory = () => {
  const tabItems = [
    { value: "open-orders", label: "Open Orders" },
    { value: "positions", label: "Positions" },
    { value: "order-history", label: "Order History" },
    { value: "trade-history", label: "Trade History" },
    { value: "funding-history", label: "Funding History" },
    { value: "deposit-withdraw", label: "Deposit/Withdraw History" }
  ]

  return (
    <Card className='rounded-[8px] min-h-full w-full bg-transparent'>
      <CardContent className='px-0'>
        <Tabs defaultValue="open-orders" className="w-full">
          <TabsList className="bg-transparent p-0 border-b border-white/10 flex justify-between items-center">
            <div className="flex">
              {tabItems.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className={tab.value === 'open-orders' ? 'rounded-tl-[8px]' : ''}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </div>
            <div className="py-1 px-4 cursor-pointer hover:bg-white/5 rounded-tr-[8px]">
              <Ellipsis className='text-white/60' />
            </div>
          </TabsList>

          {tabItems.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="min-h-48 flex justify-center items-center">
              <div className="p-4">
                <p className="text-white/60 text-[10px]">Sign in to see your {tab.label}</p>
                <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

// Main PerpsPage Component
const PerpsPage = () => {
  return (
    <div className=''>
      <main className='p-4 flex space-x-2 w-full'>
        {/* column 1 & 2 */}
        <section className='w-[80%] space-y-2'>
          {/* column 1 */}
          <section className='h-fit flex space-x-2'>
            <section className='w-fit space-y-2'>
              <PerpsHeader />
              <PerpsChart />
            </section>

            {/* column 2 */}
            <section className='flex-1 space-y-2'>
              <Orderbook />
              <Trades />
            </section>
          </section>
          
          <section>
            <PerpsHistory />
          </section>
        </section>
        
        {/* third column */}
        <section className='w-[20%]'>
          <BuyOrSell />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PerpsPage
