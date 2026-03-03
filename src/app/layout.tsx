import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://regionsystems.com'),
    title: 'Region Systems LLC | Premium Website Design & Development',
    description: 'Region Systems LLC builds premium websites for serious businesses, from focused landing pages to fully integrated digital platforms.',
    keywords: 'premium website design, website development agency, business website builder, indiana web design, nationwide website development',
    authors: [{ name: 'Region Systems LLC' }],
    creator: 'Region Systems LLC',
    publisher: 'Region Systems LLC',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://regionsystems.com',
        title: 'Region Systems LLC | Premium Website Design & Development',
        description: 'Indiana-based website studio delivering premium websites for businesses nationwide.',
        siteName: 'Region Systems LLC',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Region Systems LLC | Premium Website Design & Development',
        description: 'Premium websites built for credibility, conversion, and long-term growth.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://regionsystems.com" />
            </head>
            <body className={`${inter.className} antialiased bg-navy-950 text-navy-100`}>
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

