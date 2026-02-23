import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function TransitionPetFoodPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        How to Transition Your Pet to a New Food Safely
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Switch too quickly and you&apos;ll have a vomiting dog or a cat with diarrhea. Here&apos;s how to do it right — including emergency recall transitions.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Do Pets Need a Gradual Food Transition?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your pet&apos;s digestive system houses billions of bacteria — the gut microbiome — that are tuned specifically to the food they regularly eat. The enzymes produced in the stomach and intestines, the balance of gut bacteria, and the rate at which food moves through the digestive tract all adapt to the current diet over time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">When you suddenly change the food, the gut microbiome is disrupted, digestive enzymes are not yet optimized for the new food&apos;s protein and fat profile, and intestinal transit time may shift. The result: loose stool, diarrhea, gas, vomiting, or a pet that simply refuses the new food.</p>
                        <p className="text-gray-700 leading-relaxed">A gradual transition gives the digestive system time to adapt and your pet time to accept the new food&apos;s taste and smell.</p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Standard 7-Day Transition Schedule</h2>
                        <p className="text-gray-700 mb-4">For most healthy adult dogs and cats. Mix thoroughly — some pets will pick out and eat only the familiar food, defeating the purpose.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="py-3 px-4 text-left font-bold rounded-tl-xl">Day</th>
                                        <th className="py-3 px-4 text-center font-bold">Old Food</th>
                                        <th className="py-3 px-4 text-center font-bold rounded-tr-xl">New Food</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { day: 'Days 1–2', old: '75%', new: '25%' },
                                        { day: 'Days 3–4', old: '50%', new: '50%' },
                                        { day: 'Days 5–6', old: '25%', new: '75%' },
                                        { day: 'Day 7+', old: '0%', new: '100%' },
                                    ].map(({ day, old: o, new: n }, i) => (
                                        <tr key={day} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="py-3 px-4 font-semibold text-gray-800">{day}</td>
                                            <td className="py-3 px-4 text-center text-orange-700 font-bold">{o}</td>
                                            <td className="py-3 px-4 text-center text-green-700 font-bold">{n}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">When to Slow Down the Transition</h2>
                        <ul className="space-y-3">
                            {[
                                { icon: '⚠️', text: 'Loose stool or diarrhea: Back up one step and hold that ratio for 2–3 extra days before moving forward.' },
                                { icon: '🤢', text: 'Vomiting: Stop the transition temporarily. Feed only the old food for 24–48 hours, then restart more slowly.' },
                                { icon: '🙅', text: 'Complete food refusal: Try a 10–14 day transition instead, moving in smaller increments.' },
                            ].map(({ icon, text }) => (
                                <li key={text} className="flex gap-3 text-blue-800">
                                    <span className="flex-shrink-0">{icon}</span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Extended 14-Day Schedule: For Sensitive Pets & Cats</h2>
                        <p className="text-gray-700 mb-4">For pets with sensitive stomachs, a history of GI issues, or for cats (who are naturally more cautious about new foods):</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-gray-100 text-gray-700">
                                        <th className="py-3 px-4 text-left font-bold rounded-tl-xl">Days</th>
                                        <th className="py-3 px-4 text-center font-bold">Old Food</th>
                                        <th className="py-3 px-4 text-center font-bold rounded-tr-xl">New Food</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { day: 'Days 1–3', old: '90%', new: '10%' },
                                        { day: 'Days 4–6', old: '75%', new: '25%' },
                                        { day: 'Days 7–9', old: '50%', new: '50%' },
                                        { day: 'Days 10–12', old: '25%', new: '75%' },
                                        { day: 'Days 13–14', old: '10%', new: '90%' },
                                        { day: 'Day 15+', old: '0%', new: '100%' },
                                    ].map(({ day, old: o, new: n }, i) => (
                                        <tr key={day} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="py-3 px-4 font-semibold text-gray-800">{day}</td>
                                            <td className="py-3 px-4 text-center text-orange-700 font-bold">{o}</td>
                                            <td className="py-3 px-4 text-center text-green-700 font-bold">{n}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">Special Situation: Transitioning Due to a Recall</h2>
                        <p className="text-red-800 leading-relaxed mb-3">
                            If the contamination is serious (Salmonella, aflatoxin, Vitamin D), <strong>don&apos;t continue feeding the recalled food even for a gradual transition</strong>. Stop immediately.
                        </p>
                        <p className="text-red-800 leading-relaxed">
                            Use plain cooked chicken and white rice as a bland bridge diet for 3–5 days while you find a replacement, then gradually introduce the new permanent food over 7–14 days.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Special Situations</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Dry to Wet (or Vice Versa)',
                                    text: 'Dry to wet: Mix a small amount of wet into dry kibble — most pets find wet food more palatable and transition faster. Wet to dry: Try adding warm water to dry food to soften it and increase its aroma.',
                                },
                                {
                                    title: 'Puppy or Kitten',
                                    text: 'Use a 10–14 day schedule. Watch closely for soft stool (common, usually resolves in a few days). For large-breed puppies, ensure you\'re transitioning to appropriate large-breed food.',
                                },
                                {
                                    title: 'Senior Pet',
                                    text: 'Use the 14-day schedule. Senior pets may have digestive systems that are less adaptable. Those with health conditions — kidney disease, diabetes, IBD — should have any diet change supervised by a veterinarian.',
                                },
                                {
                                    title: 'Introducing Raw Food',
                                    text: 'Use the extended 14-day schedule at minimum, feeding raw and kibble at separate meals rather than mixing them. Consult your vet about Salmonella and Listeria risks, especially if there are immunocompromised people in your home.',
                                },
                            ].map(({ title, text }) => (
                                <div key={title} className="border-l-4 border-gray-300 pl-4">
                                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting a Picky Eater to Accept New Food</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-900 mb-3">🐕 For Dogs</h3>
                                <ul className="text-orange-800 text-sm space-y-2">
                                    <li>Add a small amount of low-sodium chicken broth</li>
                                    <li>Warm the food slightly to enhance the smell</li>
                                    <li>Try hand-feeding a few pieces as treats before mealtime</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
                                <h3 className="font-bold text-purple-900 mb-3">🐈 For Cats</h3>
                                <ul className="text-purple-800 text-sm space-y-2">
                                    <li>Try different textures (pâté, shredded, chunks in gravy)</li>
                                    <li>Warm wet food to just below body temperature</li>
                                    <li>Sprinkle tuna juice or freeze-dried treats on top</li>
                                    <li>Try different protein sources</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 bg-red-50 p-4 rounded-2xl border border-red-100">
                            <p className="text-red-800 text-sm font-semibold">⚠️ Never starve a cat into eating new food. Cats who go more than 24–48 hours without eating are at risk for hepatic lipidosis (fatty liver disease). If a cat refuses to eat for more than 24–36 hours, revert to the previous food and consult your vet.</p>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect During a Normal Transition</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                                <h3 className="font-bold text-green-900 mb-2 text-sm">✓ Normal</h3>
                                <ul className="text-green-800 text-sm space-y-1">
                                    <li>Slightly looser stool for the first few days</li>
                                    <li>Increased gas</li>
                                    <li>Changes in stool color</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                                <h3 className="font-bold text-red-900 mb-2 text-sm">✗ Call Your Vet</h3>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>Vomiting more than once</li>
                                    <li>Bloody diarrhea</li>
                                    <li>Food refusal &gt;24 hrs (cats) or &gt;48 hrs (dogs)</li>
                                    <li>Signs of abdominal pain or lethargy</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Next Recall</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor helps you stay ahead of pet food recalls so you&apos;re never caught making an emergency transition unprepared.
                        </p>
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
