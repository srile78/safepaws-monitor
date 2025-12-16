
import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function AllergiesPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header Container */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 mb-12 shadow-sm border border-white/50">
                    <Link href="/resources" className="text-blue-600 font-bold hover:underline mb-6 inline-block">&larr; Back to Resources</Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Allergies & Safe Diets</h1>
                    <p className="text-xl text-gray-700">
                        Just like humans, pets can develop intolerance to certain ingredients. Here is how to spot the signs and feed them safely.
                    </p>
                </div>

                {/* Common Allergens */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center bg-blue-50/80 backdrop-blur w-fit px-6 py-3 rounded-full border border-blue-100">
                        <span className="mr-3 text-2xl">🍗</span> Top Pet Food Allergens
                    </h2>
                    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white/40">
                        <p className="text-gray-700 mb-6 text-lg font-medium">
                            Contrary to popular belief, grains are rarely the culprit. The most common allergies are actually specific proteins.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <AllergenCard emoji="🐔" name="Chicken" />
                            <AllergenCard emoji="🥩" name="Beef" />
                            <AllergenCard emoji="🥛" name="Dairy" />
                            <AllergenCard emoji="🥚" name="Eggs" />
                        </div>
                    </div>
                </div>

                {/* Signs & Symptoms */}
                <div className="mb-12 bg-amber-50/80 backdrop-blur-md p-8 rounded-[2rem] border border-amber-100 shadow-sm">
                    <h2 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
                        <span className="bg-amber-100/50 p-2 rounded-lg mr-3 text-xl">⚠️</span>
                        Signs of a Food Allergy
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Chronic itching (ears, paws, rear end)",
                            "Recurrent ear infections",
                            "Gastrointestinal upset (vomiting, diarrhea)",
                            "Red, inflamed skin patches"
                        ].map((symptom, i) => (
                            <li key={i} className="flex items-center bg-white/60 p-4 rounded-xl text-gray-800 font-medium">
                                <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                {symptom}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Diet Tips */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-green-50/80 backdrop-blur w-fit px-6 py-3 rounded-full border border-green-100 flex items-center">
                        <span className="mr-3 text-2xl">🥗</span> Finding the Right Diet
                    </h2>

                    <div className="space-y-6">
                        <DietTip
                            num="1"
                            title="Limited Ingredient Diets (LID)"
                            desc="Look for foods with one protein source and one carb source (e.g., 'Salmon & Potato'). This makes identifying the trigger much easier."
                        />
                        <DietTip
                            num="2"
                            title="Novel Proteins"
                            desc="Try protein sources your pet has never eaten before, such as Duck, Venison, Rabbit, or Kangaroo."
                        />
                        <DietTip
                            num="3"
                            title="Hydrolyzed Protein"
                            desc="Prescription diets where protein is broken down so small the immune system doesn't detect it. Ideal for severe cases."
                        />
                    </div>
                </div>

                <LegalDisclaimer />

            </div>
        </div>
    );
}

function AllergenCard({ emoji, name }: { emoji: string, name: string }) {
    return (
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-blue-50 shadow-sm hover:scale-105 transition-transform">
            <span className="text-4xl block mb-2 filter drop-shadow-sm">{emoji}</span>
            <span className="font-bold text-gray-800">{name}</span>
        </div>
    );
}

function DietTip({ num, title, desc }: { num: string, title: string, desc: string }) {
    return (
        <div className="flex gap-6 bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-sm hover:shadow-md transition-all">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600 text-xl shadow-inner">
                {num}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                    {desc}
                </p>
            </div>
        </div>
    );
}
