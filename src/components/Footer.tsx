import Link from 'next/link'
import { Globe, Mail, MapPin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Get a Quote', href: '/contact' },
        ],
        services: [
            { label: 'Landing Pages', href: '/services#landing-pages' },
            { label: 'Business Websites', href: '/services#business-websites' },
            { label: 'Commerce Platforms', href: '/services#commerce-platforms' },
            { label: 'Integrated Workflows', href: '/services#integrated-workflows' },
        ],
    }

    return (
        <footer className="bg-navy-950 text-white border-t border-navy-800">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <div className="p-2 bg-accent-600 rounded-lg">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold">Region Systems</span>
                                <div className="text-sm text-accent-400 font-medium">
                                    LLC
                                </div>
                            </div>
                        </Link>
                        <p className="text-navy-300 mb-6 text-sm leading-relaxed max-w-sm">
                            Premium websites for businesses across the U.S.
                        </p>
                        <div className="inline-flex items-center rounded-lg border border-navy-700 bg-navy-900 px-3 py-2 text-sm text-navy-300">
                            Indiana based, serving clients nationwide
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 space-y-3 text-sm">
                            <div className="flex items-center space-x-2 text-navy-300">
                                <Mail className="h-4 w-4 text-accent-400" />
                                <a href="mailto:connor@regionsystemsllc.com" className="hover:text-accent-400 transition-colors duration-300">
                                    connor@regionsystemsllc.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2 text-navy-300">
                                <MapPin className="h-4 w-4 text-accent-400" />
                                <span>Indiana, United States</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-navy-400 text-sm">
                            © {currentYear} Region Systems LLC. All rights reserved.
                        </div>
                        <div className="text-navy-400 text-sm">
                            Built for trust and growth.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
