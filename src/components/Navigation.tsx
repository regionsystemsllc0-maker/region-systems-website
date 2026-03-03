'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Get a Quote' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-navy-950/95 backdrop-blur-sm border-b border-navy-800'
                    : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <Link
                        href="/"
                        className="flex items-center space-x-3 group motion-safe:hover:-translate-y-0.5 transition-transform duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="h-10 w-10 rounded-lg overflow-hidden border border-accent-400/30 group-hover:border-accent-300/60 transition-colors duration-300">
                            <Image
                                src="/region-systems-logo.png"
                                alt="Region Systems LLC logo mark"
                                width={1024}
                                height={1024}
                                className="h-full w-full object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold text-white">
                                Region Systems
                            </span>
                            <div className="text-sm text-accent-300 font-medium">
                                LLC
                            </div>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-300 hover:text-accent-300 hover:-translate-y-0.5 ${pathname === link.href
                                        ? 'text-accent-300'
                                        : 'text-navy-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary text-sm"
                        >
                            Get a Quote Now
                        </Link>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg text-navy-200 hover:text-white hover:bg-navy-800 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
                            ? 'max-h-96 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 overflow-hidden -translate-y-2'
                        }`}
                >
                    <div className="py-4 space-y-2 bg-navy-900 rounded-lg shadow-lg mt-2 border border-navy-800">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium transition-colors duration-300 hover:bg-navy-800 hover:text-accent-300 ${pathname === link.href
                                        ? 'text-accent-300 bg-navy-800'
                                        : 'text-navy-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-4 pt-2">
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary text-sm w-full text-center block"
                            >
                                Get a Quote Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation

