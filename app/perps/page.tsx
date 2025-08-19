'use client'
import React, { useState, useCallback } from 'react'
import { TrendingUp, TrendingDown, BarChart3, BookOpen, ChevronDown, Ellipsis, MoveDown, ExternalLink, Upload, Download, ChevronRight, ArrowRightLeft } from 'lucide-react'
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
const BuyOrSell = () => {
  const [orderType, setOrderType] = useState('limit')
  const [leverage, setLeverage] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  // Slider event handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)

    // Update immediately on mouse down
    updateLeverageFromEvent(e.clientX)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    updateLeverageFromEvent(e.clientX)
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)

    // Update immediately on touch start
    updateLeverageFromEvent(e.touches[0].clientX)

    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    updateLeverageFromEvent(e.touches[0].clientX)
  }, [isDragging])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
  }, [])

  // Helper function to update leverage from clientX
  const updateLeverageFromEvent = useCallback((clientX: number) => {
    const track = document.querySelector('.slider-track') as HTMLElement
    if (!track) return

    const rect = track.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setLeverage(Math.round(percentage))
  }, [])

  // Click on track to set value
  const handleTrackClick = useCallback((e: React.MouseEvent) => {
    updateLeverageFromEvent(e.clientX)
  }, [updateLeverageFromEvent])

  const tabItems = [
    { value: "open", label: "Open" },
    { value: "close", label: "Close" }
  ]

  return (
    <div className="w-full space-y-2">
      <Card className='rounded-[8px] bg-transparent w-full flex'>
        <CardContent className=' px-2 py-2 flex justify-between items-center'>
          <div className="">
            <p className='text-white/60 text-[10px] flex items-center gap-1'>Profile 1 <ChevronDown size={10} /></p>
            <p className='text-white/80 text-sm font-bold'>0.00 USDT</p>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" bg-[#1C1F20] p-2 rounded-[8px] w-fit cursor-pointer hover:bg-white/5">
              <Download className='text-white/60' size={16} />
            </div>
            <div className="bg-[#1C1F20] p-2 rounded-[8px] w-fit cursor-pointer hover:bg-white/5">
              <Upload className='text-white/60' size={16} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className=" flex gap-2">
        <Card className='rounded-[8px] bg-transparent w-full flex p-2 text-center text-sm text-white font-bold hover:bg-white/5 cursor-pointer'>
          <p>Isolated</p>
        </Card>
        <Card className='rounded-[8px] bg-transparent w-full flex p-2 text-center text-sm text-white font-bold hover:bg-white/5 cursor-pointer'>
          <p>Hedge</p>
        </Card>
      </div>

      <Card className='rounded-[8px] bg-transparent w-full flex'>
        <Tabs defaultValue="open" className="w-full">
          <TabsList className="bg-transparent p-0 border-b border-white/10 flex justify-between items-center w-full">
            <div className="flex justify-between w-full">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={tab.value === 'open' ? 'rounded-tl-[8px]' : 'rounded-tr-[8px]'}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          {tabItems.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="min-h-48 px-2 pb-2 space-y-2">
              <section className=" flex items-center justify-between text-base">
                <div className=" flex items-center gap-2 pl-6 pb-2">
                  <div
                    onClick={() => setOrderType('market')}
                    className={`px-3 py-2 text-[12px] font-bold cursor-pointer transition-all duration-200 ${orderType === 'market'
                      ? ' text-white border-b-2 border-primary'
                      : 'text-white/60'
                      }`}>
                    Market
                  </div>
                  <div
                    onClick={() => setOrderType('limit')}
                    className={`px-3 py-2 text-[12px] font-bold cursor-pointer transition-all duration-200 ${orderType === 'limit'
                      ? ' text-white border-b-2 border-primary'
                      : 'text-white/60 '
                      }`}>
                    Limit
                  </div>
                </div>
                <p className='text-primary bg-[#1C1F20] px-2 py-1 rounded-[8px] text-[12px] font-bold flex items-center gap-1 hover:bg-white/5 cursor-pointer'>2x <ChevronRight size={12} /></p>
              </section>

              <Card className='rounded-[8px] w-full flex'>
                <CardContent className='p-2 space-y-2'>
                  <div className=" flex justify-between px-2">
                    <p className='text-white/60 text-[10px]'>Price</p>
                    <p className='text-primary text-[10px] font-bold'>Mid</p>
                  </div>
                  <Card className='rounded-[8px] bg-[#080A0A] w-full flex p-2'>
                    <div className='flex items-center justify-between'>
                      <input type="text" placeholder='123456' className='bg-transparent text-sm outline-none text-white/80 placeholder:text-white/80' />
                      <p className='text-white font-bold text-[10px]'>USDT</p>
                    </div>
                  </Card>
                </CardContent>
              </Card>
              <Card className='rounded-[8px] w-full flex'>
                <CardContent className='p-2 space-y-2'>
                  <div className=" flex px-2">
                    <p className='text-white/60 text-[10px]'>Amount</p>
                  </div>
                  <Card className='rounded-[8px] bg-[#080A0A] w-full flex p-2'>
                    <div className='flex items-center justify-between'>
                      <input type="text" placeholder='0.00' className='bg-transparent text-sm outline-none text-white/80 placeholder:text-white/80' />
                      <p className='text-white font-bold flex items-center gap-1 cursor-pointer text-[10px]'>APT <ArrowRightLeft size={12} /></p>
                    </div>
                  </Card>
                </CardContent>
              </Card>

              {/* Leverage Slider */}
              <Card className='rounded-[8px] w-full flex'>
                <CardContent className='p-2 w-full'>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center gap-3">
                      <div className="slider-container relative w-full">
                        {/* Slider Track - Clickable */}
                        <div
                          className="slider-track w-full h-1 bg-white/30 rounded-full relative cursor-pointer"
                          onClick={handleTrackClick}
                        >
                          {/* Active Track (filled part) */}
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-200"
                            style={{ width: `${leverage}%` }}
                          />

                          {/* Track Markers */}
                          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-primary rounded-full" />
                          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-2 bg-white/30 rounded-full" />
                        </div>

                        {/* Slider Handle */}
                        <div
                          className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform duration-200 z-10"
                          style={{
                            left: `calc(${leverage}% - 8px)`,
                            marginLeft: leverage === 0 ? '0' : leverage === 100 ? 'calc(-8px)' : '0'
                          }}
                          onMouseDown={handleMouseDown}
                          onTouchStart={handleTouchStart}
                        />
                      </div>
                      <Card className='text-white/80 bg-[#080A0A] px-2 py-1 rounded-[8px] text-[12px] flex items-center gap-1'>
                        <p className='flex gap-2'>{leverage} <span className='text-white/60'>%</span></p>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className=" flex justify-between items-center text-[10px]">
                <p className='text-white/60'>Buy <span className='text-white/80 font-bold pl-2'>0.049 BTC</span></p>
                <p className='text-white/60'>Sell <span className='text-white/80 font-bold pl-2'>0.049 BTC</span></p>
              </div>

              <Button variant='outline' size='default' className='w-full font-bold'>
                Sign in
              </Button>
            </TabsContent>
          ))}
        </Tabs>
      </Card>

    </div >
  )
}

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
      <CardHeader className='text-sm py-2 px-3 border-b border-white/10 font-bold flex-shrink-0 text-white'>
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
      <CardHeader className='text-sm py-2 px-3 border-b border-white/10 font-bold flex-shrink-0 text-white'>
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
          <TabsList className="bg-transparent p-0 border-b border-white/10 flex justify-between items-center w-full">
            <div className="flex w-fit">
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
