import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jean Luc | Portfolio',
  description: 'Software Engineer Portfolio for Jean Luc Kajuga',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans bg-white text-gray-900">
        <Navbar />
        <main className="pt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
