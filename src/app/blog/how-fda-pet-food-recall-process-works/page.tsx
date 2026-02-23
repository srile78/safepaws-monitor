import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';

export default function FdaRecallProcessPage() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="mb-12">
                    <Link href="/blog" className="text-gray-500 hover:text-gray-900 font-bold mb-4 inline-block">&larr; Back to Blog</Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        How the FDA Pet Food Recall Process Works: What Happens Behind the Scenes
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        Who initiates recalls, how contamination is detected, and what the FDA does — and doesn&apos;t do — to protect your pet.
                    </p>
                </div>

                <div className="space-y-8">

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-gray-700 leading-relaxed">
                            When a pet food recall makes the news, the announcement itself is usually just one moment in a process that may have been unfolding for weeks or even months. Understanding how the FDA handles pet food recalls gives you a much clearer picture of how the food safety system works and where its limitations lie.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Regulates Pet Food?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Pet food in the United States is primarily regulated by the FDA&apos;s Center for Veterinary Medicine (CVM) under the Federal Food, Drug, and Cosmetic Act (FD&amp;C Act), which prohibits the sale of adulterated or misbranded animal food in interstate commerce.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The Association of American Feed Control Officials (AAFCO) — a non-governmental organization — sets the nutritional standards that the FDA and states reference when evaluating whether a pet food is complete and balanced. AAFCO does not itself inspect or approve pet food; it provides the standard framework.
                        </p>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Are Contamination Problems Discovered?</h2>
                        <p className="text-gray-700 mb-6">The FDA does not routinely inspect or test every product before it goes on the market. So how do problems actually come to light?</p>
                        <div className="space-y-6">
                            {[
                                {
                                    num: 1,
                                    title: 'Consumer and Veterinarian Complaints',
                                    text: "The majority of pet food safety issues are first identified through consumer complaints to the FDA's Safety Reporting Portal. When veterinarians see an unusual cluster of similar symptoms in patients — all eating the same brand — they may report it to the FDA. This means ordinary pet owners and frontline vets are often the first line of detection.",
                                },
                                {
                                    num: 2,
                                    title: 'Manufacturer Testing and Internal Discovery',
                                    text: 'Reputable pet food manufacturers conduct ongoing quality control testing. If a manufacturer detects contamination during internal testing, they are expected to voluntarily notify the FDA and initiate a recall. Many recalls are voluntary recalls initiated by manufacturers who discover the problem themselves.',
                                },
                                {
                                    num: 3,
                                    title: 'FDA Surveillance Testing',
                                    text: 'The FDA conducts targeted surveillance testing of pet foods for contaminants of known concern such as Salmonella, aflatoxin, and melamine. When surveillance testing turns up contamination, it typically triggers a rapid investigation and recall.',
                                },
                                {
                                    num: 4,
                                    title: 'Illness Outbreak Investigations',
                                    text: 'When the FDA receives multiple reports of pet illness associated with a particular product, it may open a formal outbreak investigation, working with the manufacturer, retailers, and distributors to trace the contamination and determine the scope of the problem.',
                                },
                            ].map(({ num, title, text }) => (
                                <div key={num} className="flex gap-4">
                                    <span className="bg-blue-600 text-white font-black rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{num}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                                        <p className="text-gray-700 leading-relaxed text-sm">{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Recalls: Voluntary vs. Mandatory</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                <h3 className="text-lg font-bold text-green-900 mb-3">Voluntary Recalls (the vast majority)</h3>
                                <p className="text-green-800 text-sm leading-relaxed">In most cases, pet food recalls are voluntary — the manufacturer initiates the recall on their own, either because they discovered the contamination themselves or because the FDA notified them of a test result and asked them to recall voluntarily.</p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-900 mb-3">Mandatory Recalls</h3>
                                <p className="text-red-800 text-sm leading-relaxed">The Food Safety Modernization Act (FSMA), signed into law in 2011 largely in response to the 2007 melamine crisis, gave the FDA mandatory recall authority. If a manufacturer refuses to voluntarily recall a dangerous product, the FDA can issue a mandatory recall order, suspend the facility&apos;s food registration, or seize the product.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Recall Classification System</h2>
                        <div className="space-y-3">
                            {[
                                { cls: 'Class I', color: 'red', text: 'Reasonable probability that use of the product will cause serious adverse health consequences or death. Most major pet food contamination events result in Class I recalls.' },
                                { cls: 'Class II', color: 'orange', text: 'Remote probability of adverse health consequences. A product with minor contamination unlikely to cause illness at normal consumption levels.' },
                                { cls: 'Class III', color: 'yellow', text: 'The product violates FDA regulations but is unlikely to cause adverse health consequences — for example, a labeling error.' },
                            ].map(({ cls, color, text }) => (
                                <div key={cls} className={`flex gap-4 p-4 rounded-xl ${color === 'red' ? 'bg-red-50 border border-red-100' : color === 'orange' ? 'bg-orange-50 border border-orange-100' : 'bg-yellow-50 border border-yellow-100'}`}>
                                    <span className={`font-black px-3 py-1 rounded-full text-sm h-fit flex-shrink-0 ${color === 'red' ? 'bg-red-600 text-white' : color === 'orange' ? 'bg-orange-500 text-white' : 'bg-yellow-400 text-gray-900'}`}>{cls}</span>
                                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens During a Recall</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'Notification', text: 'The manufacturer sends recall notices to distributors and retailers. The FDA publishes the recall notice at fda.gov/animal-veterinary/safety-health/recalls-withdrawals.' },
                                { title: 'Product Withdrawal', text: 'Distributors and retailers pull the recalled products from shelves. A large national retailer may take 24–72 hours to remove products from thousands of store locations.' },
                                { title: 'Effectiveness Checks', text: 'The FDA monitors the recall to verify that the product is actually being removed from commerce, including auditing retailer compliance and visiting manufacturing facilities.' },
                                { title: 'Root Cause Analysis', text: 'The manufacturer is expected to conduct a root cause investigation to identify how the contamination occurred and implement corrective actions.' },
                                { title: 'Facility Inspection', text: 'Depending on the severity of the contamination, the FDA may conduct an inspection of the manufacturing facility.' },
                            ].map(({ title, text }, i) => (
                                <div key={title} className="flex gap-3">
                                    <span className="text-blue-600 font-bold w-6 flex-shrink-0">{i + 1}.</span>
                                    <div>
                                        <span className="font-bold text-gray-900">{title}: </span>
                                        <span className="text-gray-700">{text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Limitations of the Current System</h2>
                        <p className="text-gray-700 mb-4">The FDA recall system provides meaningful protections but has significant limitations:</p>
                        <div className="space-y-3">
                            {[
                                "It's largely reactive. By the time a recall is announced, pets have typically already been harmed.",
                                "Testing is not comprehensive. The FDA cannot test every product from every manufacturer.",
                                "Recall compliance is imperfect. Some recalled products remain on shelves for days after a recall announcement.",
                                "Ingredient suppliers are the weak point. Most contamination events originate with an ingredient supplier, not the brand itself.",
                            ].map((text) => (
                                <div key={text} className="flex gap-3">
                                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white p-8 md:p-12 rounded-[2rem] text-center">
                        <h2 className="text-3xl font-bold mb-4">What You Can Do</h2>
                        <div className="text-blue-100 text-left mb-8 max-w-lg mx-auto space-y-2">
                            <p>✓ Sign up for real-time recall alerts so you know the moment the FDA publishes a new notice</p>
                            <p>✓ Register your pet food with the manufacturer when possible</p>
                            <p>✓ Report any pet illness to both your vet and the FDA</p>
                            <p>✓ Get in the habit of checking the lot number on your pet&apos;s food bag</p>
                        </div>
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
