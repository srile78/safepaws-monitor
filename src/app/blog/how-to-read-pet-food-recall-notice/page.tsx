import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function HowToReadRecallNoticePage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        How to Read a Pet Food Recall Notice: A Complete Guide for Pet Owners
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Learn what every section of a recall notice means so you can act quickly — without spending 20 minutes Googling terminology.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-10">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When a pet food recall notice lands in your inbox or shows up in the news, the first reaction for most pet owners is panic. Is my pet&apos;s food on the list? Is my dog or cat already sick? What do I do right now?
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The good news is that once you understand how to read a recall notice, the process becomes much less stressful. Recall notices follow a predictable format, and knowing what each section means can help you act quickly and confidently.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This guide walks you through every component of a pet food recall notice, what it means for you and your pet, and the exact steps to take after you read one.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Pet Food Recall Notice?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A pet food recall is an action taken to remove a product from the market because it may be harmful, mislabeled, or otherwise not in compliance with FDA regulations. Recalls can be initiated voluntarily by the manufacturer or mandated by the FDA.
                        </p>
                        <p className="text-gray-700 font-semibold mb-3">There are three types of recalls, ranked by severity:</p>
                        <ul className="space-y-3">
                            <li className="flex gap-3">
                                <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm h-fit whitespace-nowrap">Class I</span>
                                <span className="text-gray-700">The most serious. Reasonable probability that consuming the product will cause serious adverse health consequences or death.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm h-fit whitespace-nowrap">Class II</span>
                                <span className="text-gray-700">There is a remote probability of adverse health consequences, but it is still considered a health hazard.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm h-fit whitespace-nowrap">Class III</span>
                                <span className="text-gray-700">Unlikely to cause adverse health consequences, but the product violates FDA regulations (e.g., labeling errors, minor contamination).</span>
                            </li>
                        </ul>
                        <p className="text-gray-600 mt-4 text-sm italic">Most pet food recalls that make major news are Class I. Class III recalls are common and often go largely unnoticed by the public.</p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Anatomy of a Pet Food Recall Notice</h2>
                        <p className="text-gray-700 mb-6">Every official recall notice published by the FDA or a manufacturer contains the same core sections. Here&apos;s what each one means.</p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Recall Initiation Date</h3>
                                <p className="text-gray-700 leading-relaxed">This is the date the recall was officially announced. Pay close attention to this. If your pet ate the food weeks before this date and showed no symptoms, they&apos;re likely fine. If they&apos;ve been eating the food recently, it&apos;s worth monitoring them closely.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Reason for Recall</h3>
                                <p className="text-gray-700 leading-relaxed mb-3">This is arguably the most important line in the entire notice. Common reasons include:</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li><strong>Salmonella contamination</strong> — A bacterial pathogen that can cause serious illness in both pets and humans who handle the food.</li>
                                    <li><strong>Elevated Vitamin D levels</strong> — Too much Vitamin D can cause kidney failure in dogs and cats.</li>
                                    <li><strong>Aflatoxin contamination</strong> — A mold-produced toxin that can cause severe liver damage. Often found in corn, grain, or peanut-based ingredients.</li>
                                    <li><strong>Listeria monocytogenes</strong> — A bacteria that can cause illness in pets and be transmitted to people, particularly those who are immunocompromised.</li>
                                    <li><strong>Pentobarbital contamination</strong> — A euthanasia drug that has occasionally been found in pet food.</li>
                                    <li><strong>Foreign material</strong> — Metal fragments, plastic, or other physical contaminants.</li>
                                    <li><strong>Labeling errors</strong> — The product contains an ingredient not listed on the label.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Product Information</h3>
                                <p className="text-gray-700 leading-relaxed mb-2">This section tells you exactly which products are affected:</p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Brand name — The consumer-facing name on the packaging</li>
                                    <li>Product name — The specific product line</li>
                                    <li>Product size(s) — Not all sizes are always recalled</li>
                                    <li>UPC codes — The most reliable way to verify if your specific bag is included</li>
                                    <li>Lot numbers / Best-by dates — Recalls are almost always limited to specific production runs</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">4. Lot Numbers and Best-By Dates</h3>
                                <p className="text-blue-800 leading-relaxed mb-3">This is where many pet owners get confused. <strong>Just because your food brand is mentioned doesn&apos;t mean your specific bag is recalled.</strong> Recalls are tied to specific production batches identified by lot numbers and best-by dates.</p>
                                <p className="text-blue-800 leading-relaxed">To find this information on your bag: look for a stamped or printed code on the bottom of the bag, the back panel, or the side seam. It may say &ldquo;Best By,&rdquo; &ldquo;BB,&rdquo; &ldquo;Use By,&rdquo; or &ldquo;Lot #&rdquo;. Compare these numbers exactly to what is listed in the recall notice.</p>
                                <p className="text-blue-900 font-bold mt-3">If your lot number and best-by date are not listed, your food is not part of the recall — even if the brand and product name match.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">5. Distribution</h3>
                                <p className="text-gray-700 leading-relaxed">This section tells you which states, regions, or countries the affected product was distributed to. With national retailers and online pet food sales, distribution is increasingly nationwide, so don&apos;t assume you&apos;re safe based on geography alone.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">6. What Consumers Should Do</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li><strong>Stop feeding immediately</strong> — Throw away or return the product</li>
                                    <li><strong>Return for refund</strong> — Most recalls include instructions to return the product to the place of purchase for a full refund</li>
                                    <li><strong>Contact the manufacturer</strong> — A phone number or website is usually provided</li>
                                    <li><strong>Monitor your pet for symptoms</strong> — The notice will often list symptoms to watch for</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">7. Contact Information</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    The notice will include contact information for both the manufacturer and the FDA. If your pet becomes ill after consuming a recalled product, contact your veterinarian immediately, report the illness to the manufacturer, and report the illness to the FDA through their Safety Reporting Portal at{' '}
                                    <a href="https://www.safetyreporting.hhs.gov" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.safetyreporting.hhs.gov</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: What to Do Right Now</h2>
                        <ol className="space-y-4">
                            {[
                                { step: 1, text: "Find your bag. Don't rely on memory. Go get the physical bag or container." },
                                { step: 2, text: "Locate the lot number and best-by date. Check the bottom, side seam, or back panel of the bag." },
                                { step: 3, text: "Compare to the recall notice. Match the UPC, lot number, and best-by date exactly. If they don't match, you're likely in the clear." },
                                { step: 4, text: "If your food IS on the list, stop feeding it immediately. Seal it in a plastic bag to prevent contamination and store it away from other food." },
                                { step: 5, text: "Check your pet. Look for any symptoms associated with the recall reason. When in doubt, call your vet." },
                                { step: 6, text: "Return for a refund. Most major retailers will accept recalled pet food returns with or without a receipt during an active recall." },
                                { step: 7, text: "Report any illness. Contact your vet and the FDA." },
                            ].map(({ step, text }) => (
                                <li key={step} className="flex gap-4">
                                    <span className="bg-blue-600 text-white font-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{step}</span>
                                    <span className="text-gray-700 leading-relaxed pt-0.5">{text}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Myths About Pet Food Recalls</h2>
                        <div className="space-y-4">
                            {[
                                { myth: '"If my pet ate the food and seems fine, there\'s nothing to worry about."', fact: "Not always true. Some contaminations cause gradual damage that may not show obvious symptoms for weeks." },
                                { myth: '"Premium brands never get recalled."', fact: "False. Some of the most expensive and well-regarded brands have issued recalls. Price and marketing don't guarantee safety." },
                                { myth: '"If my food was recalled once, the brand can\'t be trusted."', fact: "Recalls can happen due to supplier issues. What matters is how quickly and transparently the company responds." },
                                { myth: '"Recalls only affect dry food."', fact: "Wet food, raw food, freeze-dried food, and treats are all subject to recalls. No format is immune." },
                            ].map(({ myth, fact }) => (
                                <div key={myth} className="border-l-4 border-red-400 pl-4">
                                    <p className="font-bold text-red-700 mb-1">Myth: {myth}</p>
                                    <p className="text-gray-700">{fact}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Ahead of Recalls</h2>
                        <p className="text-blue-100 text-lg leading-relaxed mb-6">
                            Reading a pet food recall notice doesn&apos;t have to be stressful. The most important habit you can build is checking lot numbers before panicking.
                        </p>
                        <p className="text-blue-200 mb-6">SafePaws Monitor tracks FDA recall alerts in real time. Set up a free alert to be notified the moment a new recall is announced.</p>
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
