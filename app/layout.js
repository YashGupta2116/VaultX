import {Inter} from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import {ClerkProvider} from '@clerk/nextjs';
import {Toaster} from 'sonner';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Welth',
  description: 'One stop Finance Platform',
};

export default function RootLayout({children}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <link rel='icon' href='/logo-sm.png' sizes='any' />
        </head>
        <body className={inter.className}>
          <Header />
          <main className='min-h-screen flex flex-col justify-between'>
            {children}
          </main>
          <Toaster richColors />
          <footer className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12'>
            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm'>
              <div>
                <h2 className='font-bold text-lg mb-2'>Welth</h2>
                <p>Smart tools to manage your money, powered by AI.</p>
              </div>
              <div>
                <h2 className='font-bold text-lg mb-2'>Quick Links</h2>
                <ul className='space-y-1'>
                  <li>Home</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h2 className='font-bold text-lg mb-2'>Stay Updated</h2>
                <p>
                  Get product updates and financial tips straight to your inbox.
                </p>
                <div className='mt-2 flex'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='px-3 py-2 rounded-l-md text-black w-full'
                  />
                  <button className='bg-white text-blue-600 font-semibold px-4 py-2 rounded-r-md'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className='text-center mt-6 text-xs text-white/70'>
              ©️ 2025 Welth. All rights reserved. | Made with 💗 by Yash
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
