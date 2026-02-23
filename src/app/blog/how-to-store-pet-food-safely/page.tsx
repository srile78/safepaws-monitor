import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function StorePetFoodSafelyPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        How to Store Pet Food Safely: The Complete Guide
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Improper storage can degrade nutritional value, cause spoilage, introduce bacterial contamination — and make it impossible to verify lot numbers if a recall is announced.
                    </p>
                </div>

                <div className="space-y-8">

                    {/* Why it matters */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Pet Food Storage Matters</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { title: '🧪 Nutrient Degradation', text: 'Pet food fats oxidize when exposed to air, heat, and light — going rancid and producing harmful free radicals. Omega-3 fatty acids are particularly vulnerable. Rancid fat is why dogs sometimes suddenly refuse a food they previously loved.' },
                                { title: '🦠 Bacterial & Mold Growth', text: 'Dry kibble is protected by low moisture, but exposed to humidity it can support bacterial and mold growth. Aflatoxin — behind some of the deadliest pet food recalls — is produced by mold.' },
                                { title: '🐭 Pest Contamination', text: 'An unsealed bag is an invitation for insects, rodents, and other pests. Weevils, grain beetles, and mice are common in improperly stored pet food.' },
                                { title: '🔍 Recall Verification', text: 'If you remove kibble from its original bag, you lose the lot number, best-by date, and UPC code. When a recall is announced, you\'ll have no way to verify whether your food is affected.' },
                            ].map(({ title, text }) => (
                                <div key={title} className="bg-gray-50 p-5 rounded-2xl border border-gray-200">
                                    <p className="font-bold text-gray-900 mb-2 text-sm">{title}</p>
                                    <p className="text-gray-700 text-xs leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Dry food */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Storing Dry Dog and Cat Food (Kibble)</h2>

                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl mb-4">
                            <p className="font-bold text-blue-900 text-sm mb-1">Best Practice: Keep the Original Bag</p>
                            <p className="text-blue-800 text-xs leading-relaxed">The original packaging is designed specifically for the food inside — most premium bags use multi-layer technology with oxygen barriers. The bag is also where you&apos;ll find the lot number, best-by date, and manufacturing information. Keep kibble in its original bag, folded or sealed tightly, <em>inside</em> an airtight container.</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">Choosing the Right Container</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                                        <p className="font-bold text-green-900 text-xs mb-2">✅ Look for</p>
                                        <ul className="text-green-800 text-xs space-y-1">
                                            <li>Food-grade plastic or stainless steel (BPA-free)</li>
                                            <li>Airtight seal (flip-top or clamp-style lids)</li>
                                            <li>Opaque — light degrades fats and vitamins</li>
                                            <li>Sized to hold 4–6 weeks of food at most</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                                        <p className="font-bold text-red-900 text-xs mb-2">❌ Avoid</p>
                                        <ul className="text-red-800 text-xs space-y-1">
                                            <li>Cloth or mesh bags</li>
                                            <li>Metal garbage cans (not food-grade)</li>
                                            <li>Very large containers (50+ lb capacity)</li>
                                            <li>Clear containers in sunny locations</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">Temperature &amp; Location</h3>
                                <ul className="space-y-1 text-xs text-gray-700">
                                    {[
                                        'Keep cool and dry. Ideal storage temperature below 80°F.',
                                        'Avoid garages with temperature extremes, near stoves, or in direct sunlight.',
                                        'Avoid humidity — don\'t store near dishwashers, sinks, or damp basements.',
                                        'A pantry or climate-controlled utility room is ideal.',
                                    ].map(t => <li key={t} className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>{t}</li>)}
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">How Long Dry Kibble Stays Fresh</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs text-gray-700">
                                        <p className="font-bold mb-1">Unopened bag</p>
                                        <p>12–18 months from manufacturing date</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs text-gray-700">
                                        <p className="font-bold mb-1">After opening</p>
                                        <p>6 weeks general guideline. High-fat foods may go rancid faster — check manufacturer&apos;s guidance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100">
                                <p className="font-bold text-yellow-900 text-sm mb-1">🥄 The Scoop Hygiene Problem</p>
                                <p className="text-yellow-800 text-xs leading-relaxed">A scoop sitting inside the food bag regularly introduces bacteria from hands and the environment. Some pet owners&apos; scoops have tested positive for Salmonella. Use a dedicated food-grade scoop kept <em>outside</em> the container; wash weekly with hot soapy water; dry completely.</p>
                            </div>
                        </div>
                    </section>

                    {/* Wet food */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Storing Wet / Canned Food</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2 text-sm">Unopened Canned Food</h3>
                                <ul className="text-blue-800 text-xs space-y-1">
                                    <li>Shelf life: 2–5 years from manufacturing date</li>
                                    <li>Store in a cool, dry location</li>
                                    <li>Do not use cans that are dented at seams, bulging, or have damaged lids</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-2 text-sm">Opened Canned Food</h3>
                                <ul className="text-orange-800 text-xs space-y-1">
                                    <li>Refrigerate immediately</li>
                                    <li>Cover the open can or transfer to an airtight container</li>
                                    <li>Use within 3–5 days</li>
                                    <li>Do NOT leave at room temperature — wet food can develop dangerous bacterial levels within 2–4 hours in warm weather</li>
                                    <li>Warm refrigerated food slightly before serving — cats often refuse cold food</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Raw food */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Storing Raw Pet Food</h2>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
                                <h3 className="font-bold text-purple-900 mb-2 text-sm">Commercial Frozen Raw</h3>
                                <ul className="text-purple-800 text-xs space-y-1">
                                    <li>Keep frozen at 0°F or below until ready to use</li>
                                    <li>Thaw in the refrigerator, not at room temperature</li>
                                    <li>Do not refreeze thawed raw food</li>
                                    <li>Use within 3–4 days of thawing</li>
                                    <li>Label containers with the thaw date</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                                <h3 className="font-bold text-red-900 mb-2 text-sm">⚠️ Human Safety</h3>
                                <ul className="text-red-800 text-xs space-y-1">
                                    <li>Raw pet food presents real Salmonella, E. coli, and Listeria risk to humans</li>
                                    <li>Wash hands thoroughly for 20+ seconds after handling</li>
                                    <li>Use dedicated bowls and utensils; wash with hot soapy water and periodically in the dishwasher</li>
                                    <li>Clean all surfaces with a food-safe sanitizer</li>
                                    <li>Extra caution with immunocompromised individuals, pregnant women, or young infants in the household</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Signs of spoilage */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs That Pet Food Has Gone Bad</h2>
                        <div className="space-y-3">
                            {[
                                { type: 'Dry kibble', signs: 'Rancid or musty smell; unusual oiliness; visible mold; insects in the container; pet suddenly refuses food they normally like.' },
                                { type: 'Wet/canned food', signs: 'Off smell (sour, fermented); unusual color; bulging or leaking can — discard without opening.' },
                                { type: 'Raw food', signs: 'Beyond normal raw meat smell — slimy texture, visible discoloration; ice crystals suggesting refreezing.' },
                            ].map(({ type, signs }) => (
                                <div key={type} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0">
                                    <span className="font-bold text-gray-500 flex-shrink-0 w-36 text-sm">{type}</span>
                                    <span className="text-gray-700 text-sm leading-relaxed">{signs}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs mt-4 font-semibold">General rule: When in doubt, throw it out. The cost of a bag of food is trivial compared to a vet bill for GI illness.</p>
                    </section>

                    {/* The one mistake */}
                    <section className="bg-red-50 p-8 rounded-3xl border border-red-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">The One Storage Mistake Almost Everyone Makes</h2>
                        <p className="text-red-800 text-sm leading-relaxed mb-4">
                            <strong>Storing kibble in an open container without the original bag.</strong> Without the original bag, you can&apos;t check the lot number if there&apos;s a recall, you can&apos;t verify the best-by date, and old food residue at the bottom of the container can harbor bacteria.
                        </p>
                        <div className="bg-white p-4 rounded-2xl border border-red-200">
                            <p className="font-bold text-red-900 text-sm mb-1">The Fix</p>
                            <p className="text-red-800 text-xs leading-relaxed">Keep food in the original bag inside the container. Before opening a new bag, empty the container completely, wash it, dry it fully, then add the new bag. <strong>Never pour new food on top of old food.</strong></p>
                        </div>
                    </section>

                    {/* Quick reference */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference: Storage Best Practices</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs text-gray-700">
                                <thead>
                                    <tr className="text-left border-b border-gray-200 text-gray-900 font-bold">
                                        <th className="pb-2 pr-3">Food Type</th>
                                        <th className="pb-2 pr-3">Packaging</th>
                                        <th className="pb-2 pr-3">Temperature</th>
                                        <th className="pb-2">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: 'Dry kibble (unopened)', pkg: 'Original bag', temp: 'Below 80°F, dry', dur: '12–18 months' },
                                        { type: 'Dry kibble (opened)', pkg: 'Original bag in airtight container', temp: 'Below 80°F, dry', dur: '6 weeks' },
                                        { type: 'Unopened canned', pkg: 'Original can, pantry', temp: 'Cool, dry', dur: '2–5 years' },
                                        { type: 'Opened canned', pkg: 'Airtight container', temp: 'Refrigerate', dur: '3–5 days' },
                                        { type: 'Frozen raw', pkg: 'Freezer bag/original', temp: '0°F or below', dur: 'Thaw in fridge; use within 3–4 days' },
                                    ].map(({ type, pkg, temp, dur }, i) => (
                                        <tr key={type} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                                            <td className="py-2 pr-3 font-semibold">{type}</td>
                                            <td className="py-2 pr-3">{pkg}</td>
                                            <td className="py-2 pr-3">{temp}</td>
                                            <td className="py-2">{dur}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Know Before Your Next Scoop</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor sends real-time recall alerts the moment the FDA publishes a new notice — so you know before your next scoop whether your pet&apos;s food is safe.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
