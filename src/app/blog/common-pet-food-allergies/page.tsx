import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function PetFoodAllergiesPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Common Pet Food Allergies: Symptoms, Diagnosis, and Solutions
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Constant scratching, recurrent ear infections, year-round itching — food allergies affect 10–15% of all allergic pets and are frequently misdiagnosed.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Pet Food Allergy?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A food allergy is an <strong>immune-mediated response</strong> to a specific protein in the diet. The immune system mistakenly identifies a food protein as a threat, mounting an inflammatory response typically in the skin, ears, and GI tract.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This is different from a <strong>food intolerance</strong>, which is a non-immune-mediated reaction. Both cause symptoms and require dietary management, but they are different mechanisms with different diagnostic approaches.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Most Common Food Allergens</h2>
                        <p className="text-gray-600 text-sm mb-4">Contrary to popular belief, pets are typically <em>not</em> allergic to grains. The most common allergens are proteins — specifically the proteins they have been exposed to most frequently throughout their lives.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-blue-900 mb-3">🐕 Dogs (in order of frequency)</h3>
                                <ol className="space-y-1">
                                    {['Beef (most common)', 'Dairy', 'Chicken', 'Wheat/Gluten', 'Egg', 'Lamb', 'Soy', 'Pork', 'Fish', 'Rabbit'].map((item, i) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-700">
                                            <span className="text-blue-500 font-bold w-5 flex-shrink-0">{i + 1}.</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div>
                                <h3 className="font-bold text-purple-900 mb-3">🐈 Cats</h3>
                                <ol className="space-y-1">
                                    {['Beef', 'Fish (particularly common in cats)', 'Chicken', 'Dairy', 'Egg', 'Wheat/Gluten', 'Lamb'].map((item, i) => (
                                        <li key={item} className="flex gap-2 text-sm text-gray-700">
                                            <span className="text-purple-500 font-bold w-5 flex-shrink-0">{i + 1}.</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                                <p className="text-gray-500 text-xs mt-3">The pattern in both species: the most common allergens are the most common ingredients — the proteins the animal has been repeatedly exposed to.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Symptoms</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">🐕 In Dogs</h3>
                                <div className="space-y-2">
                                    <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                                        <p className="font-bold text-orange-900 text-xs mb-1">Skin (Most Common)</p>
                                        <ul className="text-orange-800 text-xs space-y-0.5">
                                            <li>Chronic itching (face, paws, ears, groin)</li>
                                            <li>Recurrent ear infections</li>
                                            <li>Hot spots, hair loss, redness, rashes</li>
                                            <li>Thickened/darkened skin in problem areas</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                                        <p className="font-bold text-gray-900 text-xs mb-1">GI (Less Common)</p>
                                        <ul className="text-gray-700 text-xs space-y-0.5">
                                            <li>Chronic vomiting or loose stool</li>
                                            <li>Increased bowel frequency, gas</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                                        <p className="font-bold text-gray-900 text-xs mb-1">Behavioral</p>
                                        <ul className="text-gray-700 text-xs">
                                            <li>Rubbing face on carpet, scooting, restlessness</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">🐈 In Cats</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    {[
                                        'Miliary dermatitis (small, crusty bumps across the body)',
                                        'Symmetrical hair loss from over-grooming',
                                        'Intense head and neck scratching',
                                        'Eosinophilic plaques (raised red ulcerated lesions)',
                                        'Recurrent ear infections',
                                        'Chronic vomiting',
                                    ].map(s => <li key={s} className="flex gap-2"><span className="text-purple-400 flex-shrink-0">▸</span>{s}</li>)}
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Food vs. Environmental Allergies: How to Tell the Difference</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left text-blue-900">
                                        <th className="py-2 pr-4 font-bold">Feature</th>
                                        <th className="py-2 pr-4 font-bold">Food Allergy</th>
                                        <th className="py-2 font-bold">Environmental Allergy</th>
                                    </tr>
                                </thead>
                                <tbody className="text-blue-800">
                                    {[
                                        { f: 'Seasonality', a: 'Year-round', b: 'Often seasonal' },
                                        { f: 'Steroid response', a: 'Poor', b: 'Usually good' },
                                        { f: 'GI symptoms', a: 'Sometimes', b: 'Rarely' },
                                        { f: 'Most common trigger', a: 'Beef, chicken, fish', b: 'Pollen, dust mites, mold' },
                                        { f: 'Diagnosis', a: 'Elimination diet trial', b: 'Intradermal testing' },
                                    ].map(({ f, a, b }, i) => (
                                        <tr key={f} className={i % 2 === 0 ? '' : 'bg-blue-100/40'}>
                                            <td className="py-2 pr-4 font-semibold">{f}</td>
                                            <td className="py-2 pr-4">{a}</td>
                                            <td className="py-2">{b}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-blue-700 text-sm mt-4">Key question: Is your pet scratching year-round, even in winter? If so, food allergy is more likely. Many pets have <em>both</em> food and environmental allergies simultaneously.</p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Diagnosing Food Allergies: The Elimination Diet Trial</h2>
                        <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 mb-6">
                            <p className="text-yellow-800 text-sm font-semibold">⚠️ Saliva tests, hair tests, and blood allergy tests for pet food allergies have very poor accuracy and are NOT recommended by veterinary dermatologists. The only reliable diagnostic method is an elimination diet trial.</p>
                        </div>
                        <ol className="space-y-4">
                            {[
                                { title: 'Step 1: Select a novel protein diet.', text: 'Feed a protein source your pet has never eaten before. If your dog has eaten chicken, beef, fish, and lamb, try venison, rabbit, kangaroo, or duck. Options include hydrolyzed protein diets (prescription) or novel protein limited-ingredient diets.' },
                                { title: 'Step 2: Strict exclusion for 8–12 weeks.', text: 'Your pet eats ONLY the designated food. No treats, table scraps, flavored medications, or chews. Any accidental exposure can invalidate the results.' },
                                { title: 'Step 3: Monitor for improvement.', text: 'Skin symptoms typically begin to improve within 4–6 weeks. Full resolution can take the entire 12 weeks.' },
                                { title: 'Step 4: Challenge reintroduction.', text: 'Reintroduce the original food. If symptoms return within 1–2 weeks, food allergy is confirmed. Then systematically reintroduce individual proteins to identify the specific trigger.' },
                            ].map(({ title, text }, i) => (
                                <li key={title} className="flex gap-4">
                                    <span className="bg-blue-600 text-white font-black rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">{title}</p>
                                        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Food Allergies Long-Term</h2>
                        <ul className="space-y-2">
                            {[
                                'Select a food that avoids the identified allergens. Check ingredient labels carefully — allergens may be present in "natural flavors" (often chicken-derived).',
                                'For pets with severe allergies, prescription hydrolyzed protein diets may be the most reliable long-term option.',
                                'Be vigilant about treats. Many dog and cat treats contain multiple proteins. Pure, single-ingredient treats (freeze-dried duck, dehydrated sweet potato) are safest.',
                                'Watch for cross-reactivity — some pets allergic to one protein may react to related proteins.',
                            ].map(text => (
                                <li key={text} className="flex gap-3 text-gray-700 text-sm">
                                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                                    <span className="leading-relaxed">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">If Your Pet&apos;s Food Has Been Recalled</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            A food transition to a new protein source may unexpectedly benefit pets with undiagnosed food allergies. Check SafePaws Monitor for real-time FDA recall alerts.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
