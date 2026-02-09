import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'

import './globals.css'

const jakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
})
const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Winpag - Autonomous A/B Testing for Webflow | AI-Powered CRO',
  description: 'Winpag learns your business, decides what to test, and improves your Webflow conversions every week. You just approve the winners. Start your free trial.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vewryha6m6");
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
