import Link from 'next/link'
import {
    Target,
    Globe,
    CheckCircle,
    ArrowRight
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Region Systems LLC',
    description: 'Region Systems LLC is an Indiana-based premium website studio serving businesses nationwide.',
    keywords: 'about region systems llc, premium web studio, indiana website agency, nationwide web services',
}

export default function About() {
    const principles = [
        {
            title: 'Sharp Design Direction',
            description: 'Clean, high-end interfaces that signal quality fast.'
        },
        {
            title: 'Strong Technical Execution',
            description: 'Maintainable, scalable, integration-ready builds.'
        },
        {
            title: 'Fast Turnaround',
            description: 'Fast delivery without compromise.'
        }
    ]

    const capabilities = [
        {
            title: 'Landing pages for focused campaigns'
        },
        {
            title: 'Business websites built for trust'
        },
        {
            title: 'Commerce experiences built to convert'
        },
        {
            title: 'Deep integrations and workflow-enabled systems'
        }
    ]

    const process = [
        {
            step: '01',
            title: 'Discovery and scope'
        },
        {
            step: '02',
            title: 'Content and structure'
        },
        {
            step: '03',
            title: 'Design and development'
        },
        {
            step: '04',
            title: 'Review and launch'
        }
    ]

    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            About <span className="gradient-text">Region Systems</span>
                        </h1>
                        <p className="text-xl text-navy-300 leading-relaxed mb-8">
                            Indiana-based website studio. Nationwide clients.
                            Premium websites built for trust, growth, and scale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-navy-300">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Nationwide service coverage</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Indiana-based team</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-300" />
                                <span>Fast turnaround process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                                Our Mission
                            </h2>
                            <p className="text-lg text-navy-300 leading-relaxed mb-6">
                                Build websites that position businesses as market leaders.
                            </p>
                            <p className="text-lg text-navy-300 leading-relaxed mb-8">
                                Premium visual direction backed by practical engineering.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-accent-500/15 rounded-lg">
                                    <Target className="h-8 w-8 text-accent-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                                    <p className="text-navy-300">
                                        Every business deserves a website that matches its value.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-accent-600/35 to-navy-900 rounded-2xl p-8 text-white border border-accent-400/20">
                            <h3 className="text-2xl font-bold mb-6">What We Build</h3>
                            <div className="space-y-4">
                                {capabilities.map((item) => (
                                    <div key={item.title} className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-200 mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="text-accent-100 text-sm">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            How We Work
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            A practical framework built around business outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {principles.map((item) => (
                            <div key={item.title} className="bg-navy-950 rounded-xl p-8 shadow-lg card-hover border border-navy-800">
                                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-navy-300 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-950">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Project Flow
                        </h2>
                        <p className="text-xl text-navy-300 max-w-3xl mx-auto">
                            Clear stages. Fast momentum.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item) => (
                            <div key={item.step} className="bg-navy-900 rounded-xl p-6 border border-navy-800">
                                <div className="text-accent-300 font-semibold mb-2">{item.step}</div>
                                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                                <p className="text-navy-300 text-sm mt-2">
                                    Clear communication through every stage.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-navy-900">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto bg-navy-950 rounded-2xl border border-navy-800 p-10 text-center">
                        <div className="inline-flex items-center space-x-2 text-accent-300 mb-4">
                            <Globe className="h-5 w-5" />
                            <span>Nationwide service from Indiana</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Let’s Build It Right
                        </h2>
                        <p className="text-lg text-navy-300 mb-8 leading-relaxed">
                            We will scope the right build and execute with speed.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="btn-primary py-4 px-8 inline-flex items-center space-x-2 justify-center"
                            >
                                <span>Get a Quote Now</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="btn-outline py-4 px-8"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

