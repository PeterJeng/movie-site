import ClientOnly from '@/components/ClientOnly';
import './globals.css';
import { Inter } from 'next/font/google';
import ToasterProvider from '../providers/ToasterProvider';
import AuthProvider from '@/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Netflix Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="y9Mun40VJxLkmS1ogwqyO2lWa3LZYuGooULAWG6C-A0" />
      <body className={inter.className}>
        <ClientOnly>
          <AuthProvider>
            <ToasterProvider />
            {children}
          </AuthProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
