import Link from 'next/link'
import { CheckCircle, ArrowRight, Minus, HelpCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Website Pricing — Packages from $2,500 | Region Systems LLC',
    description: 'Transparent pricing for custom website builds. Starter from $2,500, Growth from $4,000, Premium from $6,500+. No surprises.',
    keywords: 'website pricing, web design cost, custom website packages, affordable web development',
    alternates: {
        canonical: '/pricing',
    },
    openGraph: {
        title: 'Website Pricing — Packages from $2,500 | Region Systems LLC',
        description: 'Every project is scoped and priced clearly before we begin. See our packages.',
        url: 'https://regionsystemsllc.com/pricing',
        type: 'website',
    },
}

export default function Pricing() {
    const tiers = [
        {
            name: 'Starter',
            price: '$2,500',
            bestFit: 'New / solo business',
            features: {
                pages: 'Up to 5',
                revisions: '1 round',
                delivery: '2 weeks',
                seo: 'Basic',
                analytics: false,
            },
            highlighted: false,
        },
        {
            name: 'Growth',
            price: '$4,000',
            bestFit: 'Established SMB',
            badge: 'Most Popular',
            features: {
                pages: 'Up to 10',
                revisions: '2 rounds',
                delivery: '3–4 weeks',
                seo: 'Full',
                analytics: true,
            },
            highlighted: true,
        },
        {
            name: 'Premium',
            price: '$6,500+',
            bestFit: 'Revenue-critical site',
            features: {
                pages: 'Custom',
                revisions: '3 rounds',
                delivery: '4–6 weeks',
                seo: 'Full + Strategy',
                analytics: true,
            },
            highlighted: false,
        },
    ]

    const addOns = [
        { name: 'Monthly Care Plan', price: '$150–$200/mo', description: 'Ongoing updates, backups, monitoring' },
        { name: 'SEO Launch Package', price: '$500 one-time', description: 'Technical SEO setup + submission' },
        { name: 'Rush Delivery', price: '+$500', description: 'Compressed timeline' },
        { name: 'Copywriting', price: '$200/page', description: 'Professional website copy' },
        { name: 'Hosting Setup', price: '$200 one-time', description: 'Full hosting configuration' },
    ]

    const faqs = [
        {
            q: "Why don't you build sites under $2,500?",
            a: "At lower price points, we'd be competing with page builders and templates — and cutting corners to stay profitable. Our minimum ensures every build gets the time and quality it deserves.",
        },
        {
            q: "What's included in the deposit?",
            a: "50% upfront to begin. 50% on launch. We don't start work until the deposit is received, and you don't pay the balance until the site is live.",
        },
        {
            q: 'Can I add pages or features mid-project?',
            a: "Yes — scope changes outside the original agreement are billed at $150/hour. We outline this clearly in every contract so there are no surprises.",
        },
        {
            q: 'Do you offer ongoing support?',
            a: "Yes — our Care Plan covers monthly updates, backups, performance monitoring, and priority support starting at $150/month.",
        },
    ]

    const pricingJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Website Development Pricing',
        itemListElement: tiers.map((tier, index) => ({
            '@type': 'Offer',
            position: index + 1,
            name: tier.name + ' Website Package',
            price: tier.price.replace(/[^0-9]/g, ''),
            priceCurrency: 'USD',
            description: tier.name + ' package: ' + tier.features.pages + ' pages, ' + tier.features.delivery + ' delivery',
        })),
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Transparent Pricing. <span className="gradient-text">No Surprises.</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed">
                            Every project is scoped and priced clearly before we begin. Here&apos;s how our packages work.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`relative rounded-2xl p-8 border ${tier.highlighted
                                    ? 'border-accent-500 bg-gradient-to-b from-accent-600/10 to-navy-900 shadow-glow'
                                    : 'border-navy-800 bg-navy-900'
                                    }`}
                                data-reveal
                                data-delay="60"
                            >
                                {tier.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        {tier.badge}
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                    <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                                    <p className="text-sm text-navy-400">{tier.bestFit}</p>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-400">Pages</span>
                                        <span className="text-white font-medium">{tier.features.pages}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-400">Revisions</span>
                                        <span className="text-white font-medium">{tier.features.revisions}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-400">Delivery</span>
                                        <span className="text-white font-medium">{tier.features.delivery}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-400">On-page SEO</span>
                                        <span className="text-white font-medium">{tier.features.seo}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-400">Analytics Setup</span>
                                        {tier.features.analytics ? (
                                            <CheckCircle className="h-5 w-5 text-accent-400" />
                                        ) : (
                                            <Minus className="h-5 w-5 text-navy-600" />
                                        )}
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className={`w-full text-center block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${tier.highlighted ? 'btn-primary' : 'btn-outline'}`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Add-Ons</h2>
                        <p className="text-navy-300">Extend your project with these optional services.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-navy-950 rounded-xl border border-navy-800 overflow-hidden">
                            {addOns.map((addon, index) => (
                                <div
                                    key={addon.name}
                                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 ${index < addOns.length - 1 ? 'border-b border-navy-800' : ''}`}
                                >
                                    <div className="mb-2 sm:mb-0">
                                        <div className="text-white font-semibold">{addon.name}</div>
                                        <div className="text-sm text-navy-400">{addon.description}</div>
                                    </div>
                                    <div className="text-accent-300 font-semibold whitespace-nowrap">{addon.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Think of it as an investment, not an expense.
                        </h2>
                        <p className="text-lg text-navy-300 leading-relaxed mb-8">
                            A contractor who lands one new job per month from their website has paid for a $2,500 build in a single booking. Frame every price against what it returns.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            <span>Get a Quote</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900" data-reveal>
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq) => (
                            <div key={faq.q} className="bg-navy-950 rounded-xl border border-navy-800 p-6" data-reveal data-delay="40">
                                <div className="flex items-start gap-3">
                                    <HelpCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                                        <p className="text-navy-300 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to get started?</h2>
                        <p className="text-lg text-navy-300 mb-8">Proposals within 48 hours. No commitment required.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary py-4 px-8 inline-flex items-center gap-2 justify-center">
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
