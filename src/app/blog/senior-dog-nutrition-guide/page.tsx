import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function SeniorDogNutritionPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Senior Dog Nutrition: What Changes as Your Dog Ages
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        The food that was perfect for your active 3-year-old may no longer be ideal for your 9-year-old. Here&apos;s what actually changes — and what doesn&apos;t.
                    </p>
                </div>

                <div className="space-y-8">

                    {/* When is a dog senior */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">When Is a Dog &quot;Senior&quot;?</h2>
                        <p className="text-gray-600 text-sm mb-4">Giant breeds age faster due to the physiological stress their size places on joints, cardiovascular systems, and metabolic processes. A 7-year-old Great Dane is roughly equivalent in biological age to a 12-year-old Beagle.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Small breeds', sub: 'Under 20 lbs', age: '≈ 10–12 yrs' },
                                { label: 'Medium breeds', sub: '20–50 lbs', age: '≈ 8–10 yrs' },
                                { label: 'Large breeds', sub: '50–90 lbs', age: '≈ 7–8 yrs' },
                                { label: 'Giant breeds', sub: '90+ lbs', age: '≈ 5–7 yrs' },
                            ].map(({ label, sub, age }) => (
                                <div key={label} className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-center">
                                    <p className="font-bold text-amber-900 text-sm">{label}</p>
                                    <p className="text-amber-700 text-xs">{sub}</p>
                                    <p className="text-2xl font-black text-amber-800 mt-2">{age}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Protein */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Protein: More Important, Not Less</h2>
                        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl mb-4">
                            <p className="text-red-800 text-sm font-semibold">⚠️ Persistent Myth: Senior dogs need less protein to protect their kidneys. This is wrong — and potentially harmful.</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                            As dogs age, they experience <strong>sarcopenia</strong> — the gradual loss of muscle mass. Senior dogs are less efficient at using dietary protein than young adults, meaning they need <em>at least as much</em> to maintain lean muscle.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            Protein restriction is only appropriate in dogs with <strong>confirmed kidney disease</strong> as determined by your veterinarian. For healthy senior dogs, high-quality protein should remain a dietary priority. Look for named animal proteins with a minimum 25–30% protein on a dry matter basis.
                        </p>
                    </section>

                    {/* Nutrients overview */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Nutritional Needs Change with Age</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    icon: '🔥',
                                    title: 'Calories — Adjust for Activity Level',
                                    text: 'Most senior dogs become less active and have a lower metabolic rate. Adjust based on your dog\'s body condition score, not their age alone. Goal: feel (but not easily see) the ribs; visible waist from above; abdomen tucked when viewed from the side.',
                                    color: 'orange',
                                },
                                {
                                    icon: '🐟',
                                    title: 'Fat & Omega-3s — Anti-Inflammatory Priority',
                                    text: 'Omega-3 fatty acids (EPA and DHA from fish oil) become especially important for senior dogs. Inflammation underlies most age-related diseases — arthritis, cognitive decline, cardiovascular disease. Typical dose: 20–55 mg EPA+DHA per kg body weight per day.',
                                    color: 'blue',
                                },
                                {
                                    icon: '🦴',
                                    title: 'Joint Health Nutrients',
                                    text: 'Osteoarthritis affects an estimated 80% of dogs over age 8. Glucosamine and chondroitin amounts in commercial food are typically below therapeutic levels — supplementation is often warranted for diagnosed arthritis. Omega-3s have demonstrated clinical efficacy for joint pain.',
                                    color: 'green',
                                },
                                {
                                    icon: '🌾',
                                    title: 'Fiber — Gut Health & Weight Management',
                                    text: 'Gut motility slows with age, making constipation more common. Look for foods with moderate fiber from quality sources: beet pulp, psyllium, sweet potato, or chicory root.',
                                    color: 'yellow',
                                },
                                {
                                    icon: '🧠',
                                    title: 'Antioxidants — Brain and Immune Support',
                                    text: 'Aging is associated with increased oxidative stress. Vitamin E, Vitamin C, beta-carotene, and selenium can help. There is evidence that antioxidant-enriched diets can slow cognitive decline in older dogs.',
                                    color: 'purple',
                                },
                            ].map(({ icon, title, text, color }) => {
                                const bg = color === 'orange' ? 'bg-orange-50 border-orange-100' : color === 'blue' ? 'bg-blue-50 border-blue-100' : color === 'green' ? 'bg-green-50 border-green-100' : color === 'yellow' ? 'bg-yellow-50 border-yellow-100' : 'bg-purple-50 border-purple-100';
                                return (
                                    <div key={title} className={`p-5 rounded-2xl border ${bg}`}>
                                        <p className="font-bold text-gray-900 mb-1">{icon} {title}</p>
                                        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Senior food question */}
                    <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-amber-900 mb-4">Do Senior Dogs Need &quot;Senior Food&quot;?</h2>
                        <p className="text-amber-800 leading-relaxed mb-4 text-sm">
                            <strong>The honest answer: it depends.</strong> Unlike AAFCO&apos;s puppy or adult maintenance categories, there is <strong>no AAFCO &quot;senior&quot; nutritional standard</strong>. &quot;Senior formula&quot; is entirely at the manufacturer&apos;s discretion — some are essentially the same as adult maintenance formulas with a different label.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-amber-200">
                                <p className="font-bold text-green-800 text-sm mb-2">✅ When a senior formula might help</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>Your dog has become less active and is gaining weight</li>
                                    <li>You want a food that includes joint-support nutrients</li>
                                    <li>Your dog does well on the formula&apos;s protein and fat levels</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-2xl border border-amber-200">
                                <p className="font-bold text-red-800 text-sm mb-2">❌ When a senior formula might not be appropriate</p>
                                <ul className="text-gray-700 text-xs space-y-1">
                                    <li>The formula has lower protein than your dog needs to maintain muscle</li>
                                    <li>Your dog has a specific health condition requiring a veterinary therapeutic diet</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-amber-700 text-xs mt-4 font-semibold">Best approach: discuss at your dog&apos;s senior wellness exam — annually from senior age, twice yearly after age 10.</p>
                    </section>

                    {/* Condition-specific */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Age-Related Conditions & Dietary Support</h2>
                        <div className="space-y-3">
                            {[
                                { condition: 'Arthritis', support: 'High omega-3 diet or fish oil supplementation; maintain ideal body weight; glucosamine/chondroitin supplementation.' },
                                { condition: 'Cognitive Dysfunction', support: 'Diets enriched with antioxidants and omega-3s; MCT supplementation; Hill\'s b/d has the most clinical research.' },
                                { condition: 'Obesity', support: 'Reduce portion size; increase fiber; consider weight management formula; increase activity within joint-appropriate limits.' },
                                { condition: 'Kidney Disease (Early)', support: 'Transition to a phosphorus-reduced diet; ensure adequate hydration; add wet food or water to dry food.' },
                                { condition: 'Dental Disease', support: 'Regular professional dental cleanings are the most effective intervention. Look for the VOHC seal on dental products.' },
                                { condition: 'Diabetes', support: 'Consistent meal schedule and portion control; high-fiber, lower-glycemic diets; weight management is critical.' },
                            ].map(({ condition, support }) => (
                                <div key={condition} className="flex gap-3 text-gray-700 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                    <span className="font-bold text-gray-500 flex-shrink-0 w-44 text-sm pt-0.5">{condition}</span>
                                    <span className="text-sm leading-relaxed">{support}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Feeding tips */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Feeding Tips for Senior Dogs</h2>
                        <ul className="space-y-3">
                            {[
                                { tip: 'Feed smaller, more frequent meals.', detail: 'Two or three smaller meals per day may be easier on the digestive system.' },
                                { tip: 'Warm the food slightly.', detail: 'Senior dogs often become pickier eaters due to reduced sense of smell. Warming food increases aroma and palatability.' },
                                { tip: 'Monitor weight monthly.', detail: 'Weigh your senior dog monthly. Early weight changes are easy to address; advanced obesity or muscle wasting is much harder to reverse.' },
                                { tip: 'Ensure adequate hydration.', detail: 'Adding water to dry food, offering wet food, or using a pet water fountain can encourage intake.' },
                                { tip: 'Schedule regular bloodwork.', detail: 'Annual (or twice-annual for dogs over 10) CBC and chemistry panel enables early detection of kidney disease, liver issues, diabetes, and thyroid problems.' },
                            ].map(({ tip, detail }) => (
                                <li key={tip} className="flex gap-3 text-gray-700 text-sm">
                                    <span className="text-amber-500 flex-shrink-0 mt-0.5 font-bold">▸</span>
                                    <span><strong>{tip}</strong> {detail}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Protect Your Senior Dog</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks FDA pet food recalls in real time. Set up free instant recall alerts so you always know whether your senior dog&apos;s food is on the recall list.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
