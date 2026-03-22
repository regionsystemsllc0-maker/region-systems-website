'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'

export default function ScrollCTA() {
    const [visible, setVisible] = useState(false)
    const [dismissed, setDismissed] = useState(false)

    useEffect(() => {
        if (dismissed) return

        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
            setVisible(scrollPercent > 0.6)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [dismissed])

    if (dismissed || !visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 animate-fade-in">
            <div className="bg-navy-900/95 backdrop-blur-sm border-t border-navy-700 px-4 py-3">
                <div className="container-custom flex items-center justify-between gap-4">
                    <p className="text-sm text-navy-200">
                        Ready to get a quote?
                    </p>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-1.5"
                        >
                            <span>Get a Quote Now</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <button
                            onClick={() => setDismissed(true)}
                            className="text-navy-400 hover:text-navy-200 transition-colors p-1"
                            aria-label="Dismiss quote prompt"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
