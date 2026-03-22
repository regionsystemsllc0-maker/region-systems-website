import Link from 'next/link'
import { Mail, MapPin, Phone, Shield, Calendar, Globe } from 'lucide-react'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
    title: 'Get a Website Quote | Region Systems LLC',
    description: 'Fill out our project intake form to get a clear scope and quote within 1 business day. Custom websites starting at $2,500.',
    keywords: 'get a website quote, premium web development quote, indiana web studio, nationwide website projects',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Get a Website Quote | Region Systems LLC',
        description: 'Start your website project. Connor will reply within 1 business day with a clear scope and next steps.',
        url: 'https://regionsystemsllc.com/contact',
        type: 'website',
    },
}

export default function Contact() {
    const contactPageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Get a Quote',
        url: 'https://regionsystemsllc.com/contact',
        description: 'Request a quote for website design and development services from Region Systems LLC.',
        inLanguage: 'en-US',
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
            />
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Let&apos;s Build Something <span className="gradient-text">Serious</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed mb-4">
                            Fill out the form below. Connor will review your project and reply within 1 business day with a clear scope and next steps.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950" data-reveal>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="bg-navy-900 rounded-2xl border border-navy-800 p-8 sm:p-10" data-reveal data-delay="60">
                                <ContactForm />
                            </div>
                        </div>

                        <div className="space-y-6" data-reveal data-delay="120">
                            <div className="bg-navy-900 rounded-xl border border-navy-800 p-6">
                                <h3 className="text-lg font-semibold text-white mb-4">Direct Contact</h3>
                                <div className="space-y-3">
                                    <a href="mailto:havlinconnor@gmail.com" className="flex items-center gap-3 text-navy-300 hover:text-accent-300 transition-colors duration-300">
                                        <Mail className="h-5 w-5 text-accent-400" />
                                        <span className="text-sm">havlinconnor@gmail.com</span>
                                    </a>
                                    <a href="tel:+12195103566" className="flex items-center gap-3 text-navy-300 hover:text-accent-300 transition-colors duration-300">
                                        <Phone className="h-5 w-5 text-accent-400" />
                                        <span className="text-sm">(219) 510-3566</span>
                                    </a>
                                    <div className="flex items-center gap-3 text-navy-300">
                                        <MapPin className="h-5 w-5 text-accent-400" />
                                        <span className="text-sm">Indiana, United States</span>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="https://calendly.com/havlinconnor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-navy-900 rounded-xl border border-navy-800 p-6 hover:border-accent-500/50 transition-colors duration-300 group"
                            >
                                <Calendar className="h-5 w-5 text-accent-400" />
                                <div>
                                    <div className="text-white font-semibold text-sm group-hover:text-accent-300 transition-colors">Book a 15-Minute Discovery Call</div>
                                    <div className="text-navy-400 text-xs">Schedule on Calendly</div>
                                </div>
                            </Link>

                            <div className="bg-navy-900 rounded-xl border border-navy-800 p-6">
                                <h3 className="text-lg font-semibold text-white mb-4">What to Expect</h3>
                                <div className="space-y-3 text-sm text-navy-300">
                                    <div className="flex items-start gap-2">
                                        <Shield className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                        <span>No templates. No page builders.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Shield className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                        <span>50% deposit, 50% on launch.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Globe className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                        <span>Indiana-based. Nationwide delivery.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
