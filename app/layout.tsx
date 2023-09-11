import './globals.css'
import type { Metadata } from 'next'
import { ComponentNavbar, ComponentFooter } from "@/components";


export const metadata: Metadata = {
  title: 'Dracar',
  description: 'Découvrez les meilleurs voiture au monde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <ComponentNavbar/>
        {children}
        <ComponentFooter/>
        </body>
    </html>
  )
}
