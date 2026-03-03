import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://regionsystems.com'),
    title: {
        default: 'Region Systems LLC | Premium Website Design & Development',
        template: '%s | Region Systems LLC',
    },
    description: 'Region Systems LLC builds premium websites for serious businesses, from focused landing pages to fully integrated digital platforms.',
    keywords: 'premium website design, website development agency, business website builder, indiana web design, nationwide website development',
    authors: [{ name: 'Region Systems LLC' }],
    creator: 'Region Systems LLC',
    publisher: 'Region Systems LLC',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    other: {
        'geo.region': 'US-IN',
        'geo.placename': 'Indiana',
        'geo.position': '39.7684;-86.1581',
        ICBM: '39.7684, -86.1581',
    },
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
    const orgJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Region Systems LLC',
        url: 'https://regionsystems.com',
        email: 'regionsystemsllc0@gmail.com',
        telephone: '+1-219-510-3566',
        areaServed: {
            '@type': 'Country',
            name: 'United States',
        },
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'IN',
            addressCountry: 'US',
        },
        sameAs: [],
        description:
            'Indiana-based website studio delivering premium websites for businesses nationwide, from focused landing pages to integrated platforms.',
    }

    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Region Systems LLC',
        url: 'https://regionsystems.com',
        inLanguage: 'en-US',
    }

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
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

