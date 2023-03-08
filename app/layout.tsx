export const metadata = {
  title: 'NEWS CHANNEL',
  description: 'Generated by Next.js',
}

import '../styles/globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Header />
        <div className='max-w-6xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}