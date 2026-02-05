import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function CatDietsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-[#7A5CFA] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem]">
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Link href="/resources" className="inline-block text-purple-100 font-bold mb-6 hover:text-white transition-colors">
                        &larr; Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                        Feline Nutrition 101: <br /> Feeding Your Obligate Carnivore
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                        Cats aren't just small dogs. They are hunters with specific biological needs.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">

                {/* Intro */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an "Obligate Carnivore"?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        It means your cat <strong>must</strong> eat meat to survive. Unlike dogs (who are omnivores), cats cannot produce certain amino acids (like Taurine) on their own.
                        They need to get them directly from animal tissue.
                    </p>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-red-800 font-medium">
                        ⚠️ A vegan diet is <span className="underline decoration-wavy">fatal</span> for cats. Never attempt to feed a cat a plant-based diet.
                    </div>
                </div>

                {/* Wet vs Dry Debate */}
                <div className="mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">The Great Debate: Wet vs. Dry</h2>
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Dry Food */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-gray-100 px-4 py-2 rounded-bl-2xl font-bold text-gray-600 text-sm">Most Convenient</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dry Kibble</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Economical and easy to store.</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Can help clean teeth (slightly).</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold">✗</span>
                                    <span>Very low moisture content (~10%).</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold">✗</span>
                                    <span>Often higher in carbohydrates.</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-500 italic">Best for: Grazers and budget-conscious owners. Must encourage water drinking.</p>
                        </div>

                        {/* Wet Food */}
                        <div className="bg-white p-8 rounded-3xl border border-purple-200 shadow-xl relative overflow-hidden ring-4 ring-purple-50">
                            <div className="absolute top-0 right-0 bg-purple-600 px-4 py-2 rounded-bl-2xl font-bold text-white text-sm">Vet Recommended</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wet / Canned</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>High moisture (~75%), mimicking prey.</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Better for kidney and urinary health.</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold">✓</span>
                                    <span>Typically higher protein, lower carb.</span>
                                </li>
                                <li className="flex gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold">✗</span>
                                    <span>More expensive; spoils quickly once opened.</span>
                                </li>
                            </ul>
                            <p className="text-sm text-gray-500 italic">Best for: Overall health, especially for male cats prone to urinary blocks.</p>
                        </div>
                    </div>
                </div>

                {/* Common Issues */}
                <div className="bg-blue-50 rounded-[2.5rem] p-8 md:p-12 border border-blue-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Feline Diet Issues</h2>
                    <div className="space-y-6">
                        <details className="bg-white rounded-xl p-4 cursor-pointer group">
                            <summary className="font-bold text-lg text-gray-800 flex justify-between items-center">
                                Obesity
                                <span className="group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                House cats are often sedentary. Free-feeding dry food is the #1 cause of obesity. Measure portions carefully!
                            </p>
                        </details>
                        <details className="bg-white rounded-xl p-4 cursor-pointer group">
                            <summary className="font-bold text-lg text-gray-800 flex justify-between items-center">
                                Urinary Crystals
                                <span className="group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Male cats are prone to fatal urinary blockages. Hydration is key. A wet food diet is the best prevention method.
                            </p>
                        </details>
                        <details className="bg-white rounded-xl p-4 cursor-pointer group">
                            <summary className="font-bold text-lg text-gray-800 flex justify-between items-center">
                                Picky Eaters
                                <span className="group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Cats imprint on food textures as kittens. Changing diets can be hard. Go slow—mix new food with old food over 7-10 days.
                            </p>
                        </details>
                    </div>
                </div>

                <div className="mt-16">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}
