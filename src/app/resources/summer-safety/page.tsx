import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';
import { getAmazonLink } from '../../../lib/affiliate';

export default function SummerSafetyPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <Link href="/resources" className="text-blue-600 font-bold hover:underline mb-6 inline-block text-sm uppercase tracking-wide">
                        &larr; Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        Summer Logic: <br /> Staying Safe in the Heat
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        We love regular summer hikes, but the heat changes everything for our pets.
                        Unlike us, they can't sweat to cool down. Here is how to keep the fun safe.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* The 7 Second Rule */}
                    <section className="bg-orange-50 rounded-3xl p-8 md:p-10 border border-orange-100">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="bg-orange-200 text-orange-900 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wide mb-4 inline-block">Rule #1</span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">The 7-Second Rule</h2>
                                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                    Asphalt gets wildly hot. If it's 85°F outside, the pavement can be 135°F.
                                </p>
                                <p className="font-bold text-gray-900 text-lg">
                                    Place the back of your hand on the ground. If you can't hold it there for 7 seconds, it will burn your dog's paws.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 text-center w-full md:w-auto">
                                <div className="text-6xl mb-2">🔥</div>
                                <div className="text-sm font-bold text-gray-400">Paws burn fast</div>
                            </div>
                        </div>
                    </section>

                    {/* Gear Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Cooling Gear That Actually Works</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
                            If you have a flat-faced breed (like a Pug or Bulldog) or a heavy coat, summer is dangerous.
                            Technology can help. We recommend keeping a cooling mat in the car or living room.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProductCard
                                name="Cooling Vests"
                                desc="You soak these in water, and "
                                subtext="evaporative cooling keeps their core temp down during walks."
                                linkTerm="dog cooling vest"
                                emoji="🦺"
                            />
                            <ProductCard
                                name="Gel Pressure Mats"
                                desc="Pressure-activated gel that stays cold without electricity."
                                subtext="Perfect for post-walk naps."
                                linkTerm="dog cooling mat"
                                emoji="🛌"
                            />
                        </div>
                    </section>
                </div>

                <div className="mt-16">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}

function ProductCard({ name, desc, subtext, linkTerm, emoji }: { name: string, desc: string, subtext: string, linkTerm: string, emoji: string }) {
    return (
        <a
            href={getAmazonLink(linkTerm)}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all text-left block"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{emoji}</div>
                <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600 leading-relaxed mb-1">
                {desc} <strong>{subtext}</strong>
            </p>
        </a>
    )
}
