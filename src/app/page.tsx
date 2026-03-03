import Link from 'next/link'
import type { Metadata } from 'next'
import {
    ArrowRight,
    Globe,
    Layers,
    Workflow,
    Rocket,
    Gauge,
    CheckCircle,
    Quote
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'Premium Website Design & Development',
    description:
        'Region Systems LLC designs and develops premium websites that build trust and drive conversions for businesses nationwide.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Region Systems LLC | Premium Website Design & Development',
        description:
            'Indiana-based website studio delivering premium websites engineered to convert.',
        url: 'https://regionsystems.com',
        type: 'website',
    },
}

export default function Home() {
    const offerings = [
        {
            title: 'Landing Pages',
            description: 'Focused pages built to convert.',
            icon: Rocket,
            href: '/services#landing-pages',
        },
        {
            title: 'Business Websites',
            description: 'Multi-page websites built for trust.',
            icon: Layers,
            href: '/services#business-websites',
        },
        {
            title: 'Integrated Platforms',
            description: 'Advanced builds with deep integrations.',
            icon: Workflow,
            href: '/services#integrated-workflows',
        },
    ]

    const homePageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Region Systems LLC',
        url: 'https://regionsystems.com',
        description:
            'Premium website design and development services for businesses nationwide.',
        inLanguage: 'en-US',
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
            />
            <section className="relative min-h-screen flex items-center justify-center bg-hero-radial pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="animate-fade-in">
                            <div className="inline-flex items-center space-x-2 bg-accent-500/20 border border-accent-400/30 text-accent-200 px-4 py-2 rounded-full text-sm font-medium mb-8">
                                <Globe className="h-4 w-4" />
                                <span>Indiana-Based, Nationwide Website Studio</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Premium Websites
                                <span className="gradient-text block">
                                    Engineered to Convert
                                </span>
                            </h1>

                            <p className="text-xl text-navy-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Indiana-based. Nationwide delivery.
                                We build websites that command trust and drive action.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="btn-primary text-lg inline-flex items-center space-x-2 group"
                                >
                                    <span>Get a Quote Now</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="btn-outline text-lg"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 bg-navy-950 border-y border-navy-800">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="animate-fade-in">
                            <div className="text-3xl font-bold text-white mb-2">Nationwide from Indiana</div>
                            <div className="text-navy-300">Serving businesses across the U.S. from our Indiana base.</div>
                        </div>
                        <div className="animate-fade-in animation-delay-200">
                            <div className="text-3xl font-bold text-white mb-2">Modern</div>
                            <div className="text-navy-300">Clean, premium visual direction</div>
                        </div>
                        <div className="animate-fade-in animation-delay-400">
                            <div className="text-3xl font-bold text-white mb-2">Fast</div>
                            <div className="text-navy-300">Fast turnaround with clear process</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Website Solutions for Every Growth Stage
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            From clean launches to integrated platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item) => (
                            <div key={item.title} className="bg-navy-950 rounded-xl p-8 shadow-lg card-hover border border-navy-800">
                                <div className="p-3 bg-accent-500/15 rounded-lg w-fit mb-6">
                                    <item.icon className="h-8 w-8 text-accent-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-navy-300 mb-6 leading-relaxed">{item.description}</p>
                                <Link href={item.href} className="text-accent-300 hover:text-accent-200 font-medium inline-flex items-center space-x-1">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Why Serious Businesses Choose Region Systems
                            </h2>
                            <p className="text-lg text-navy-300 mb-8 leading-relaxed">
                                Premium design. Technical depth. Fast execution.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Gauge className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
                                        <p className="text-navy-300">A disciplined process that keeps delivery moving.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Workflow className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Deep Integrations</h3>
                                        <p className="text-navy-300">Connected to your core systems and workflows from day one.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Globe className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Nationwide Reach</h3>
                                        <p className="text-navy-300">Indiana-based and trusted nationwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-accent-600/40 to-navy-900 rounded-2xl p-8 text-white border border-accent-400/20">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold">Our Delivery Standard</h3>
                                        <p className="text-accent-100">Our baseline on every build</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {['Executive-level design quality', 'Clear conversion architecture', 'Mobile-first user experience', 'Performance-first implementation'].map((line) => (
                                        <li key={line} className="flex items-center gap-2 text-accent-100">
                                            <CheckCircle className="h-4 w-4 text-accent-300" />
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            What Clients Notice Immediately
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Better first impressions. Better conversions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            'The new site immediately elevated how prospects perceive our business.',
                            'Their process was fast, sharp, and easy to follow.',
                            'We finally have a website that looks as good as our work.',
                        ].map((quoteText, idx) => (
                            <div key={quoteText} className="bg-navy-950 rounded-xl p-8 shadow-lg border border-navy-800">
                                <Quote className="h-6 w-6 text-accent-300 mb-4" />
                                <p className="text-navy-200 mb-6 leading-relaxed">"{quoteText}"</p>
                                <div className="text-sm text-navy-400">Client feedback #{idx + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ready to Build?
                        </h2>
                        <p className="text-xl text-navy-200 mb-10 leading-relaxed">
                            Tell us what you need. We will scope it and execute fast.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/contact"
                                className="btn-primary py-4 px-8 inline-flex items-center space-x-2"
                            >
                                <span>Get a Quote Now</span>
                            </Link>
                            <Link
                                href="/services"
                                className="btn-outline py-4 px-8"
                            >
                                View All Services
                            </Link>
                        </div>

                        <div className="text-center text-navy-300">
                            <p className="text-sm">
                                Indiana based • Nationwide delivery • Fast turnaround
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

