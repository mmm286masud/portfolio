import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Masud Builds — Custom Apps. AI-Assisted.',
  description:
    'AI-Assisted Custom Application Developer. I design and build custom desktop applications, portfolio websites, and business-ready digital experiences using AI-assisted workflows.',
  keywords: ['custom apps', 'AI-assisted development', 'portfolio', 'desktop apps', 'web design'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
