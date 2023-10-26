import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import ActiveSecContextProvider from '@/context/active-sec-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandra | Portfolio',
  description: 'creating responsive websites with react, next.js, typescript, tailwind CSS, among others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-800 relative h-[5000px] pt-28 sm:pt-36`}>
        <div
          className='bg-[#fffbd1] absolute rounded-full blur-[10rem]
          top-[-6rem] right-[15rem]
          h-[35rem] w-[31.25rem]
         z-[-10]'
        />
        <div
          className='bg-[#ffd8ce] absolute rounded-full blur-[10rem]
          top-[-6rem] left-[-15rem]
          h-[35rem] w-[31.25rem]
          md:left-[0rem] lg:left-[1rem]
         z-[-10]'
        />
        <ActiveSecContextProvider>
          <Header />
          {children}
        </ActiveSecContextProvider>
      </body>
    </html>
  )
}
