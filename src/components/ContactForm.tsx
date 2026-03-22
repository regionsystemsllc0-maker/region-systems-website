'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { event as gtagEvent } from '@/app/lib/gtag'

type FormData = {
    businessName: string
    yourName: string
    email: string
    phone: string
    projectType: string
    numberOfPages: string
    hasContent: string
    goals: string[]
    budgetRange: string
    timeline: string
    referralSource: string
    notes: string
}

const initialFormData: FormData = {
    businessName: '',
    yourName: '',
    email: '',
    phone: '',
    projectType: '',
    numberOfPages: '',
    hasContent: '',
    goals: [],
    budgetRange: '',
    timeline: '',
    referralSource: '',
    notes: '',
}

export default function ContactForm() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const updateField = (field: keyof FormData, value: string | string[]) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    const toggleGoal = (goal: string) => {
        setFormData((prev) => ({
            ...prev,
            goals: prev.goals.includes(goal)
                ? prev.goals.filter((g) => g !== goal)
                : [...prev.goals, goal],
        }))
    }

    const validateStep1 = () => {
        const newErrors: Partial<Record<keyof FormData, string>> = {}
        if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required'
        if (!formData.yourName.trim()) newErrors.yourName = 'Your name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const nextStep = () => {
        if (step === 1 && !validateStep1()) return
        setStep((prev) => Math.min(prev + 1, 3))
    }

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

    const handleSubmit = async () => {
        if (!validateStep1()) {
            setStep(1)
            return
        }

        setIsSubmitting(true)
        setSubmitError('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!res.ok) {
                const data = await res.json()
                throw new Error(data.error || 'Submission failed')
            }

            setIsSubmitted(true)
            gtagEvent({
                action: 'contact_form_submitted',
                category: 'conversion',
                label: formData.projectType || 'unknown',
            })
        } catch (err) {
            setSubmitError(
                err instanceof Error
                    ? err.message
                    : 'Something went wrong. Please try again or email us directly.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                    Thank you, {formData.yourName}!
                </h3>
                <p className="text-navy-300 text-lg mb-2">
                    Connor will review your project and reply within <strong className="text-white">1 business day</strong> with a clear scope and next steps.
                </p>
                <p className="text-navy-400 text-sm">
                    Check your inbox at <span className="text-accent-300">{formData.email}</span> for a confirmation.
                </p>
            </div>
        )
    }

    const inputClass = (field: keyof FormData) =>
        `w-full bg-navy-950 border ${errors[field] ? 'border-red-500' : 'border-navy-700'} rounded-lg px-4 py-3 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors duration-200`

    const radioClass = (selected: boolean) =>
        `flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${selected ? 'border-accent-500 bg-accent-500/10 text-white' : 'border-navy-700 bg-navy-950 text-navy-300 hover:border-navy-600'}`

    const checkboxClass = (selected: boolean) =>
        `flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${selected ? 'border-accent-500 bg-accent-500/10 text-white' : 'border-navy-700 bg-navy-950 text-navy-300 hover:border-navy-600'}`

    return (
        <div>
            {/* Step indicators */}
            <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${s === step
                                ? 'bg-accent-600 text-white'
                                : s < step
                                    ? 'bg-accent-600/30 text-accent-300'
                                    : 'bg-navy-800 text-navy-500'
                                }`}
                        >
                            {s < step ? <CheckCircle className="h-4 w-4" /> : s}
                        </div>
                        {s < 3 && (
                            <div className={`w-12 h-0.5 ${s < step ? 'bg-accent-600/50' : 'bg-navy-800'}`} />
                        )}
                    </div>
                ))}
            </div>

            {/* Step 1: About You */}
            {step === 1 && (
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-white mb-1">About You</h3>
                    <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-navy-300 mb-1.5">Business Name *</label>
                        <input
                            id="businessName"
                            type="text"
                            placeholder="Acme Services LLC"
                            value={formData.businessName}
                            onChange={(e) => updateField('businessName', e.target.value)}
                            className={inputClass('businessName')}
                        />
                        {errors.businessName && <p className="text-red-400 text-sm mt-1">{errors.businessName}</p>}
                    </div>
                    <div>
                        <label htmlFor="yourName" className="block text-sm font-medium text-navy-300 mb-1.5">Your Name *</label>
                        <input
                            id="yourName"
                            type="text"
                            placeholder="John Smith"
                            value={formData.yourName}
                            onChange={(e) => updateField('yourName', e.target.value)}
                            className={inputClass('yourName')}
                        />
                        {errors.yourName && <p className="text-red-400 text-sm mt-1">{errors.yourName}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy-300 mb-1.5">Email Address *</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="john@acmeservices.com"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy-300 mb-1.5">Phone Number <span className="text-navy-500">(optional)</span></label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className={inputClass('phone')}
                        />
                    </div>
                </div>
            )}

            {/* Step 2: Your Project */}
            {step === 2 && (
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-white mb-1">Your Project</h3>
                    <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">Project Type</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {['Landing Page', 'Business Website', 'Integrated Platform', 'Not Sure Yet'].map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => updateField('projectType', type)}
                                    className={radioClass(formData.projectType === type)}
                                >
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.projectType === type ? 'border-accent-500' : 'border-navy-600'}`}>
                                        {formData.projectType === type && <div className="w-2 h-2 rounded-full bg-accent-500" />}
                                    </div>
                                    <span className="text-sm">{type}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="numberOfPages" className="block text-sm font-medium text-navy-300 mb-1.5">Number of Pages</label>
                        <select
                            id="numberOfPages"
                            value={formData.numberOfPages}
                            onChange={(e) => updateField('numberOfPages', e.target.value)}
                            className={inputClass('numberOfPages')}
                        >
                            <option value="">Select...</option>
                            <option value="1-3">1–3 pages</option>
                            <option value="4-7">4–7 pages</option>
                            <option value="8+">8+ pages</option>
                            <option value="Not Sure">Not Sure</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">Do you have existing website copy/content?</label>
                        <div className="flex gap-2">
                            {['Yes', 'No', 'Partially'].map((opt) => (
                                <button
                                    key={opt}
                                    type="button"
                                    onClick={() => updateField('hasContent', opt)}
                                    className={radioClass(formData.hasContent === opt)}
                                >
                                    <span className="text-sm">{opt}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">Key Goals <span className="text-navy-500">(select all that apply)</span></label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {['More Leads', 'Stronger Credibility', 'Rank on Google', 'Replace Old Site', 'Launch New Business', 'Other'].map((goal) => (
                                <button
                                    key={goal}
                                    type="button"
                                    onClick={() => toggleGoal(goal)}
                                    className={checkboxClass(formData.goals.includes(goal))}
                                >
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${formData.goals.includes(goal) ? 'border-accent-500 bg-accent-500' : 'border-navy-600'}`}>
                                        {formData.goals.includes(goal) && <CheckCircle className="h-3 w-3 text-white" />}
                                    </div>
                                    <span className="text-sm">{goal}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
                <div className="space-y-5">
                    <h3 className="text-lg font-semibold text-white mb-1">Budget &amp; Timeline</h3>
                    <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">Budget Range</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {['$2,500–$4,000', '$4,000–$6,500', '$6,500+', 'Not Sure'].map((budget) => (
                                <button
                                    key={budget}
                                    type="button"
                                    onClick={() => updateField('budgetRange', budget)}
                                    className={radioClass(formData.budgetRange === budget)}
                                >
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.budgetRange === budget ? 'border-accent-500' : 'border-navy-600'}`}>
                                        {formData.budgetRange === budget && <div className="w-2 h-2 rounded-full bg-accent-500" />}
                                    </div>
                                    <span className="text-sm">{budget}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-navy-300 mb-2">Timeline</label>
                        <div className="grid grid-cols-1 gap-2">
                            {[
                                { value: 'ASAP', label: 'ASAP — within 2 weeks' },
                                { value: 'Standard', label: 'Standard — 3–4 weeks' },
                                { value: 'Flexible', label: 'Flexible' },
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => updateField('timeline', opt.value)}
                                    className={radioClass(formData.timeline === opt.value)}
                                >
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.timeline === opt.value ? 'border-accent-500' : 'border-navy-600'}`}>
                                        {formData.timeline === opt.value && <div className="w-2 h-2 rounded-full bg-accent-500" />}
                                    </div>
                                    <span className="text-sm">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="referralSource" className="block text-sm font-medium text-navy-300 mb-1.5">How did you hear about us?</label>
                        <select
                            id="referralSource"
                            value={formData.referralSource}
                            onChange={(e) => updateField('referralSource', e.target.value)}
                            className={inputClass('referralSource')}
                        >
                            <option value="">Select...</option>
                            <option value="Google">Google</option>
                            <option value="Referral">Referral</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Cold Outreach">Cold Outreach</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-navy-300 mb-1.5">Additional Notes <span className="text-navy-500">(optional)</span></label>
                        <textarea
                            id="notes"
                            rows={4}
                            placeholder="Anything else you'd like us to know about your project..."
                            value={formData.notes}
                            onChange={(e) => updateField('notes', e.target.value)}
                            className={inputClass('notes')}
                        />
                    </div>
                </div>
            )}

            {submitError && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                    {submitError}
                </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8">
                {step > 1 ? (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 text-navy-300 hover:text-white transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                    </button>
                ) : (
                    <div />
                )}

                {step < 3 ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>Continue</span>
                        <ArrowRight className="h-4 w-4" />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Submit Inquiry</span>
                                <ArrowRight className="h-4 w-4" />
                            </>
                        )}
                    </button>
                )}
            </div>
        </div>
    )
}
