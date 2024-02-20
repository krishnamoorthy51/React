import Image from 'next/image'
import LandingPage  from './staff-list/LandingPage';
import Navbar from './component/Navbar';
import Timebar from './component/Timebar.js';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        {/* <section>
          <Navbar />
      </section>
      <div className='h100 flex'>
          <Timebar /> */}
          <LandingPage />
      {/* </div> */}
    </main>
  )
}
