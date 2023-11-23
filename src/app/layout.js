import { Inter } from 'next/font/google'
import '@/style/globals.css'
import { NoteProvider } from '@/components/provider/NoteProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteProvider>
          <main className=' max-w-2xl m-auto my-6 space-y-8'>
            {children}
          </main>
        </NoteProvider>
      </body>
    </html>
  )
}
