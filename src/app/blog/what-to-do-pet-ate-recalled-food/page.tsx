import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function PetAteRecalledFoodPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        What to Do If Your Pet Ate Recalled Food: A Step-by-Step Action Guide
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Your stomach drops. You don&apos;t know if your pet is in danger right now. Take a breath. Here&apos;s exactly what to do.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Stay Calm and Assess the Situation</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">Before you do anything else, answer these three questions:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                            <li>Is my pet showing symptoms right now?</li>
                            <li>How long has my pet been eating the recalled food?</li>
                            <li>What is the reason for the recall?</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            These three factors determine how urgently you need to act. A pet that is visibly distressed, vomiting, or lethargic needs veterinary attention immediately. A pet that appears healthy but has been eating recalled food over several weeks needs a vet check but probably not an emergency visit at 2 a.m.
                        </p>
                    </section>

                    <section className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-red-900 mb-4">Step 2: Stop Feeding the Recalled Food Immediately</h2>
                        <p className="text-red-800 leading-relaxed mb-4">
                            This is non-negotiable. Even if your pet seems perfectly fine, stop feeding the recalled product right now. Remove the food from their bowl, seal the bag in a large zip-lock bag or tie it closed, and set it aside.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-red-800">
                                <span className="font-bold flex-shrink-0">⚠️</span>
                                <span><strong>Do not throw it away yet.</strong> You may need it as evidence if your pet becomes ill, or to verify the lot number with your vet or the FDA.</span>
                            </li>
                            <li className="flex gap-3 text-red-800">
                                <span className="font-bold flex-shrink-0">⚠️</span>
                                <span><strong>Do not try to &ldquo;use up&rdquo; the remaining food.</strong> Even if your pet has been eating it for weeks without obvious symptoms, continued exposure compounds the risk.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step 3: Check Your Pet for Symptoms</h2>
                        <p className="text-gray-700 mb-6">The symptoms to watch for depend entirely on what caused the recall.</p>
                        <div className="space-y-4">
                            {[
                                {
                                    cause: 'Salmonella Contamination',
                                    timing: '12–72 hours after ingestion',
                                    symptoms: 'Vomiting, diarrhea (often bloody), lethargy, fever, loss of appetite, abdominal pain. Also transmissible to humans — wash hands thoroughly after handling any recalled food.',
                                    color: 'orange',
                                },
                                {
                                    cause: 'Aflatoxin Contamination',
                                    timing: 'Symptoms may take days or weeks',
                                    symptoms: 'Sluggishness, loss of appetite, vomiting, yellowing of eyes/skin/gums (jaundice), diarrhea, unexplained bruising or bleeding. Seek veterinary attention even if they seem fine.',
                                    color: 'yellow',
                                },
                                {
                                    cause: 'Elevated Vitamin D',
                                    timing: 'Symptoms within days to weeks',
                                    symptoms: 'Excessive thirst and urination, vomiting, drooling, weight loss, loss of appetite, weakness.',
                                    color: 'blue',
                                },
                                {
                                    cause: 'Listeria Contamination',
                                    timing: 'Variable onset',
                                    symptoms: 'Vomiting, diarrhea, fever, muscle stiffness. Particularly dangerous for pregnant women and immunocompromised individuals in your household.',
                                    color: 'purple',
                                },
                                {
                                    cause: 'Pentobarbital Contamination',
                                    timing: 'Rapid onset',
                                    symptoms: 'Extreme sedation, difficulty breathing, loss of coordination, death. THIS IS AN IMMEDIATE EMERGENCY — go to an emergency vet NOW.',
                                    color: 'red',
                                },
                                {
                                    cause: 'Foreign Material (Metal, Plastic)',
                                    timing: 'Variable',
                                    symptoms: 'Reluctance to eat, gagging, bloody stool, abdominal pain, vomiting.',
                                    color: 'gray',
                                },
                            ].map(({ cause, timing, symptoms, color }) => (
                                <div key={cause} className={`border-l-4 ${color === 'red' ? 'border-red-600 bg-red-50' : color === 'orange' ? 'border-orange-400 bg-orange-50' : color === 'yellow' ? 'border-yellow-400 bg-yellow-50' : color === 'blue' ? 'border-blue-400 bg-blue-50' : color === 'purple' ? 'border-purple-400 bg-purple-50' : 'border-gray-400 bg-gray-50'} p-4 rounded-r-xl`}>
                                    <p className="font-bold text-gray-900">{cause} <span className="font-normal text-gray-500 text-sm">({timing})</span></p>
                                    <p className="text-gray-700 mt-1 text-sm leading-relaxed">{symptoms}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Call Your Veterinarian</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">Even if your pet is showing no symptoms, call your vet and tell them:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                            <li>The brand and product name of the recalled food</li>
                            <li>The reason for the recall</li>
                            <li>Approximately how long your pet has been eating the food</li>
                            <li>Your pet&apos;s current symptoms (or lack thereof)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            For contaminations like aflatoxin or elevated Vitamin D — which cause internal damage before visible symptoms appear — your vet may recommend blood work even if your pet seems normal.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Report the Illness to the FDA</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">If your pet becomes ill from recalled food, report it to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                            <li>
                                FDA Safety Reporting Portal:{' '}
                                <a href="https://www.safetyreporting.hhs.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    https://www.safetyreporting.hhs.gov
                                </a>
                            </li>
                            <li>Your state&apos;s FDA Consumer Complaint Coordinator</li>
                        </ul>
                        <p className="text-gray-700">When filing a report, have ready: the recalled product name, brand, and UPC; the lot number and best-by date; where and when you purchased the food; a description of your pet&apos;s symptoms; and your vet&apos;s findings.</p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps 6 & 7: Report to Manufacturer & Return for Refund</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Report your pet&apos;s illness directly to the manufacturer using the contact information listed in the recall notice. Keep all receipts for veterinary care related to the recalled food — you may be entitled to reimbursement.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Most major pet food brands and retailers will accept returns of recalled products with a full refund, usually even without a receipt during an active recall. Bring the recalled food to the retailer where you purchased it, or contact Chewy, Amazon, or the manufacturer directly for online purchases.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transitioning to a New Food After a Recall</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">A gradual transition is recommended when possible:</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { days: 'Days 1–2', ratio: '25% new / 75% old' },
                                { days: 'Days 3–4', ratio: '50% new / 50% old' },
                                { days: 'Days 5–6', ratio: '75% new / 25% old' },
                                { days: 'Day 7+', ratio: '100% new food' },
                            ].map(({ days, ratio }) => (
                                <div key={days} className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                                    <p className="font-bold text-blue-900 text-sm mb-1">{days}</p>
                                    <p className="text-blue-700 text-xs">{ratio}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'If I cooked the recalled food, is it safe?', a: 'No. Cooking may kill some bacteria but does nothing for chemical contamination like aflatoxin, Vitamin D excess, or pentobarbital.' },
                                { q: 'Is it safe to keep feeding the same brand if only specific lot numbers are recalled?', a: "Technically yes — if you can verify your lot number matches a non-recalled batch. When in doubt, switch brands temporarily." },
                                { q: 'My cat handles their food and I\'m worried about Salmonella affecting me?', a: 'Yes — practice careful hand hygiene and consider wearing gloves when handling any food recalled for Salmonella.' },
                            ].map(({ q, a }) => (
                                <div key={q}>
                                    <p className="font-bold text-gray-900 mb-1">Q: {q}</p>
                                    <p className="text-gray-700">{a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Get Recalls Before Your Pet Is Exposed</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            The best time to learn about a recall is before your pet has been eating the affected food. SafePaws Monitor sends real-time alerts the moment the FDA publishes a new pet food recall.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">
                            Sign Up for Free Alerts
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
