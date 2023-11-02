import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Header from '@/components/header';
import ActiveSecContextProvider from '@/context/active-sec-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandra | Portfolio',
  description: 'creating responsive websites with react, next.js, typescript, tailwind CSS, among others',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>

      <body className={`${inter.className} bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 relative pt-28 sm:pt-36`}>
        <div
          className='bg-[#fffbd1] absolute rounded-full blur-[10rem]
          top-[-6rem] right-[15rem]
          h-[60rem] w-[31.25rem]
       dark:hidden'
        />
        <div
          className='bg-[#ffd8ce] absolute rounded-full blur-[10rem]
          top-[-6rem] left-[-15rem]
          h-[60rem] w-[31.25rem]
          md:left-[0rem] lg:left-[1rem]
        dark:hidden'
        />

        <ThemeContextProvider>
          <ActiveSecContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            <ThemeSwitch />
          </ActiveSecContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
