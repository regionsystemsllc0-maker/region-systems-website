'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function MotionEffects() {
    const pathname = usePathname()

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        const revealElements = Array.from(
            document.querySelectorAll<HTMLElement>('[data-reveal]')
        )

        revealElements.forEach((element) => {
            const delay = element.dataset.delay ?? '0'
            element.style.setProperty('--reveal-delay', `${delay}ms`)
            element.classList.remove('is-visible')
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px',
            }
        )

        revealElements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [pathname])

    return null
}
