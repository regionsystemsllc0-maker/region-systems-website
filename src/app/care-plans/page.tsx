import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield, BarChart3 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Website Care Plans — From $150/month | Region Systems LLC',
    description: 'Monthly website maintenance plans: updates, backups, monitoring, and performance optimization. Keep your site fast, safe, and up to date.',
    keywords: 'website maintenance plan, website care plan, monthly website support, website backup service',
    alternates: {
        canonical: '/care-plans',
    },
    openGraph: {
        title: 'Website Care Plans — From $150/month | Region Systems LLC',
        description: 'Our Care Plan handles everything after launch so you never have to think about it.',
        url: 'https://regionsystemsllc.com/care-plans',
        type: 'website',
    },
}

export default function CarePlans() {
    const plans = [
        {
            name: 'Basic',
            price: '$150',
            period: '/month',
            icon: Shield,
            features: [
                'Monthly content updates (text, images, hours, business info)',
                'Uptime monitoring with instant email alerts',
                'Monthly full-site backup',
                'Priority email support',
            ],
            highlighted: false,
        },
        {
            name: 'Standard',
            price: '$200',
            period: '/month',
            icon: BarChart3,
            badge: 'Recommended',
            includes: 'Everything in Basic, plus:',
            features: [
                'Performance monitoring + quarterly speed optimization',
                'Security checks and dependency updates',
                'Monthly analytics report (traffic, rankings, top pages)',
            ],
            highlighted: true,
        },
    ]

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Keep Your Site <span className="gradient-text">Fast, Safe, and Up to Date</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed">
                            Our Care Plan handles everything after launch so you never have to think about it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-2xl p-8 border ${plan.highlighted
                                    ? 'border-accent-500 bg-gradient-to-b from-accent-600/10 to-navy-900 shadow-glow'
                                    : 'border-navy-800 bg-navy-900'
                                    }`}
                                data-reveal
                                data-delay="60"
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-accent-500/15 rounded-lg">
                                        <plan.icon className="h-6 w-6 text-accent-300" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                </div>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-navy-400">{plan.period}</span>
                                </div>
                                {plan.includes && (
                                    <p className="text-sm text-accent-300 font-medium mb-4">{plan.includes}</p>
                                )}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-navy-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.highlighted ? 'btn-primary' : 'btn-outline'
                                        }`}
                                >
                                    Add a Care Plan
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pitch */}
            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Insurance for your most important online asset.
                        </h2>
                        <p className="text-lg text-navy-300 leading-relaxed mb-8">
                            Most clients treat the Care Plan like insurance for their most important piece of online infrastructure. For less than a tank of gas per week, your site stays updated, backed up, and performing — and you never have to touch it.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary py-4 px-8 inline-flex items-center gap-2 justify-center">
                                <span>Get Started</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link href="/pricing" className="btn-outline py-4 px-8">
                                View All Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
