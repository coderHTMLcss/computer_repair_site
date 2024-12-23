import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-black bg-home-img bg-cover bg-center'>
      <main className='flex flex-col justify-center items-center max-w-5xl mx-auto h-dvh'>
        <div className='flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl'>
          <h1 className='text-4xl font-bold'>Computers<br />Repair Shop</h1>
          <address>
            Ukraine<br />
            Brovary city
          </address>
          <p>
            Open Daily: from 9:00 to 18:00
          </p>
          <Link href="tel:0991829803" className='hover:underline'>tel: 0991829803</Link>
        </div>
      </main>
    </div>
  );
}


