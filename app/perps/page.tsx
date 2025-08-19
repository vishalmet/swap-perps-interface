import React from 'react'
import { TrendingUp, TrendingDown, BarChart3, BookOpen, ChevronDown, Ellipsis, MoveDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Assets } from '@/components/Assets'
import Image from 'next/image'
import Footer from '@/components/Footer'

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
    <div className=''>
      <main className='p-4 '>
        {/* column 1 & 2 */}
        <section className='w-[80%] space-y-2'>
          {/* column 1 */}
          <section className='h-fit flex space-x-2'>
            <section className='w-fit space-y-2'>
              <Card className='bg-transparent flex flex-row gap-0 rounded-[8px]'>
                <CardAction className='flex items-center gap-1 text-white/80 font-bold border-r border-white/10 p-4 cursor-pointer hover:bg-white/5 rounded-l-xl'> <Image src={Assets.PerpPair} alt='perp pair' width={30} height={24} /> APT-PERP<ChevronDown /></CardAction>
                <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'> <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Mark</span><br /><span className='text-sm text-white/80 font-bold'>$7.32</span></CardAction>
                <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'> <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>24h change</span><br /><span className='text-sm text-[#66BB6A] font-bold'>+2 %</span></CardAction>
                <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'> <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Oracle Price</span><br /><span className='text-sm text-white/80 font-bold'>$11.1</span></CardAction>
                <CardAction className='py-1 px-4 w-[155px] border-r border-white/10 hover:bg-white/5'> <span className='text-white/60 border-b border-dotted border-white/60 text-xs'>24h volume</span><br /><span className='text-sm text-white/80 font-bold'>245,694,542</span></CardAction>
                <CardAction className='py-1 px-4 w-[180px] hover:bg-white/5 rounded-r-xl flex justify-between items-center gap-2'> <span><span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Funding</span><br /><span className='text-sm font-bold text-[#FFB74D]'>0.012%</span></span> <span><span className='text-white/60 border-b border-dotted border-white/60 text-xs'>Next Funding</span><br /><span className='text-sm text-white/80 font-bold'>00:23:34</span></span></CardAction>
              </Card>
              <Card className='rounded-[8px] min-h-[600px] flex justify-center items-center'>
                <CardContent>Graph</CardContent>
              </Card>
            </section>

            {/* column 2 */}
            <section className='flex-1 space-y-2'>
              <Card className='rounded-[8px] h-[63%] w-full bg-transparent flex flex-col'>
                <CardHeader className='text-sm py-2 px-3 border-b border-white/10 font-bold flex-shrink-0'>Orderbook</CardHeader>

                {/* Headers - Fixed */}
                <div className=' py-2 px-3'>
                  <div className="flex text-[10px] font-bold">
                    <p className='w-1/3'>Price <br /> <span className='text-white/40'>(eUSDT)</span></p>
                    <p className='w-1/3 text-end'>Size <br /> <span className='text-white/40'>(eAPT)</span></p>
                    <p className='w-1/3 text-end'>Sum <br /> <span className='text-white/40'>(eAPT)</span></p>
                  </div>
                </div>

                {/* Scrollable Orders Container */}
                <div className='flex-1 flex flex-col'>
                                     {/* Sell Orders Section - Scrollable */}
                   <div className='flex-1 min-h-[25%] max-h-[25%] overflow-y-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
                    {[
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
                  ].map((order, index) => (
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
                   <div className='flex-1 min-h-[25%] max-h-[25%] overflow-y-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.2) transparent' }}>
                    {[
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
                  ].map((order, index) => (
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
              <Card className='rounded-[8px] h-[31%] w-full flex justify-center items-center bg-transparent'>

              </Card>
            </section>
          </section>
          {/* terminal kinda UI */}
          <section>
            <Card className='rounded-[8px] min-h-full w-full bg-transparent'>
              <CardContent className='px-0'>
                <Tabs defaultValue="open-orders" className="w-full">
                  <TabsList className="bg-transparent p-0  border-b border-white/10 flex justify-between items-center">
                    <div className="flex">
                      <TabsTrigger value="open-orders" className='rounded-tl-[8px]'>Open Orders</TabsTrigger>
                      <TabsTrigger value="positions">Positions</TabsTrigger>
                      <TabsTrigger value="order-history">Order History</TabsTrigger>
                      <TabsTrigger value="trade-history">Trade History</TabsTrigger>
                      <TabsTrigger value="funding-history">Funding History</TabsTrigger>
                      <TabsTrigger value="deposit-withdraw">Deposit/Withdraw History</TabsTrigger>
                    </div>
                    <div className=" py-1 px-4 cursor-pointer hover:bg-white/5 rounded-tr-[8px]">
                      <Ellipsis className='text-white/60' />
                    </div>
                  </TabsList>

                  <TabsContent value="open-orders" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Open orders</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="positions" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Positions</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="order-history" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Order History</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="trade-history" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Trade History</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="funding-history" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Funding History</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="deposit-withdraw" className="min-h-48 flex justify-center items-center">
                    <div className="p-4">
                      <p className="text-white/60 text-[10px]">Sign in to see your Deposit/Withdraw History</p>
                      <p className='text-primary font-bold text-center text-xs hover:underline cursor-pointer'>Sign in</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </section>
        {/* third column */}
        <section>

        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PerpsPage
