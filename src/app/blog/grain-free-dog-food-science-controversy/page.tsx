import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function GrainFreeDCMPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Grain-Free Dog Food: The Science Behind the Controversy
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Since the FDA&apos;s 2018 announcement investigating a potential link between grain-free diets and dilated cardiomyopathy, dog owners have been left confused. Here&apos;s what the evidence actually shows.
                    </p>
                </div>

                <div className="space-y-8">

                    {/* What is DCM */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Dilated Cardiomyopathy (DCM)?</h2>
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
                            DCM is a heart disease in which the heart muscle weakens and the heart chambers enlarge, reducing the heart&apos;s ability to pump blood effectively. As it progresses, it can lead to congestive heart failure.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            DCM has been well-established in certain dog breeds for decades — Great Danes, Doberman Pinschers, Boxers, Irish Wolfhounds. What caught the FDA&apos;s attention in 2018 was DCM appearing in <strong>non-predisposed breeds</strong>: Golden Retrievers, Labrador Retrievers, Miniature Schnauzers, and others. The common thread: diets that were grain-free and high in legume ingredients like peas, lentils, and chickpeas.
                        </p>
                    </section>

                    {/* FDA investigation */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The FDA Investigation: What They Found and What They Didn&apos;t</h2>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            Between January 2014 and April 2019, the FDA received 524 reports of DCM in dogs, and the majority were reportedly eating grain-free diets. The FDA named 16 brands associated with most reported cases, including premium names: Acana, Orijen, Merrick, Blue Buffalo, Fromm, Taste of the Wild, and others.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-2xl">
                            <p className="font-bold text-yellow-900 text-sm mb-2">Critical distinction: Association ≠ Causation</p>
                            <p className="text-yellow-800 text-xs leading-relaxed">
                                In July 2020, the FDA updated its investigation: <em>&quot;To date, the FDA has not identified a definitive link between DCM and any specific diet or ingredient.&quot;</em> No regulatory action has been taken. No recalls have been issued based on DCM risk.
                            </p>
                        </div>
                    </section>

                    {/* Taurine hypothesis */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Taurine Hypothesis</h2>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            The leading nutritional hypothesis involves <strong>taurine</strong> — an amino acid critical for heart muscle function. Most dogs can synthesize taurine from other amino acids, but research suggests some dogs may have reduced synthesis ability, and grain-free diets high in legumes may reduce taurine availability.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                                <p className="font-bold text-green-900 text-sm mb-2">Supporting Evidence</p>
                                <p className="text-green-800 text-xs leading-relaxed">Taurine supplementation has <strong>reversed DCM in some affected dogs</strong>. Several case reports document improvement when affected dogs were switched off grain-free diets and/or supplemented with taurine — particularly Golden Retrievers.</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                                <p className="font-bold text-orange-900 text-sm mb-2">Important Caveat</p>
                                <p className="text-orange-800 text-xs leading-relaxed">The <strong>vast majority</strong> of dogs eating grain-free diets have normal cardiac function. This suggests individual susceptibility — genetic factors, microbiome composition, and other variables — plays a major role.</p>
                            </div>
                        </div>
                    </section>

                    {/* Counterarguments */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Isn&apos;t Settled: The Counterarguments</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'DCM Is Underdiagnosed',
                                    text: 'DCM diagnosis requires an echocardiogram — an expensive test most dogs never receive. The apparent increase in DCM cases may partly reflect increased cardiac screening following the FDA announcement, not an actual increase in disease.',
                                },
                                {
                                    title: 'Breed-Specific Genetics Are a Confound',
                                    text: 'Golden Retrievers appear in DCM case reports at a very high rate. But Goldens also disproportionately eat grain-free diets because their owners tend to be highly engaged in pet health. Teasing apart diet effects from breed-specific genetic predisposition is statistically challenging.',
                                },
                                {
                                    title: '"Grain-Free" ≠ "High Legume"',
                                    text: 'Grain-free describes what a food doesn\'t contain. A grain-free food could be high in legumes OR could use potato, sweet potato, or tapioca. The concern appears to relate more specifically to high-legume content than to the simple absence of grains.',
                                },
                                {
                                    title: 'The Research Is Not Definitive',
                                    text: 'A UC Davis study (JVIM, 2019) found Golden Retrievers eating grain-free diets had lower taurine concentrations — but cardiac function was similar between groups. The National Academies of Sciences reviewed the evidence in 2023 and concluded a causal link is not established, but recommended continued surveillance.',
                                },
                            ].map(({ title, text }) => (
                                <div key={title} className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded-r-xl">
                                    <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                                    <p className="text-gray-700 text-xs leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Grains are not bad */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Grains Actually Provide in Dog Food</h2>
                        <div className="space-y-3">
                            {[
                                { claim: '"Grains are fillers"', reality: 'Whole grains like brown rice, oats, and barley are genuinely nutritious — providing fiber, B vitamins, minerals, and fermentable carbohydrates for gut health. Highly processed grain derivatives are less nutritious, but the quality of the grain source matters.' },
                                { claim: '"Dogs evolved to avoid grains"', reality: 'Dogs diverged from wolves approximately 15,000–40,000 years ago and co-evolved with humans — including adapting to human diets that contained grains. Dogs have more copies of the amylase gene (which digests starch) than wolves — a direct evolutionary adaptation.' },
                                { claim: '"Grains cause allergies"', reality: 'The most common food allergens in dogs are animal proteins (beef, chicken, dairy) — not grains. Grain allergies do occur but are less common than people believe.' },
                            ].map(({ claim, reality }) => (
                                <div key={claim} className="grid md:grid-cols-2 gap-3 border-b border-gray-100 pb-3 last:border-0">
                                    <div className="bg-red-50 p-3 rounded-xl border border-red-100 text-xs text-red-800"><strong>Claim:</strong> {claim}</div>
                                    <div className="bg-green-50 p-3 rounded-xl border border-green-100 text-xs text-green-800"><strong>Reality:</strong> {reality}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Practical guide */}
                    <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Where Does This Leave Us? A Practical Guide</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    scenario: 'Your dog is currently eating grain-free and is healthy',
                                    guidance: [
                                        'If legumes (peas, lentils, chickpeas) are not in the top 5 ingredients, the concern is lower.',
                                        'If legumes are among the top 5 ingredients, the concern is more applicable.',
                                        'Dogs in predisposed breeds (Goldens, Cockers, Dobermans) may benefit from cardiac auscultation at their annual vet visit after 5+ years on a high-legume grain-free diet.',
                                    ],
                                },
                                {
                                    scenario: 'Your dog is a predisposed breed',
                                    guidance: [
                                        'Consider a food where legumes are not among the top ingredients.',
                                        'Or choose a grain-inclusive food with a named grain source (brown rice, oats, barley).',
                                        'Discuss with your vet or a veterinary cardiologist.',
                                    ],
                                },
                                {
                                    scenario: 'Your dog has been diagnosed with DCM',
                                    guidance: [
                                        'Consult a veterinary cardiologist.',
                                        'Most common recommendation: switch to a grain-inclusive diet from a company with a DACVN on staff and a feeding trial statement.',
                                    ],
                                },
                                {
                                    scenario: 'You switched to grain-free to avoid grain allergies',
                                    guidance: [
                                        'True grain allergy is uncommon. If your dog hasn\'t been tested via elimination diet, you may not have a grain allergy issue.',
                                        'Consider a limited-ingredient diet with novel protein and a grain source as an alternative.',
                                    ],
                                },
                            ].map(({ scenario, guidance }) => (
                                <div key={scenario} className="bg-white p-5 rounded-2xl border border-blue-200">
                                    <p className="font-bold text-blue-900 text-sm mb-2">If: {scenario}</p>
                                    <ul className="space-y-1">
                                        {guidance.map(g => (
                                            <li key={g} className="text-blue-800 text-xs flex gap-2"><span className="flex-shrink-0">▸</span>{g}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom line */}
                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
                            Grain-free dog food is <strong>not proven dangerous</strong>, and it&apos;s <strong>not proven safe</strong> relative to grain-inclusive alternatives in the context of DCM. The research is genuinely inconclusive.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
                            What is clearer: diets where peas, lentils, or chickpeas appear as the primary carbohydrate sources — particularly in predisposed breeds — may carry some cardiac risk. This is a reason for caution, not panic.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            The decision to feed grain-free should not be driven by marketing claims that grains are inherently bad. Whole grains in quality dog food are nutritious. For most dogs, a well-formulated grain-inclusive food is a safe and nutritious choice.
                        </p>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Informed on Pet Food Safety</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            SafePaws Monitor tracks all FDA recall notices in real time, including any future developments in the DCM investigation.
                        </p>
                        <Link href="/#signup" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition">Get Free Recall Alerts</Link>
                    </section>

                    <div className="mt-8"><LegalDisclaimer /></div>
                </div>
            </div>
        </div>
    );
}
