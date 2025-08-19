import React from 'react'
import { TrendingUp, TrendingDown, BarChart3, BookOpen, ChevronDown, Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent } from '@/components/ui/card'
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
              <Card className='rounded-[8px] min-h-[450px] flex justify-center items-center'>
                <CardContent>Graph</CardContent>
              </Card>
            </section>

            {/* column 2 */}
            <section className='flex-1 space-y-2'>
              <Card className='rounded-[8px] h-[65%] w-full flex justify-center items-center bg-transparent'>
                <CardContent>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2'>
                      <div className='w-10 h-10 bg-white/10 rounded-full'></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className='rounded-[8px] h-[33.5%] w-full flex justify-center items-center bg-transparent'>
                
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
