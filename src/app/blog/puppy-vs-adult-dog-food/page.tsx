import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function PuppyVsAdultFoodPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Puppy vs. Adult Dog Food: What&apos;s the Difference and When to Switch
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        The nutritional differences between life stage formulas are real and meaningful — particularly for large breed puppies where getting it wrong can have lasting consequences.
                    </p>
                </div>

                <div className="space-y-8">

                    {/* Why puppies are different */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Puppies Have Different Nutritional Needs</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                            Puppies are not small adult dogs. They are growing organisms with dramatically different metabolic demands. A puppy grows from birth to its adult size in 12–24 months. During that time, every organ system — musculoskeletal, neurological, immune, digestive — is developing rapidly and simultaneously.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['More energy (calories)', 'More protein for muscle & tissue', 'More calcium & phosphorus for bones', 'More vitamins for neurological development'].map(need => (
                                <div key={need} className="bg-green-50 p-3 rounded-xl border border-green-100 text-center text-xs font-semibold text-green-800">{need}</div>
                            ))}
                        </div>
                    </section>

                    {/* Comparison table */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Nutritional Differences: Puppy vs. Adult Food</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="text-left border-b border-gray-200">
                                        <th className="pb-3 pr-4 font-bold text-gray-900">Nutrient</th>
                                        <th className="pb-3 pr-4 font-bold text-blue-700">Puppy (AAFCO min)</th>
                                        <th className="pb-3 font-bold text-gray-600">Adult (AAFCO min)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {[
                                        { n: 'Protein', p: '22% (dry matter)', a: '18% (dry matter)', note: 'Supports muscle development & rapid cell multiplication.' },
                                        { n: 'Fat', p: '8% (dry matter)', a: '5.5% (dry matter)', note: 'High-density energy; carrier for fat-soluble vitamins and DHA.' },
                                        { n: 'Calcium', p: '1.0–2.5%', a: '0.5–2.5%', note: 'Critical for skeletal development. Large breeds: see warning below.' },
                                        { n: 'Phosphorus', p: '0.8% minimum', a: '0.4% minimum', note: 'Works with calcium for bone formation.' },
                                        { n: 'DHA', p: 'Especially important', a: 'Lower priority', note: 'Brain & retina component; puppies fed DHA score higher on trainability tests.' },
                                    ].map(({ n, p, a, note }, i) => (
                                        <tr key={n} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                                            <td className="py-3 pr-4 font-semibold">{n}</td>
                                            <td className="py-3 pr-4 text-blue-700 font-semibold">{p}</td>
                                            <td className="py-3">{a}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">For DHA: look for salmon oil, herring oil, or specifically added DHA on the label.</p>
                    </section>

                    {/* Large breed exception */}
                    <section className="bg-red-50 p-8 rounded-3xl border border-red-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ The Large Breed Exception: A Critical Detail</h2>
                        <p className="text-red-800 text-sm leading-relaxed mb-4">
                            Large breed puppies (adult weight over 55–70 lbs) need <strong>large breed-specific puppy food</strong>. This is not marketing — it is a genuine health distinction.
                        </p>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded-2xl border border-red-200">
                                <p className="font-bold text-red-900 text-sm mb-1">Excess Calcium Risk</p>
                                <p className="text-red-800 text-xs leading-relaxed">Large breed puppies cannot regulate intestinal calcium absorption effectively — they absorb more than they need. Too much calcium during rapid bone growth causes abnormal bone development. Standard puppy foods may have calcium levels that are too high for large breeds.</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-red-200">
                                <p className="font-bold text-red-900 text-sm mb-1">Rapid Growth Risk</p>
                                <p className="text-red-800 text-xs leading-relaxed">Excess calorie intake and rapid growth increase risk for developmental orthopedic disease (DOD) — hip dysplasia, osteochondrosis, hypertrophic osteodystrophy. Large breed puppy formulas use lower calorie density to promote slower, healthier growth.</p>
                            </div>
                        </div>
                        <div className="mt-4 bg-white p-4 rounded-2xl border border-red-200">
                            <p className="font-bold text-red-900 text-sm mb-1">Which breeds qualify as &quot;large breed&quot;?</p>
                            <p className="text-red-800 text-xs">Any dog expected to reach an adult weight over 50–70 lbs: Labrador Retrievers, Golden Retrievers, German Shepherds, Bernese Mountain Dogs, Boxers, Great Danes, Rottweilers, Standard Poodles.</p>
                        </div>
                    </section>

                    {/* Wrong food consequences */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens If You Feed the Wrong Food?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2 text-sm">Adult food fed to a puppy</h3>
                                <p className="text-orange-800 text-xs leading-relaxed">Not an acute emergency for most breeds, but over months of development can result in nutritional deficiencies — insufficient protein, fat, calcium, phosphorus, and DHA — and compromised neurological and immune system development. <strong>Note:</strong> &quot;All life stages&quot; foods meeting AAFCO growth requirements are acceptable for most puppies — but may still have higher calcium than ideal for large breeds.</p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2 text-sm">Puppy food fed to an adult dog</h3>
                                <p className="text-blue-800 text-xs leading-relaxed">Primarily a calorie concern. Puppy food is more calorie-dense — adult dogs eating it long-term are likely to become obese. Obesity is associated with arthritis, diabetes, heart disease, and shortened lifespan. Studies suggest obese dogs live 1–2.5 years less than lean dogs.</p>
                            </div>
                        </div>
                    </section>

                    {/* When to switch */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Switch from Puppy to Adult Food</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {[
                                { label: 'Small breeds', sub: 'Under 20 lbs', age: '9–12 months' },
                                { label: 'Medium breeds', sub: '20–50 lbs', age: '≈ 12 months' },
                                { label: 'Large breeds', sub: '50–90 lbs', age: '12–18 months' },
                                { label: 'Giant breeds', sub: '90+ lbs', age: '18–24 months' },
                            ].map(({ label, sub, age }) => (
                                <div key={label} className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                                    <p className="font-bold text-blue-900 text-xs">{label}</p>
                                    <p className="text-blue-600 text-xs">{sub}</p>
                                    <p className="text-lg font-black text-blue-800 mt-1">{age}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm">Practical indicator: your dog is ready to switch when they have reached approximately <strong>80–90% of their expected adult weight</strong> and the rapid growth phase has visibly slowed.</p>
                    </section>

                    {/* Transition schedule */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Make the Transition (7–10 Days)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-700">
                                        <th className="py-3 px-4 font-bold rounded-tl-xl">Days</th>
                                        <th className="py-3 px-4 font-bold">Puppy Food</th>
                                        <th className="py-3 px-4 font-bold rounded-tr-xl">Adult Food</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { days: '1–2', puppy: '75%', adult: '25%' },
                                        { days: '3–4', puppy: '50%', adult: '50%' },
                                        { days: '5–6', puppy: '25%', adult: '75%' },
                                        { days: '7+', puppy: '0%', adult: '100%' },
                                    ].map(({ days, puppy, adult }, i) => (
                                        <tr key={days} className={i % 2 === 0 ? '' : 'bg-gray-50'}>
                                            <td className="py-3 px-4 font-semibold text-gray-900">{days}</td>
                                            <td className="py-3 px-4 text-blue-700">{puppy}</td>
                                            <td className="py-3 px-4 text-green-700">{adult}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">If your dog shows loose stool or GI upset, slow down — stay at the current ratio for 2–3 extra days before continuing.</p>
                    </section>

                    {/* Feeding frequency */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Feeding Frequency: Puppies vs. Adults</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3 text-sm">🐶 Puppies</h3>
                                <ul className="space-y-2">
                                    {[
                                        { age: '8–12 weeks', freq: '4 meals/day' },
                                        { age: '12–16 weeks', freq: '3 meals/day' },
                                        { age: '4–6 months', freq: '3 meals/day' },
                                        { age: '6 months – 1 year', freq: '2 meals/day' },
                                    ].map(({ age, freq }) => (
                                        <li key={age} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                                            <span className="text-gray-600">{age}</span>
                                            <span className="font-semibold text-gray-900">{freq}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3 text-sm">🐕 Adults</h3>
                                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-sm text-gray-700">
                                    <p className="mb-2"><strong>2 meals per day</strong> (morning and evening) is ideal for most adult dogs.</p>
                                    <p className="mb-2">Once daily is acceptable for some dogs but may contribute to bloat risk in large, deep-chested breeds.</p>
                                    <p className="text-xs text-gray-500">Free feeding (leaving food out all day) is generally not recommended for puppies — it makes housetraining harder and can lead to overeating.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Keep Your Puppy&apos;s Food Safe</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks FDA pet food recalls in real time — so you always know if your puppy&apos;s food is on the recall list.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
