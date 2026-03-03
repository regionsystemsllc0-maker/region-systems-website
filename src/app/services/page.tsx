import Link from 'next/link'
import {
    Rocket,
    Layers,
    ShoppingCart,
    Workflow,
    Link2,
    Code2,
    LayoutDashboard,
    CheckCircle,
    ArrowRight,
    Gauge
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Website Services | Region Systems LLC',
    description: 'Premium website services from focused landing pages to advanced, integration-ready digital platforms.',
    keywords: 'website services, premium web design, web development services, business website development, ecommerce web development',
    alternates: {
        canonical: '/services',
    },
    openGraph: {
        title: 'Website Services | Region Systems LLC',
        description:
            'Explore landing pages, business websites, commerce builds, and integrated workflow solutions.',
        url: 'https://regionsystems.com/services',
        type: 'website',
    },
}

export default function Services() {
    const mainServices = [
        {
            id: 'landing-pages',
            icon: Rocket,
            title: 'Landing Pages',
            subtitle: 'Lean launches built to convert',
            description: 'High-impact landing pages with clear messaging and action.',
            features: [
                'Messaging-first page architecture',
                'Mobile-first responsive design',
                'SEO-ready page structure',
                'Conversion-focused CTA design'
            ],
        },
        {
            id: 'business-websites',
            icon: Layers,
            title: 'Business Websites',
            subtitle: 'Complete websites for trust and growth',
            description: 'Multi-page websites aligned to your positioning and growth goals.',
            features: [
                'Custom design system implementation',
                'Service and proof page layouts',
                'Performance-minded front-end build',
                'Scalable content structure'
            ],
        },
        {
            id: 'commerce-platforms',
            icon: ShoppingCart,
            title: 'Commerce Platforms',
            subtitle: 'Online stores built for conversion',
            description: 'Modern storefronts with conversion-first discovery and checkout flow.',
            features: [
                'Catalog and category architecture',
                'Checkout and conversion optimization',
                'Order and fulfillment integrations',
                'Conversion analytics setup'
            ],
        },
        {
            id: 'integrated-workflows',
            icon: Workflow,
            title: 'Integrated Workflows',
            subtitle: 'Websites connected to your business operations',
            description: 'Advanced websites connected to CRMs, tools, and routing systems.',
            features: [
                'CRM and API integrations',
                'Form and lead routing logic',
                'Workflow-enabled page interactions',
                'Operational dashboard handoff'
            ],
        }
    ]

    const capabilities = [
        {
            icon: Link2,
            title: 'Third-Party Integrations',
            description: 'Connect your site to the software stack your team already runs on.'
        },
        {
            icon: Code2,
            title: 'Custom Components',
            description: 'Purpose-built interface systems designed around your operation and customer journey.'
        },
        {
            icon: LayoutDashboard,
            title: 'Content Management',
            description: 'Structured content architecture so your team can update pages confidently.'
        },
        {
            icon: Gauge,
            title: 'Performance Optimization',
            description: 'Practical speed and UX tuning that keeps your site fast and premium.'
        }
    ]

    const processSteps = [
        {
            step: '01',
            title: 'Scope',
            description: 'Goals, user paths, and scope.'
        },
        {
            step: '02',
            title: 'Design',
            description: 'Sharp visual direction and messaging.'
        },
        {
            step: '03',
            title: 'Build',
            description: 'Clean code, responsive layouts, integrations.'
        },
        {
            step: '04',
            title: 'Launch',
            description: 'QA, launch, and clear handoff.'
        }
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
                url: 'https://regionsystems.com',
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
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Website Building <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed mb-8">
                            From focused pages to integrated platforms.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="btn-primary text-lg inline-flex items-center space-x-2"
                            >
                                <span>Get a Quote Now</span>
                            </Link>
                            <Link
                                href="#services"
                                className="btn-outline text-lg"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="section-padding bg-navy-950">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Built for every stage of growth, from launch to scale.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {mainServices.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="p-3 bg-accent-500/15 rounded-lg">
                                            <service.icon className="h-8 w-8 text-accent-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-accent-300 font-medium">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-navy-300 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-white mb-4">Included</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center space-x-2">
                                                    <CheckCircle className="h-4 w-4 text-accent-300 flex-shrink-0" />
                                                    <span className="text-sm text-navy-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                        <Link
                                            href="/contact"
                                            className="btn-primary inline-flex items-center space-x-2"
                                        >
                                            <span>Get a Quote Now</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                        <div className="text-sm text-navy-400">
                                            Fast turnaround • Strategically scoped execution
                                        </div>
                                    </div>
                                </div>

                                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                    <div className="bg-gradient-to-br from-accent-600/35 to-navy-900 rounded-2xl p-8 text-white border border-accent-400/20">
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3">
                                                <service.icon className="h-12 w-12 text-accent-300" />
                                                <div>
                                                    <h4 className="text-xl font-bold">{service.title}</h4>
                                                    <p className="text-accent-100">Premium execution with practical outcomes</p>
                                                </div>
                                            </div>

                                            <div className="bg-white/10 rounded-lg p-4">
                                                <h5 className="font-semibold mb-3">Execution Focus</h5>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-accent-100">Design quality</span>
                                                        <span className="font-semibold">High</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-accent-100">Technical depth</span>
                                                        <span className="font-semibold">Scalable</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-accent-100">Delivery speed</span>
                                                        <span className="font-semibold">Fast</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Execution Capabilities
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Beyond visuals. Built for operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((service) => (
                            <div key={service.title} className="bg-navy-950 rounded-xl p-6 shadow-lg card-hover border border-navy-800">
                                <div className="p-3 bg-accent-500/15 rounded-lg w-fit mb-4">
                                    <service.icon className="h-6 w-6 text-accent-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-navy-300 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900 text-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Our Process
                        </h2>
                        <p className="text-xl text-navy-200 max-w-3xl mx-auto">
                            A disciplined process from kickoff to launch.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-navy-800 rounded-xl p-6 border border-navy-700 h-full">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center font-bold text-lg">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-semibold">{step.title}</h3>
                                    </div>
                                    <p className="text-navy-200 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-600 z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ready to Start?
                        </h2>
                        <p className="text-xl text-navy-200 mb-10 leading-relaxed">
                            We will scope the right service level and execute quickly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/contact"
                                className="btn-primary py-4 px-8 inline-flex items-center space-x-2"
                            >
                                <span>Get a Quote Now</span>
                            </Link>
                            <Link
                                href="/about"
                                className="btn-outline py-4 px-8"
                            >
                                Learn About Us
                            </Link>
                        </div>

                        <div className="text-center text-navy-300">
                            <p className="text-sm">
                                Nationwide service • Indiana based • Fast turnaround
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

