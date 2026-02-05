import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function RawVsProcessedPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12 text-center">
                    <Link href="/resources" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Resources</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Raw vs. Processed Food</h1>
                    <p className="text-xl text-gray-600">The most controversial topic in pet nutrition, explained without the hype.</p>
                </div>

                {/* Intro */}
                <div className="prose prose-lg max-w-none text-gray-700 mb-16">
                    <p>
                        If you spend five minutes on a pet forum, you'll see a war between "Kibble is poison!" and "Raw is dangerous!".
                        The truth, as usual, is somewhere in the middle. Here is an objective look at both sides.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="grid md:grid-cols-2 gap-0 border rounded-3xl overflow-hidden shadow-lg mb-16">
                    {/* Raw Side */}
                    <div className="bg-red-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-red-100">
                        <div className="text-center mb-8">
                            <span className="text-4xl block mb-2">🥩</span>
                            <h2 className="text-2xl font-black text-gray-900">The Raw Diet (BARF)</h2>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Biologically Appropriate Raw Food</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-green-700 mb-2">+ The Pros</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li>Unprocessed nutrients (no high heat).</li>
                                    <li>High moisture content.</li>
                                    <li>Better dental health (if feeding bones).</li>
                                    <li>Often leads to smaller, less smelly stool.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-700 mb-2">- The Cons</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li><strong>Pathogen Risk:</strong> High risk of Salmonella/Listeria for humans and pets.</li>
                                    <li>nutritional Imbalance: Hard to get right at home.</li>
                                    <li>Expensive and time-consuming.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Processed Side */}
                    <div className="bg-white p-8 md:p-12">
                        <div className="text-center mb-8">
                            <span className="text-4xl block mb-2">🥣</span>
                            <h2 className="text-2xl font-black text-gray-900">Processed (Kibble/Canned)</h2>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">The Standard Diet</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-green-700 mb-2">+ The Pros</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li><strong>Safety:</strong> Pasteurization kills bacteria.</li>
                                    <li><strong>Convenience:</strong> Shelf-stable and easy.</li>
                                    <li><strong>Complete & Balanced:</strong> Formulated to meet AAFCO standards.</li>
                                    <li>Cost-effective.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-red-700 mb-2">- The Cons</h3>
                                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                    <li>High heat destroys some natural nutrients.</li>
                                    <li>Often uses fillers or lower quality ingredients.</li>
                                    <li>Can be very dry (dehydrating).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Safety Warning */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 md:p-8 rounded-r-xl mb-12">
                    <h3 className="text-xl font-bold text-yellow-900 mb-2">Important Safety Note on Raw Feeding</h3>
                    <p className="text-yellow-800 leading-relaxed">
                        If you choose to feed raw, the FDA and AVMA generally advise against it due to public health risks.
                        If you proceed, <strong>hygiene is critical</strong>. Wash all surfaces, bowls, and hands thoroughly after handling.
                        Do not feed raw diets to pets in households with immunocompromised humans, small children, or elderly people.
                    </p>
                </div>

                <div className="mt-16">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}
