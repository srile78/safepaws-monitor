import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function DryVsFreshPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/resources" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Resources</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Dry vs. Fresh Refrigerated</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        The pet food aisle has changed. Now, food arrives in coolers at your doorstep. Is "Fresh" food worth the premium price tag?
                    </p>
                </div>

                {/* Content Block */}
                <div className="space-y-12">
                    {/* The Rise of Fresh */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is "Fresh" Pet Food?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Think of brands like <em>The Farmer's Dog</em>, <em>Nom Nom</em>, or <em>Ollie</em>. These are gently cooked meals made from human-grade ingredients,
                            portioned specifically for your pet, frozen/refrigerated, and shipped to you. They are essentially "home cooking" but balanced by nutritionists.
                        </p>
                    </section>

                    {/* The Comparison */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Breakdown</h2>
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Fresh */}
                            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                                <h3 className="text-xl font-bold text-green-900 mb-4">Fresh / Mail Order</h3>
                                <ul className="space-y-3 text-green-800">
                                    <li className="flex gap-2">
                                        <span className="font-bold">Pros:</span>
                                        <span>Highly palatable (pets love it), gentle cooking retains nutrients, high moisture, transparent ingredients.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold">Cons:</span>
                                        <span>Extremely expensive ($100-$300+/mo for large dogs), requires freezer space, shipping logistics.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Dry */}
                            <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-4">Premium Dry Food</h3>
                                <ul className="space-y-3 text-orange-800">
                                    <li className="flex gap-2">
                                        <span className="font-bold">Pros:</span>
                                        <span>Convenient, affordable, good for dental abrasion, easy to store. High-quality grain-free options exist.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold">Cons:</span>
                                        <span>Highly processed, low moisture, mysterious labeling ("meat meal").</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Verdict */}
                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">The Verdict</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            If you can afford it, <strong>Fresh</strong> is generally superior for health, digestion, and coat quality.
                            However, a high-quality <strong>Dry</strong> food is perfectly adequate for raising a healthy, happy pet.
                        </p>
                        <p className="font-bold text-white">
                            Tip: You can use Fresh food as a "topper" on Dry food to get the benefits without the full cost!
                        </p>
                    </section>
                </div>

                <div className="mt-16">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}
