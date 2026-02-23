import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function AafcoStandardsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Understanding AAFCO Pet Food Standards: What &ldquo;Complete and Balanced&rdquo; Actually Means
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Those nutritional adequacy statements on your pet&apos;s food bag are federally regulated. Here&apos;s how to decode them — and what they don&apos;t tell you.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is AAFCO?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Association of American Feed Control Officials is a non-profit organization that brings together state and federal regulatory officials to develop model regulations for animal feed and pet food. Despite how it sounds, <strong>AAFCO is not a government agency and does not have enforcement authority</strong>. It does not inspect factories, test products, or approve pet food.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            What AAFCO <em>does</em> is define the nutritional standards that constitute a &ldquo;complete and balanced&rdquo; diet for dogs and cats at various life stages. Think of AAFCO as the organization that writes the rulebook. The FDA and state agencies are the referees who enforce it.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Life Stage Designations</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-blue-900 mb-3">🐕 For Dogs</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Growth and Reproduction', text: 'For puppies and pregnant/nursing dogs. Higher requirements for protein, calcium, phosphorus.' },
                                        { label: 'Adult Maintenance', text: 'For healthy, non-reproducing adult dogs.' },
                                        { label: 'All Life Stages', text: 'Must meet the more stringent growth/reproduction requirements. Does NOT mean "better for adults." Higher calcium can affect large-breed puppy development.' },
                                    ].map(({ label, text }) => (
                                        <div key={label} className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                                            <p className="font-bold text-blue-900 text-sm">{label}</p>
                                            <p className="text-blue-800 text-xs mt-1">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-purple-900 mb-3">🐈 For Cats</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Growth and Reproduction', text: 'For kittens and pregnant/nursing cats. Higher protein, energy density, and taurine requirements.' },
                                        { label: 'Adult Maintenance', text: 'For healthy adult cats.' },
                                        { label: 'All Life Stages', text: 'Meets kitten requirements; appropriate for all cats.' },
                                    ].map(({ label, text }) => (
                                        <div key={label} className="bg-purple-50 p-3 rounded-xl border border-purple-100">
                                            <p className="font-bold text-purple-900 text-sm">{label}</p>
                                            <p className="text-purple-800 text-xs mt-1">{text}</p>
                                        </div>
                                    ))}
                                    <p className="text-gray-500 text-xs p-2">Note: AAFCO has no &ldquo;senior&rdquo; category. Senior foods are formulated at the manufacturer&apos;s discretion.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How a Food Earns the &ldquo;Complete and Balanced&rdquo; Claim</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 mb-2">Method 1: Nutrient Formulation</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-2">The manufacturer calculates the nutrient content and verifies through lab analysis that the food meets AAFCO minimums. More common, but measures chemical content — not necessarily bioavailability.</p>
                                <p className="text-gray-500 text-xs italic">&ldquo;[Product] is formulated to meet the nutritional levels established by the AAFCO [Dog/Cat] Food Nutrient Profiles.&rdquo;</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">Method 2: Feeding Trials ⭐ Higher Standard</h3>
                                <p className="text-green-800 text-sm leading-relaxed mb-2">Real animals eat the food for a minimum of 26 weeks, then are evaluated for health outcomes. Tests real-world results, not just chemical composition.</p>
                                <p className="text-green-700 text-xs italic">&ldquo;Animal feeding tests using AAFCO procedures substantiate that [Product] provides complete and balanced nutrition.&rdquo;</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Reading the AAFCO Statement on the Label</h2>
                        <div className="space-y-3">
                            {[
                                { type: 'Complete & Balanced by Formulation', color: 'blue', ex: '"[Product] is formulated to meet the nutritional levels established by the AAFCO [Dog/Cat] Food Nutrient Profiles for [life stage]."' },
                                { type: 'Complete & Balanced by Feeding Trial', color: 'green', ex: '"Animal feeding tests using AAFCO procedures substantiate that [Product] provides complete and balanced nutrition for [life stage]."' },
                                { type: 'Complementary/Treat — NOT a complete diet', color: 'orange', ex: '"[Product] is intended for intermittent or supplemental feeding only."' },
                                { type: 'No AAFCO Statement — Avoid as a complete diet', color: 'red', ex: 'The food may not be legally compliant as a complete diet.' },
                            ].map(({ type, color, ex }) => (
                                <div key={type} className={`p-4 rounded-xl border-l-4 ${color === 'green' ? 'border-green-500 bg-green-50' : color === 'blue' ? 'border-blue-500 bg-blue-50' : color === 'orange' ? 'border-orange-400 bg-orange-50' : 'border-red-500 bg-red-50'}`}>
                                    <p className="font-bold text-gray-900 text-sm mb-1">{type}</p>
                                    <p className="text-gray-600 text-xs italic">{ex}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions About AAFCO</h2>
                        <div className="space-y-4">
                            {[
                                { myth: '"AAFCO approval means the food is safe."', fact: 'AAFCO doesn\'t approve foods — it sets nutrient standards. A food that meets AAFCO profiles can still be recalled for Salmonella, heavy metals, or other safety issues.' },
                                { myth: '"AAFCO formulated food is just as good as feeding trial food."', fact: 'Not necessarily. Formulated food meets minimum requirements on paper, but real-world feeding trials catch issues calculations miss.' },
                                { myth: '"Senior pet food meets a specific AAFCO standard."', fact: 'There is no "senior" AAFCO category. Senior foods are formulated to adult maintenance or all-life-stages standards at the manufacturer\'s discretion.' },
                            ].map(({ myth, fact }) => (
                                <div key={myth} className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                                    <p className="font-bold text-red-400 text-sm mb-1">❌ Myth: <span className="text-gray-700">{myth}</span></p>
                                    <p className="text-green-700 text-sm"><strong>✓ Reality:</strong> {fact}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use AAFCO Information in Practice</h2>
                        <ol className="space-y-3">
                            {[
                                'Find the AAFCO statement. If there isn\'t one, it\'s not a complete food.',
                                'Check the life stage. Puppies need "growth" or "all life stages." Adults can eat "maintenance" or "all life stages." Large-breed puppies need large-breed specific.',
                                'Note whether it\'s formulated vs. feeding trial — feeding trial is the higher standard.',
                                'Understand what AAFCO doesn\'t cover: ingredient quality, sourcing, and safety are outside AAFCO\'s scope.',
                                'Remember: AAFCO compliance is a floor, not a ceiling.',
                            ].map((text, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="bg-blue-600 text-white font-black rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                                    <p className="text-gray-700">{text}</p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">AAFCO Compliance Doesn&apos;t Prevent Recalls</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">SafePaws Monitor tracks all FDA pet food recalls in real time. Stay informed with instant recall alerts.</p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
