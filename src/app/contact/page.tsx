import Link from 'next/link'
import { Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Get a Quote - Region Systems LLC',
    description: 'Request a premium website project quote from Region Systems LLC. Indiana-based, serving businesses nationwide.',
    keywords: 'get a website quote, premium web development quote, indiana web studio, nationwide website projects',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Get a Quote | Region Systems LLC',
        description:
            'Start your website project quote with Region Systems LLC. Indiana-based, serving businesses nationwide.',
        url: 'https://regionsystems.com/contact',
        type: 'website',
    },
}

export default function Contact() {
    const quoteSubject = encodeURIComponent('Website Project Quote Request')
    const quoteBody = encodeURIComponent(
        [
            'Hi Connor,',
            '',
            'I would like a quote for a website project.',
            '',
            'Business name:',
            'Project type (landing page, business site, integrated platform):',
            'Key goals:',
            'Current website (if any):',
            '',
            'Thanks,',
        ].join('\n')
    )

    const contactPageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Get a Quote',
        url: 'https://regionsystems.com/contact',
        description:
            'Request a quote for website design and development services from Region Systems LLC.',
        inLanguage: 'en-US',
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What should I include in my quote email?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Include your business name, current website, the type of build you need, your goals, and any integration requirements.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you work nationwide?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Region Systems LLC is based in Indiana and serves clients across the United States.',
                },
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Get a <span className="gradient-text">Quote</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed mb-8">
                            Tell us what you need. We will scope the right build and next steps.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-navy-300">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Website development only</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Fast turnaround</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Indiana based, nationwide service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto bg-navy-900 rounded-2xl border border-navy-800 p-8 sm:p-10" data-reveal data-delay="60">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Start your quote by email</h2>
                        <p className="text-navy-300 mb-8 leading-relaxed">
                            Send your project details directly to Connor for a clear scope and next-step reply.
                        </p>

                        <a
                            href={`mailto:havlinconnor@gmail.com?subject=${quoteSubject}&body=${quoteBody}`}
                            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8"
                        >
                            <Mail className="h-5 w-5" />
                            <span>Get a Quote Now</span>
                            <ArrowRight className="h-5 w-5" />
                        </a>

                        <div className="mt-8 rounded-xl border border-navy-800 bg-navy-950/60 p-5">
                            <h3 className="text-white font-semibold mb-3">What to include in your email</h3>
                            <ul className="space-y-2 text-sm text-navy-300">
                                <li>• Your business name and website (if you have one)</li>
                                <li>• What you need built (landing page, business website, or integrated platform)</li>
                                <li>• Your top goals (more leads, stronger credibility, better user flow, etc.)</li>
                                <li>• Any key integrations or workflow needs</li>
                                <li>• Any extra details you want us to know</li>
                            </ul>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-3 text-navy-300">
                                <Mail className="h-5 w-5 mt-0.5 text-accent-300" />
                                <a href="mailto:havlinconnor@gmail.com" className="hover:text-accent-300 transition-colors duration-300">
                                    havlinconnor@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3 text-navy-300">
                                <MapPin className="h-5 w-5 mt-0.5 text-accent-300" />
                                <span>Indiana, United States (serving clients nationwide)</span>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-navy-800 pt-6">
                            <Link href="/services" className="text-accent-300 hover:text-accent-200 transition-colors duration-300">
                                Need help choosing? View services.
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}