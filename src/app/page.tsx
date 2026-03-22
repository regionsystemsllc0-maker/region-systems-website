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
    Quote,
    Zap,
    Shield,
    Code2
} from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
    title: 'Custom Website Design & Development | Region Systems LLC | Indiana',
    description:
        'Hand-written code. No templates. No page builders. Custom websites that generate real leads for real businesses — starting at $2,500. Indiana-based, nationwide delivery.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Custom Website Design & Development | Region Systems LLC',
        description:
            'Indiana-based website studio delivering custom websites engineered to convert. Starting at $2,500.',
        url: 'https://regionsystemsllc.com',
        type: 'website',
    },
}

export default function Home() {
    const offerings = [
        {
            title: 'Landing Pages',
            price: 'Starting at $2,500',
            description: 'Single-page builds for lead generation, campaign traffic, or product launches.',
            icon: Rocket,
            href: '/services#landing-pages',
        },
        {
            title: 'Business Websites',
            price: 'Starting at $4,000',
            description: 'Multi-page builds for businesses that need to own their market position.',
            icon: Layers,
            href: '/services#business-websites',
            badge: 'Most Popular',
        },
        {
            title: 'Integrated Platforms',
            price: 'Starting at $6,500+',
            description: 'Complex builds connected to your CRM, scheduling tools, and workflows.',
            icon: Workflow,
            href: '/services#integrated-platforms',
        },
    ]

    const stats = [
        { value: 'Starting at $2,500', label: 'Custom website builds' },
        { value: '2-Week Delivery', label: 'On Starter builds' },
        { value: 'Lighthouse \u226590', label: 'On every build' },
        { value: 'Indiana-Based', label: 'Nationwide clients' },
    ]

    const homePageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Region Systems LLC',
        url: 'https://regionsystemsllc.com',
        description: 'Custom website design and development for businesses nationwide. Starting at $2,500.',
        inLanguage: 'en-US',
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
            />

            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center bg-hero-radial pt-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950"></div>
                <div className="ambient-orb h-40 w-40 bg-accent-500 top-24 left-[8%]"></div>
                <div className="ambient-orb h-56 w-56 bg-cyan-400 bottom-20 right-[10%]"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="animate-fade-in" data-reveal data-delay="50">
                            <div className="inline-flex items-center space-x-2 bg-accent-500/20 border border-accent-400/30 text-accent-200 px-4 py-2 rounded-full text-sm font-medium mb-8" data-reveal data-delay="100">
                                <Globe className="h-4 w-4" />
                                <span>Indiana-Based, Nationwide Website Studio</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-reveal data-delay="140">
                                Premium Websites
                                <span className="gradient-text block">
                                    Engineered to Convert
                                </span>
                            </h1>

                            <p className="text-xl text-navy-200 mb-10 leading-relaxed max-w-3xl mx-auto" data-reveal data-delay="180">
                                Hand-written code. No templates. No page builders. We build websites that generate real leads for real businesses — starting at $2,500.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-reveal data-delay="230">
                                <Link
                                    href="/contact"
                                    className="btn-primary text-lg inline-flex items-center space-x-2 group"
                                >
                                    <span>Get a Quote Now</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="btn-outline text-lg"
                                >
                                    View Pricing
                                </Link>
                            </div>

                            <p className="mt-6 text-navy-400 text-sm" data-reveal data-delay="280">
                                Or email us directly: <a href="mailto:havlinconnor@gmail.com" className="text-accent-300 hover:text-accent-200 transition-colors">havlinconnor@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-14 bg-navy-950 border-y border-navy-800" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <div key={stat.value} className="animate-fade-in" data-reveal data-delay={idx * 60}>
                                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-navy-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16" data-reveal data-delay="40">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Website Solutions for Every Growth Stage
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            From clean launches to integrated platforms — scoped and priced clearly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item) => (
                            <div key={item.title} className={`relative bg-navy-950 rounded-xl p-8 shadow-lg card-hover border ${item.badge ? 'border-accent-500/50' : 'border-navy-800'}`} data-reveal data-delay="80">
                                {item.badge && (
                                    <div className="absolute -top-3 right-6 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {item.badge}
                                    </div>
                                )}
                                <div className="p-3 bg-accent-500/15 rounded-lg w-fit mb-6">
                                    <item.icon className="h-8 w-8 text-accent-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-accent-300 text-sm font-medium mb-4">{item.price}</p>
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

            {/* Why Region Systems */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Why Serious Businesses Choose Region Systems
                            </h2>
                            <p className="text-lg text-navy-300 mb-8 leading-relaxed">
                                Hand-coded builds. Lighthouse scores above 90. Websites you actually own.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Gauge className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">2-Week Starter Delivery</h3>
                                        <p className="text-navy-300">Starter builds ship in 2 weeks. Growth and Premium builds follow a clear timeline you approve upfront.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Workflow className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Deep Integrations</h3>
                                        <p className="text-navy-300">Connected to your CRM, scheduling tools, and booking systems from day one.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-accent-500/15 rounded-lg flex-shrink-0 mt-1">
                                        <Globe className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Indiana-Based, Nationwide</h3>
                                        <p className="text-navy-300">Clear communication. On-schedule delivery. Trusted by businesses across the U.S.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-accent-600/40 to-navy-900 rounded-2xl p-8 text-white border border-accent-400/20">
                                <h3 className="text-xl font-bold mb-2">Our Delivery Standard</h3>
                                <p className="text-accent-100 mb-6">Baseline on every build</p>
                                <ul className="space-y-3">
                                    {['Lighthouse \u226590 across all metrics', 'Mobile-first responsive design', 'Sub-3-second load time', 'Schema markup + SEO foundation', 'Google Analytics connected on launch'].map((line) => (
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

            {/* Testimonials */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            What Clients Are Saying
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Real results from real businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.slice(0, 3).map((t) => (
                            <div key={t.author} className="bg-navy-950 rounded-xl p-8 shadow-lg border border-navy-800" data-reveal data-delay="60">
                                <Quote className="h-6 w-6 text-accent-300 mb-4" />
                                <p className="text-navy-200 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.author}</div>
                                    <div className="text-navy-400 text-sm">{t.business} &middot; {t.location}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Not Wix */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Your Competitor&apos;s Wix Site Is Why We Exist
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-navy-900 rounded-xl p-8 border border-navy-800" data-reveal data-delay="0">
                            <div className="p-2 bg-red-500/15 rounded-lg w-fit mb-4">
                                <Zap className="h-6 w-6 text-red-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Template Builders</h3>
                            <p className="text-navy-300 text-sm leading-relaxed">
                                Slow load times. No SEO control. Everyone uses the same theme. You&apos;re paying monthly for something you&apos;ll never own.
                            </p>
                        </div>
                        <div className="bg-navy-900 rounded-xl p-8 border border-navy-800" data-reveal data-delay="60">
                            <div className="p-2 bg-amber-500/15 rounded-lg w-fit mb-4">
                                <Shield className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Cheap Freelancers</h3>
                            <p className="text-navy-300 text-sm leading-relaxed">
                                No standards. Disappeared after launch. Code no one can maintain. You get what you pay for.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-accent-600/15 to-navy-900 rounded-xl p-8 border border-accent-500/30" data-reveal data-delay="120">
                            <div className="p-2 bg-accent-500/15 rounded-lg w-fit mb-4">
                                <Code2 className="h-6 w-6 text-accent-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-3">Region Systems</h3>
                            <p className="text-navy-300 text-sm leading-relaxed">
                                Hand-written code. Lighthouse &ge;90. You own everything. Built to rank, built to convert, built to last.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 text-white relative overflow-hidden" data-reveal>
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Your competitors are getting leads from their website right now.
                        </h2>
                        <p className="text-xl text-navy-200 mb-10 leading-relaxed">
                            We&apos;ll build you one that performs. Proposals within 48 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Link
                                href="/contact"
                                className="btn-primary py-4 px-8 inline-flex items-center space-x-2"
                            >
                                <span>Get a Quote Now</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <a href="tel:+12195103566" className="btn-outline py-4 px-8">
                                Or call (219) 510-3566
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
