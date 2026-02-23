import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function DogFoodIngredientsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Complete Guide to Dog Food Ingredients: What to Look For and What to Avoid
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Decode the ingredient list on your dog&apos;s food bag. From named meat meals to synthetic preservatives — learn what actually matters.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Standing in the pet food aisle reading a bag of dog food can feel like trying to decode a chemistry textbook. &ldquo;Chicken meal,&rdquo; &ldquo;by-product meal,&rdquo; &ldquo;brewers rice,&rdquo; &ldquo;BHA,&rdquo; &ldquo;mixed tocopherols&rdquo; — it&apos;s overwhelming, and the marketing on the front of the bag rarely tells you what&apos;s actually inside.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This guide breaks down every major ingredient category in dog food: what it is, what it does, whether it&apos;s beneficial or problematic, and what to look for when evaluating a product.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Read a Dog Food Ingredient List</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'Ingredients are listed by weight, heaviest first.', text: 'This means the first few ingredients make up the bulk of the food. \"Before cooking\" is the key phrase — raw chicken is about 70% water. When cooked, that water evaporates. So \"chicken\" listed first may actually represent less actual protein than \"chicken meal\" listed third, because chicken meal is already a concentrated dried product.' },
                                { title: 'The first 5 ingredients tell you the most.', text: 'What\'s in positions 1–5 is what primarily makes up the food.' },
                                { title: 'Splitting is a common marketing tactic.', text: 'A manufacturer wanting to hide how much corn is in a food may split it into \"ground corn,\" \"corn gluten meal,\" and \"corn starch\" — so each appears lower on the list individually. When combined, corn might actually be the primary ingredient.' },
                            ].map(({ title, text }) => (
                                <div key={title} className="flex gap-3">
                                    <span className="text-blue-600 mt-1 flex-shrink-0">▸</span>
                                    <p className="text-gray-700"><strong>{title}</strong> {text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Protein Sources: The Foundation of Any Dog Food</h2>
                        <div className="space-y-4">
                            {[
                                { label: 'Named Meat Sources', badge: 'Excellent', color: 'green', text: 'Chicken, beef, lamb, turkey, salmon, duck, venison — these are whole meat ingredients that provide high-quality, bioavailable protein and amino acids.' },
                                { label: 'Named Meat Meals', badge: 'Good to Excellent', color: 'green', text: 'Chicken meal, beef meal, salmon meal — concentrated protein sources made by rendering meat and removing moisture. A quality meat meal contains 2–3x more protein by weight than the equivalent whole meat. The key word is "named." Chicken meal is good. Generic "poultry meal" or "meat meal" is problematic.' },
                                { label: 'By-Products and By-Product Meals', badge: 'Acceptable', color: 'yellow', text: 'By-products are organ meats, necks, and other non-muscle-meat parts of the animal. These are actually nutrient-dense. Named by-products (chicken by-products) are more regulated than unnamed "poultry byproducts."' },
                                { label: 'Plant Proteins', badge: 'Use Caution', color: 'orange', text: 'Pea protein, potato protein, lentil protein — plant-based proteins have become common in grain-free formulas. However, they have a different amino acid profile than animal proteins and are less bioavailable. The FDA has been investigating a potential link between high-legume diets and dilated cardiomyopathy (DCM) in dogs.' },
                            ].map(({ label, badge, color, text }) => (
                                <div key={label} className={`p-5 rounded-2xl border ${color === 'green' ? 'bg-green-50 border-green-100' : color === 'yellow' ? 'bg-yellow-50 border-yellow-100' : 'bg-orange-50 border-orange-100'}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="font-bold text-gray-900">{label}</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${color === 'green' ? 'bg-green-200 text-green-800' : color === 'yellow' ? 'bg-yellow-200 text-yellow-800' : 'bg-orange-200 text-orange-800'}`}>{badge}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fats: Essential but Variable in Quality</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">✓ High-Quality Fats</h3>
                                <p className="text-green-800 text-sm leading-relaxed">Chicken fat, salmon oil, herring oil, flaxseed oil — named animal fats and quality fish oils provide essential fatty acids, particularly omega-3s. These support brain development in puppies, reduce inflammation, and promote a healthy coat.</p>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2">⚠ Lower-Quality Fats</h3>
                                <p className="text-orange-800 text-sm leading-relaxed">Generic &ldquo;animal fat&rdquo; — the source is unspecified, quality can vary. Corn oil, soybean oil — high in omega-6 but low in omega-3; an imbalanced ratio can promote inflammation.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preservatives: Natural vs. Synthetic</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2">✓ Natural Preservatives (Preferred)</h3>
                                <ul className="text-green-800 text-sm space-y-1">
                                    <li>Mixed tocopherols (Vitamin E)</li>
                                    <li>Ascorbic acid (Vitamin C)</li>
                                    <li>Rosemary extract</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                                <h3 className="font-bold text-red-900 mb-2">✗ Synthetic Preservatives (Avoid)</h3>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>BHA, BHT — classified as possible carcinogens by IARC</li>
                                    <li>Ethoxyquin — originally developed as a pesticide</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">🚩 Red Flags: Ingredients to Avoid</h2>
                        <ul className="space-y-2">
                            {[
                                'Generic protein sources: "Meat," "poultry," "fish" without a species name',
                                'Corn syrup or sugar in the first several ingredients',
                                'BHA, BHT, or ethoxyquin as preservatives',
                                'Artificial colors (Red 40, Yellow 5, Blue 2)',
                                'Propylene glycol',
                                'Multiple forms of the same ingredient in the top 5 (ingredient splitting)',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-red-800">
                                    <span className="flex-shrink-0 font-bold">✗</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Evaluate a Dog Food in 60 Seconds</h2>
                        <ol className="space-y-3">
                            {[
                                { q: 'Look at the first 3 ingredients.', a: 'Is a named animal protein or named meat meal in there?' },
                                { q: 'Check the fat source.', a: 'Is there a named fat source (not just "animal fat")?' },
                                { q: 'Check for synthetic preservatives.', a: 'Do you see BHA, BHT, or ethoxyquin?' },
                                { q: 'Assess the carbohydrates.', a: 'Are the primary carbohydrates whole foods (sweet potato, brown rice, oats)?' },
                                { q: 'Watch out for legumes.', a: 'Are peas, lentils, or chickpeas in the first 5 ingredients?' },
                                { q: 'Artificial colors or flavors?', a: 'These have zero nutritional benefit and signal lower quality.' },
                            ].map(({ q, a }, i) => (
                                <li key={q} className="flex gap-4">
                                    <span className="bg-gray-900 text-white font-black rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                                    <div>
                                        <span className="font-bold text-gray-900">{q}</span>
                                        <span className="text-gray-600"> {a}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Knowing Ingredients Is Step One</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            The ingredient label is the single most important piece of information on a pet food package — far more informative than the marketing on the front of the bag. Flip the bag. Read the label.
                        </p>
                        <p className="text-blue-200 mb-6">SafePaws Monitor tracks FDA recall alerts in real time. Always know if your dog&apos;s food is on the recall list.</p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
                            Get Free Recall Alerts
                        </Link>
                    </section>

                    <div className="mt-8">
                        <LegalDisclaimer />
                    </div>
                </div>
            </div>
        </div>
    );
}
