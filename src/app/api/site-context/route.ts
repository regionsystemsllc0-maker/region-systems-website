import { NextResponse } from 'next/server'

export async function GET() {
    const payload = {
        company: {
            name: 'Region Systems LLC',
            website: 'https://regionsystems.com',
            email: 'havlinconnor@gmail.com',
            phone: '+1-219-510-3566',
            location: 'Indiana, United States',
            serviceArea: 'Nationwide (US)',
        },
        offerings: [
            'Landing Pages',
            'Business Websites',
            'Commerce Platforms',
            'Integrated Workflow Websites',
        ],
        positioning: [
            'Premium website design and development',
            'Fast turnaround process',
            'Conversion-focused implementation',
        ],
        importantUrls: {
            home: 'https://regionsystems.com',
            services: 'https://regionsystems.com/services',
            about: 'https://regionsystems.com/about',
            quote: 'https://regionsystems.com/contact',
            llms: 'https://regionsystems.com/llms.txt',
        },
        updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(payload, {
        headers: {
            'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
        },
    })
}
