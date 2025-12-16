
import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';
import { getAmazonLink } from '../../../lib/affiliate';

export default function ReadingLabelsPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-12 shadow-sm border border-white/50">
                    <Link href="/resources" className="text-blue-600 font-bold hover:underline mb-6 inline-block">&larr; Back to Resources</Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Decoding Pet Food Labels</h1>
                    <p className="text-xl text-gray-700">
                        Marketing can be misleading. Here's how to look past the pretty pictures and understand what's really in the bag.
                    </p>
                </div>

                {/* The Big Three */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                        <div className="text-4xl mb-4">🥩</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">First Ingredient</h3>
                        <p className="text-gray-600 text-sm">
                            The first item listed by weight. It MUST be a real protein source (e.g. "Chicken"), not "Corn" or "By-Product Meal".
                        </p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                        <div className="text-4xl mb-4">🌽</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fillers</h3>
                        <p className="text-gray-600 text-sm">
                            Watch for splitting: "Corn Gluten Meal", "Ground Corn", and "Corn Flour" might add up to more corn than meat!
                        </p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                        <div className="text-4xl mb-4">🔬</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Analysis</h3>
                        <p className="text-gray-600 text-sm">
                            Shows the minimum % of protein and fat. Compare these on a Dry Matter Basis if switching between wet and dry food.
                        </p>
                    </div>
                </div>

                {/* Red Flags */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center bg-red-50/80 backdrop-blur w-fit px-6 py-3 rounded-full border border-red-100">
                        <span className="mr-3 text-2xl">🚩</span> Label Red Flags
                    </h2>
                    <ul className="space-y-4">
                        <li className="bg-white/80 p-4 rounded-xl border-l-4 border-red-500 font-medium text-gray-800">
                            "With Chicken" only requires 3% chicken. Look for "Chicken Dinner" (25%) or just "Chicken" (95%).
                        </li>
                        <li className="bg-white/80 p-4 rounded-xl border-l-4 border-red-500 font-medium text-gray-800">
                            Generic terms like "Meat Meal" or "Animal Fat" (Which animal?!).
                        </li>
                        <li className="bg-white/80 p-4 rounded-xl border-l-4 border-red-500 font-medium text-gray-800">
                            Artificial colors (Blue 2, Red 40, Yellow 5). Pets don't care about color!
                        </li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="bg-blue-600 text-white rounded-3xl p-10 text-center shadow-lg mb-12">
                    <h2 className="text-2xl font-bold mb-4">Ready for an upgrade?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        We've searched for brands that list real meat first and skip the fillers.
                    </p>
                    <a
                        href={getAmazonLink("high protein grain free dog food")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-blue-600 font-extrabold rounded-full hover:bg-blue-50 transition-colors shadow-md"
                    >
                        Browse High-Quality Options on Amazon
                    </a>
                </div>

                <LegalDisclaimer />

            </div>
        </div>
    );
}
