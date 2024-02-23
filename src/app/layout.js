import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO App',
  description: 'by Deepak',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Navbar/>
        {children}

        </body>
    </html>
  )
}
