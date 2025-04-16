import './globals.css';
import {Inter} from 'next/font/google';
import Header from '@/components/header';
import {Toaster} from 'sonner';
import ClientLayout from './layout.client';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Vault X',
  description: 'One stop Finance platform',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClientLayout>
          <header>
            <Header />
          </header>
          <main className='min-h-screen'>{children}</main>
          <Toaster richColors />
          <footer className='bg-blue-100 py-12'>
            <div className='container mx-auto px-4 text-center text-gray-600'>
              © Made with by yash💖
            </div>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
