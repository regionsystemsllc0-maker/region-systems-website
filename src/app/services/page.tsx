import Link from 'next/link'
import {
    Rocket,
    Layers,
    Workflow,
    Shield,
    CheckCircle,
    ArrowRight,
    Wrench,
    Scale,
    Stethoscope,
    Car,
    UtensilsCrossed,
    Dumbbell,
    Scissors,
    Home,
    Building2
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Design Services & Pricing | Region Systems LLC',
    description: 'Custom website services: Landing Pages from $2,500, Business Websites from $4,000, Care Plans from $150/mo, Integrated Platforms from $6,500+.',
    keywords: 'website services, web design pricing, custom web development, business website, landing page design',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Web Design Services & Pricing | Region Systems LLC',
        description: 'From landing pages to integrated platforms \u2014 scoped and priced clearly.',
        url: 'https://regionsystemsllc.com/services',
        type: 'website',
    },
}

export default function Services() {
    const mainServices = [
        {
            id: 'landing-pages',
            icon: Rocket,
            title: 'Landing Pages',
            subtitle: 'Starting at $2,500',
            description: 'Single-page builds for lead generation, campaign traffic, or product launches.',
            features: [
                'Conversion-first layout: headline \u2192 social proof \u2192 CTA \u2192 trust signals',
                'Mobile-first. Sub-3-second load time guaranteed.',
                'SEO-ready page structure with schema markup',
                'Ideal for: contractors, service businesses, campaign-specific offers',
            ],
        },
        {
            id: 'business-websites',
            icon: Layers,
            title: 'Business Websites',
            subtitle: 'Starting at $4,000',
            description: 'Multi-page builds for businesses that need to own their market position.',
            features: [
                'Custom design system \u2014 no templates, no Wix, no shortcuts',
                'Optimized for Google rankings, trust, and inbound leads',
                'Service pages, about, contact, and proof architecture',
                'Ideal for: law firms, medical practices, home services, real estate, local businesses',
            ],
            highlighted: true,
        },
        {
            id: 'care-plans',
            icon: Shield,
            title: 'Care Plans',
            subtitle: '$150\u2013$200/month',
            description: 'Monthly maintenance so your site never breaks, slows down, or goes stale.',
            features: [
                'Content updates, uptime monitoring, security checks, backups',
                'Analytics reports and quarterly performance optimization',
                'Priority email support with same-day response',
                'Most clients treat it like insurance for their most important online asset',
            ],
        },
        {
            id: 'integrated-platforms',
            icon: Workflow,
            title: 'Integrated Platforms',
            subtitle: 'Starting at $6,500+',
            description: 'Complex builds connected to your CRM, scheduling tools, booking systems, and workflows.',
            features: [
                'API integrations, form routing logic, automation triggers',
                'Connected to your existing business systems from day one',
                'Custom dashboards and operational handoff',
                'Ideal for: multi-location businesses, high-volume lead operations, custom workflows',
            ],
        },
    ]

    const industries = [
        { icon: Wrench, label: 'Contractors (HVAC, plumbing, roofing, landscaping)' },
        { icon: Scale, label: 'Law firms & legal practices' },
        { icon: Stethoscope, label: 'Medical, dental & chiropractic offices' },
        { icon: Car, label: 'Auto repair & body shops' },
        { icon: UtensilsCrossed, label: 'Restaurants & catering businesses' },
        { icon: Dumbbell, label: 'Fitness studios & gyms' },
        { icon: Scissors, label: 'Salons & spas' },
        { icon: Home, label: 'Real estate agents' },
        { icon: Building2, label: 'Any local service business that lives or dies by Google' },
    ]

    const processSteps = [
        {
            step: '01',
            title: 'Discovery & Scope',
            description: 'We learn your business, your customers, and your goals. You get a clear proposal within 48 hours.',
        },
        {
            step: '02',
            title: 'Design Direction',
            description: 'Custom visual direction built around your brand. No templates. You see mockups before a line of code is written.',
        },
        {
            step: '03',
            title: 'Build',
            description: 'Clean, hand-written code. HTML, CSS, JavaScript, React, or Next.js depending on what the project needs.',
        },
        {
            step: '04',
            title: 'QA & Launch',
            description: 'Lighthouse audit \u226590 across all metrics. Mobile QA. Cross-browser check. Then we launch.',
        },
        {
            step: '05',
            title: 'Handoff & Growth',
            description: 'You get full ownership. Optionally, we stay on via Care Plan to keep the site fast, updated, and performing.',
        },
    ]

    const servicesJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Website Development Services',
        itemListElement: mainServices.map((service, index) => ({
            '@type': 'Service',
            position: index + 1,
            name: service.title,
            description: service.description,
            provider: {
                '@type': 'Organization',
                name: 'Region Systems LLC',
                url: 'https://regionsystemsllc.com',
            },
            areaServed: 'US',
            serviceType: 'Website Development',
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center" data-reveal data-delay="50">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Web Design <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed mb-8">
                            From focused landing pages to integrated platforms &mdash; scoped and priced clearly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary text-lg inline-flex items-center space-x-2">
                                <span>Get a Quote Now</span>
                            </Link>
                            <Link href="/pricing" className="btn-outline text-lg">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Core Services</h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Built for every stage of growth, from launch to scale.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {mainServices.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`bg-navy-900 rounded-2xl p-8 sm:p-10 border ${service.highlighted ? 'border-accent-500/40' : 'border-navy-800'}`}
                                data-reveal
                                data-delay="60"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-accent-500/15 rounded-lg">
                                                <service.icon className="h-7 w-7 text-accent-300" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                                <p className="text-accent-300 font-medium text-sm">{service.subtitle}</p>
                                            </div>
                                            {service.highlighted && (
                                                <span className="hidden sm:inline-block bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    Most Popular
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-lg text-navy-300 leading-relaxed mb-6">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-navy-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-end">
                                        <Link
                                            href="/contact"
                                            className="btn-primary inline-flex items-center gap-2 w-full justify-center lg:w-auto"
                                        >
                                            <span>Get a Quote</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Industries We Build For</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {industries.map((industry) => (
                            <div key={industry.label} className="flex items-center gap-3 bg-navy-950 rounded-xl p-4 border border-navy-800" data-reveal data-delay="30">
                                <industry.icon className="h-5 w-5 text-accent-300 flex-shrink-0" />
                                <span className="text-sm text-navy-200">{industry.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-navy-400 text-sm mt-8 max-w-2xl mx-auto">
                        These are the industries where a quality website has a direct, measurable ROI &mdash; because customers are actively searching and your competitors are already showing up.
                    </p>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Process</h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Five clear stages from kickoff to launch.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {processSteps.map((s) => (
                            <div key={s.step} className="flex gap-6 bg-navy-900 rounded-xl p-6 border border-navy-800" data-reveal data-delay="50">
                                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0">
                                    {s.step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                                    <p className="text-navy-300 text-sm leading-relaxed">{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 text-white" data-reveal>
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start?</h2>
                        <p className="text-xl text-navy-200 mb-10 leading-relaxed">
                            We&apos;ll scope the right service level and deliver fast. Proposals within 48 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary py-4 px-8 inline-flex items-center space-x-2">
                                <span>Get a Quote Now</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link href="/pricing" className="btn-outline py-4 px-8">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
