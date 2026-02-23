import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function CleanIngredientBrandsPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Pet Food Brands with the Cleanest Ingredient Lists
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Terms like &quot;natural,&quot; &quot;holistic,&quot; and &quot;premium&quot; have no legal definition in pet food labeling. Here&apos;s how to evaluate what&apos;s actually in the bag.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does &quot;Clean Ingredients&quot; Mean?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                'Named protein sources (chicken, beef — not "poultry" or "meat")',
                                'No artificial preservatives (tocopherols, not BHA/BHT)',
                                'No artificial colors or flavors',
                                'Limited filler ingredients',
                                'Transparency about sourcing',
                                'Whole food ingredients vs. extensively processed fractions',
                            ].map(item => (
                                <div key={item} className="bg-green-50 p-3 rounded-xl border border-green-100 text-xs text-green-800 font-medium">✓ {item}</div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Evaluate a Brand Beyond the Label</h2>
                        <div className="space-y-3">
                            {[
                                { q: 'Does the company employ a DACVN?', a: 'A Diplomate of the American College of Veterinary Nutrition has completed a veterinary degree, residency, and board certification. Companies with DACVNs on staff are investing seriously in nutritional science.' },
                                { q: 'Does the company conduct AAFCO feeding trials?', a: 'Feeding trials mean higher confidence in real-world nutritional performance — beyond just formulation estimates.' },
                                { q: 'Where are ingredients sourced?', a: 'Transparency about ingredient origins is a positive signal. The 2007 melamine crisis originated with Chinese-sourced ingredients in American-labeled products.' },
                                { q: 'Does the company manufacture its own food?', a: 'Companies that own their manufacturing facilities have greater quality control than those using contract manufacturers.' },
                                { q: 'How has the company responded to past recalls?', a: 'Almost every major brand has had a recall. What matters is how quickly and transparently they responded and whether quality controls improved.' },
                            ].map(({ q, a }) => (
                                <div key={q} className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r-xl">
                                    <p className="font-bold text-blue-900 text-sm mb-1">{q}</p>
                                    <p className="text-blue-800 text-xs leading-relaxed">{a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Brands Receiving High Marks for Ingredient Quality</h2>

                        {[
                            {
                                title: '🐕 Dry Dog Food',
                                brands: [
                                    { brand: 'Orijen (Champion Petfoods)', detail: 'Multiple named animal proteins; 5+ named meats per formula; high fresh/raw meat percentage; natural preservatives; Champion-owned facilities. Note: primarily legume-based carbs.' },
                                    { brand: 'Acana (Champion Petfoods)', detail: 'Same manufacturer as Orijen; slightly lower protein and price point. Strong ingredient quality; named proteins; natural preservatives.' },
                                    { brand: 'Merrick (Before Grain / Backcountry)', detail: 'Named protein sources; organ meats in some formulas; natural preservatives; no artificial colors or flavors.' },
                                    { brand: 'Fromm Family Foods', detail: 'Family-owned with their own Wisconsin manufacturing facility. Consistent quality; broad variety of proteins.' },
                                    { brand: 'Ziwi Peak', detail: 'New Zealand-sourced; air-dried format; extremely high meat content; minimal plant ingredients. Premium price point.' },
                                    { brand: 'Wellness CORE', detail: 'Strong protein profile; limited unnecessary additives; widely available at national pet retailers.' },
                                ],
                            },
                            {
                                title: '🐈 Dry Cat Food',
                                brands: [
                                    { brand: 'Orijen Cat & Kitten', detail: 'High meat content from multiple named proteins; includes freeze-dried inclusions; high protein appropriate for cats; taurine prominently listed.' },
                                    { brand: 'Ziwi Peak (Cat formulas)', detail: 'Extremely high named animal protein; multiple protein options including lamb, mackerel, chicken, beef.' },
                                    { brand: 'Weruva (Cats in the Kitchen)', detail: 'Primarily wet food; extremely clean labels; human-grade ingredients; minimal fillers; good taurine content.' },
                                ],
                            },
                            {
                                title: '🥩 Wet / Canned Food',
                                brands: [
                                    { brand: 'Weruva (Dog and Cat)', detail: 'Human-grade ingredients; primarily meat-based with minimal plant fillers; very clean labels; variety of proteins.' },
                                    { brand: 'Merrick (Grain-Free canned)', detail: 'Named protein first ingredient; real vegetables; no artificial preservatives, colors, or flavors.' },
                                    { brand: 'Instinct (Nature\'s Variety)', detail: 'High protein content; clean ingredient list; available in various formats.' },
                                ],
                            },
                        ].map(({ title, brands }) => (
                            <div key={title} className="mb-6 last:mb-0">
                                <h3 className="font-black text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 mb-3">{title}</h3>
                                <div className="space-y-3">
                                    {brands.map(({ brand, detail }) => (
                                        <div key={brand} className="flex gap-3 text-gray-700 border-b border-gray-100 pb-3 last:border-0">
                                            <span className="font-bold text-gray-900 flex-shrink-0 text-xs w-48">{brand}</span>
                                            <span className="text-xs leading-relaxed">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Brands to Approach with More Caution</h2>
                        <ul className="space-y-3">
                            {[
                                'Very low-cost store brands: Often use contract manufacturers; ingredient quality tends to follow the price point. The 2020–2021 aflatoxin outbreak disproportionately affected budget store-brand products.',
                                'Foods where peas, lentils, or chickpeas dominate the top ingredients — especially without taurine prominently listed — given the DCM research context.',
                                'Brands with repeated recalls for different reasons over a short period, suggesting systemic quality control issues.',
                            ].map(text => (
                                <li key={text} className="flex gap-3 text-sm bg-red-50 p-4 rounded-xl border border-red-100">
                                    <span className="text-red-500 flex-shrink-0">⚠️</span>
                                    <span className="text-gray-700 leading-relaxed">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">The Budget Reality: Purina Pro Plan &amp; Royal Canin</h3>
                        <p className="text-blue-800 text-sm leading-relaxed">
                            Purina employs more veterinary nutritionists and conducts more feeding trials than almost any other company. Pro Plan uses named proteins and has generally avoided large contamination events. Royal Canin offers similar nutritional rigor. Neither has the cleanest ingredient list by label standards, but both have well-documented nutritional performance — making them strong choices at a mid-range price.
                        </p>
                    </section>

                    <section className="bg-green-50 p-8 rounded-3xl border border-green-100">
                        <h2 className="text-2xl font-bold text-green-900 mb-4">Your 8-Question Evaluation Checklist</h2>
                        <ol className="space-y-2">
                            {[
                                'Is the first ingredient a named animal protein or named meat meal?',
                                'Are preservatives natural (tocopherols) or synthetic (BHA/BHT)?',
                                'Are there any artificial colors or flavors?',
                                'Does the company have a DACVN on staff?',
                                'Does the food carry an AAFCO feeding trial statement?',
                                'Can you find out where protein ingredients are sourced?',
                                'Does the company own its manufacturing facility?',
                                'Has the brand had recalls? How did they respond?',
                            ].map((q, i) => (
                                <li key={q} className="flex gap-3 text-green-800 text-sm">
                                    <span className="bg-green-200 text-green-900 font-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">{i + 1}</span>
                                    <span className="leading-relaxed pt-0.5">{q}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Know Your Brand&apos;s Recall History</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks recalls from all pet food brands in real time. Being alerted the moment anything changes is the best way to ensure ongoing safety.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
