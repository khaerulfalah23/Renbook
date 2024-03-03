import { Inter } from 'next/font/google';
import './globals.css';
import { HomeLayout } from '@/components/templates';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RenBook',
  description: 'Book shoop app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
