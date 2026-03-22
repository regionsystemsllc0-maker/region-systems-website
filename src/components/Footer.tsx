import Link from 'next/link'
import { Globe, Mail, MapPin, Phone, Clock } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const companyLinks = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'About', href: '/about' },
        { label: 'Get a Quote', href: '/contact' },
    ]

    const serviceLinks = [
        { label: 'Landing Pages', href: '/services#landing-pages' },
        { label: 'Business Websites', href: '/services#business-websites' },
        { label: 'Care Plans', href: '/care-plans' },
        { label: 'Integrated Platforms', href: '/services#integrated-platforms' },
    ]

    return (
        <footer className="bg-navy-950 text-white border-t border-navy-800" role="contentinfo">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-14">
                    <div>
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
                        <p className="text-navy-300 mb-4 text-sm leading-relaxed max-w-sm">
                            Custom websites for businesses that are serious about growth.
                        </p>
                        <div className="text-sm text-navy-400">
                            Indiana-based. Nationwide delivery.
                        </div>
                        <div className="mt-4 space-y-2">
                            <a href="mailto:havlinconnor@gmail.com" className="flex items-center space-x-2 text-sm text-navy-300 hover:text-accent-400 transition-colors duration-300">
                                <Mail className="h-4 w-4 text-accent-400" />
                                <span>havlinconnor@gmail.com</span>
                            </a>
                            <a href="tel:+12195103566" className="flex items-center space-x-2 text-sm text-navy-300 hover:text-accent-400 transition-colors duration-300">
                                <Phone className="h-4 w-4 text-accent-400" />
                                <span>(219) 510-3566</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
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
                            {serviceLinks.map((link) => (
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
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <div className="space-y-3 text-sm">
                            <a href="mailto:havlinconnor@gmail.com" className="flex items-center space-x-2 text-navy-300 hover:text-accent-400 transition-colors duration-300">
                                <Mail className="h-4 w-4 text-accent-400" />
                                <span>havlinconnor@gmail.com</span>
                            </a>
                            <a href="tel:+12195103566" className="flex items-center space-x-2 text-navy-300 hover:text-accent-400 transition-colors duration-300">
                                <Phone className="h-4 w-4 text-accent-400" />
                                <span>(219) 510-3566</span>
                            </a>
                            <div className="flex items-center space-x-2 text-navy-300">
                                <MapPin className="h-4 w-4 text-accent-400" />
                                <span>Indiana, United States</span>
                            </div>
                            <div className="flex items-center space-x-2 text-navy-300">
                                <Clock className="h-4 w-4 text-accent-400" />
                                <span>Reply within 1 business day</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link
                                href="https://calendly.com/havlinconnor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-300 hover:text-accent-200 text-sm font-medium transition-colors duration-300"
                            >
                                Book a 15-Minute Discovery Call &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-navy-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-navy-400 text-sm">
                            &copy; {currentYear} Region Systems LLC. All rights reserved.
                        </div>
                        <div className="text-navy-400 text-sm">
                            Built with Next.js &middot; Indiana-based, nationwide.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
