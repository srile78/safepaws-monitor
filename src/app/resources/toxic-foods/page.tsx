import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';
import { AFFILIATE_TAG } from '../../../lib/affiliate';

export default function ToxicFoodsPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header Section */}
                <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <Link href="/resources" className="text-blue-600 font-bold hover:underline mb-6 inline-block text-sm uppercase tracking-wide">
                        &larr; Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        The "No-Go" List: <br /> Foods Your Pet Can't Eat
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        We've all been there: those puppy dog eyes begging for a piece of your dinner.
                        But sharing isn't always caring. Some everyday human foods are surprisingly dangerous for our four-legged friends.
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">

                    {/* The Big 4 */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚫 The "Never, Ever" List</h2>
                        <div className="bg-red-50/90 backdrop-blur-sm rounded-3xl p-8 border border-red-100">
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                These are the big ones. If your pet eats any of these, don't wait to see what happens—call your vet immediately.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FoodCard
                                    icon="🍫"
                                    name="Chocolate"
                                    detail="It's not just the caffeine. Theobromine is the real killer here. Dark chocolate and baking chocolate are the most dangerous. Signs include racing heart and seizures."
                                />
                                <FoodCard
                                    icon="🍬"
                                    name="Xylitol"
                                    detail="Found in sugar-free gum and some peanut butters. It causes a massive insulin spike that can be fatal in minutes. Always check your peanut butter label!"
                                />
                                <FoodCard
                                    icon="🍇"
                                    name="Grapes & Raisins"
                                    detail="Scientists still don't know exactly why, but even a single grape can cause sudden kidney failure in some dogs. It's just not worth the risk."
                                />
                                <FoodCard
                                    icon="🧅"
                                    name="Onions & Garlic"
                                    detail="Whether raw, cooked, or powdered, these damage red blood cells. Cats are especially sensitive, but dogs aren't immune either."
                                />
                            </div>
                        </div>
                    </section>

                    {/* Surprising Items */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">😲 Surprising Hazards</h2>
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <ul className="space-y-6">
                                <ListItem
                                    title="Macadamia Nuts"
                                    text="They cause weakness, overheating, and vomiting in dogs. Scientists aren't sure why, but the effects are scary."
                                />
                                <ListItem
                                    title="Avocado"
                                    text="The flesh is mostly okay for dogs (though fatty), but the pit is a huge choking hazard, and the skin contains persin, which is deadly to birds and rabbits."
                                />
                                <ListItem
                                    title="Bread Dough"
                                    text="Raw yeast dough expands in the stomach (painful!) and creates alcohol as it ferments, leading to alcohol poisoning."
                                />
                            </ul>
                        </div>
                    </section>

                    {/* Call to Action: Vet Magnet */}
                    <div className="bg-[#128CED] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Be Prepared</h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                In an emergency, you don't want to be Googling numbers. Keep the ASPCA Poison Control number on your fridge.
                            </p>
                            <a href={`https://www.amazon.com/s?k=pet+poison+control+magnet&tag=${AFFILIATE_TAG}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors shadow-lg">
                                Get a Poison Control Magnet
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-16">
                    <LegalDisclaimer />
                </div>

            </div>
        </div>
    );
}

function FoodCard({ icon, name, detail }: { icon: string, name: string, detail: string }) {
    return (
        <div className="bg-white/80 p-6 rounded-2xl shadow-sm border border-red-50">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="font-bold text-gray-900 text-xl mb-2">{name}</h3>
            <p className="text-gray-600 leading-relaxed">{detail}</p>
        </div>
    )
}

function ListItem({ title, text }: { title: string, text: string }) {
    return (
        <li className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5"></div>
            <div>
                <strong className="block text-gray-900 text-lg mb-1">{title}</strong>
                <span className="text-gray-600 leading-relaxed">{text}</span>
            </div>
        </li>
    )
}
