import Link from 'next/link'
import {
    CheckCircle,
    ArrowRight,
    Globe,
    Rocket,
    Layers,
    Workflow,
    Shield,
    Smartphone,
    Gauge,
    Code2,
    BarChart3
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Region Systems LLC | Custom Web Developer in Indiana',
    description: 'Region Systems LLC is Connor Havlin — a custom web developer based in Indiana, building high-performance websites for businesses serious about growth.',
    keywords: 'about region systems llc, connor havlin, indiana web developer, custom website developer',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Region Systems LLC | Custom Web Developer in Indiana',
        description: 'Built by someone who has done the work. Hand-coded websites that hit Lighthouse 95+ as a standard, not an accident.',
        url: 'https://regionsystemsllc.com/about',
        type: 'website',
    },
}

export default function About() {
    const standards = [
        { icon: Gauge, text: 'Lighthouse scores \u226590 across Performance, Accessibility, Best Practices, SEO' },
        { icon: Smartphone, text: 'Mobile-first. Tested on iOS Safari and Android Chrome.' },
        { icon: Gauge, text: 'Sub-3-second load time on mobile' },
        { icon: Code2, text: 'Schema markup on every build' },
        { icon: BarChart3, text: 'Google Analytics + Search Console connected on launch' },
    ]

    const services = [
        { icon: Rocket, title: 'Landing Pages' },
        { icon: Layers, title: 'Business Websites' },
        { icon: Workflow, title: 'Integrated Platforms' },
        { icon: Shield, title: 'Monthly Care Plans' },
    ]

    const aboutPageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Region Systems LLC',
        url: 'https://regionsystemsllc.com/about',
        description: 'Region Systems LLC is Connor Havlin \u2014 a custom web developer based in Indiana.',
        inLanguage: 'en-US',
    }

    const localBusinessJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Region Systems LLC',
        description: 'Custom website design and development agency based in Indiana, serving businesses nationwide.',
        url: 'https://www.regionsystemsllc.com',
        telephone: '+12195103566',
        email: 'havlinconnor@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'IN',
            addressCountry: 'US',
        },
        areaServed: 'US',
        priceRange: '$$\u2013$$$',
        serviceType: 'Web Design and Development',
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Built by Someone Who&apos;s <span className="gradient-text">Done the Work</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed">
                            Region Systems LLC is Connor Havlin &mdash; a custom web developer based in Indiana, building high-performance websites for businesses that are serious about growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                                No templates. No shortcuts. Just results.
                            </h2>
                            <p className="text-lg text-navy-300 leading-relaxed mb-6">
                                Every site we build starts from a blank file. We don&apos;t drag and drop. We don&apos;t use page builders. We write clean, hand-coded HTML, CSS, JavaScript, React, and Next.js because that&apos;s the only way to hit the performance and SEO standards that actually move the needle for our clients.
                            </p>
                            <p className="text-lg text-navy-300 leading-relaxed">
                                When a Lighthouse audit comes back at 95+, that&apos;s not an accident &mdash; it&apos;s the standard.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-accent-600/35 to-navy-900 rounded-2xl p-8 text-white border border-accent-400/20">
                            <h3 className="text-2xl font-bold mb-6">What We Build</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {services.map((svc) => (
                                    <div key={svc.title} className="flex items-center gap-3">
                                        <div className="p-2 bg-white/10 rounded-lg">
                                            <svc.icon className="h-5 w-5 text-accent-200" />
                                        </div>
                                        <span className="text-accent-100 text-sm font-medium">{svc.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standards */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            The Standards We Hold Every Build To
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {standards.map((item) => (
                            <div key={item.text} className="flex items-start gap-4 bg-navy-950 rounded-xl p-5 border border-navy-800" data-reveal data-delay="40">
                                <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0">
                                    <item.icon className="h-5 w-5 text-accent-300" />
                                </div>
                                <p className="text-navy-200 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nationwide */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 text-accent-300 mb-6">
                            <Globe className="h-6 w-6" />
                            <span className="font-medium">Nationwide Reach, Indiana Roots</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Based in Indiana. Clients across the U.S.
                        </h2>
                        <p className="text-lg text-navy-300 leading-relaxed">
                            We work remotely with clients everywhere &mdash; all communication is clear, direct, and on schedule.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-navy-950 rounded-2xl border border-navy-800 p-10 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Let&apos;s build something. Get a quote in 48 hours.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="btn-primary py-4 px-8 inline-flex items-center space-x-2 justify-center"
                            >
                                <span>Get a Quote Now</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link href="/services" className="btn-outline py-4 px-8">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
