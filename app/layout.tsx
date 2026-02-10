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
  const gtmId = 'GTM-MTJTP33S'

  return (
    <html lang="en" className={`${jakartaSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Tag Manager - as high in head as possible */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
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
        <Script
          id="winpag-tracker"
          src="https://test-winpag.lovable.app/winpag-tracker.js"
          data-site-id="8786f8b8-f5e4-4881-857e-2100418b3091"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
