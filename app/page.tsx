import { Button } from '@/components/ui/button'

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Home = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black space-y-10 p-20'>
      <Button> click me</Button>

      {/*  outline */}
      {/* default */}
      <Button variant="outline" size="default">Click me</Button>
      {/* sm */}
      <Button variant="outline" size="sm">Click me</Button>
      {/* lg */}
      <Button variant="outline" size="lg">Click me</Button>
      
      {/* primary */}
      {/* default */}
      <Button variant="default" size="default">Click me</Button>
      {/* sm */}
      <Button variant="default" size="sm">Click me</Button>
      {/* lg */}
      <Button variant="default" size="lg">Click me</Button>

      {/* secondary */}
      {/* default */}
      <Button variant="secondary" size="default">Click me</Button>
      {/* sm */}
      <Button variant="secondary" size="sm">Click me</Button>
      {/* lg */}
      <Button variant="secondary" size="lg">Click me</Button>
    </div>
  )
}

export default Home