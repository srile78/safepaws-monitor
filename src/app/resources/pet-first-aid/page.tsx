import React from 'react';
import Link from 'next/link';
import LegalDisclaimer from '../../../components/LegalDisclaimer';
import { getAmazonLink } from '../../../lib/affiliate';

export default function PetFirstAidPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
                    <Link href="/resources" className="text-blue-600 font-bold hover:underline mb-6 inline-block text-sm uppercase tracking-wide">
                        &larr; Back to Resources
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        Pet First Aid: <br /> Are You Ready?
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                        It's the thing we hope never happens. But if your dog cuts his paw on a hike or your cat takes a tumble, the first 10 minutes matter most.
                        You don't need to be a vet, but you do need a plan.
                    </p>
                </div>

                <div className="space-y-12">

                    {/* The DIY Kit */}
                    <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32 opacity-50 pointer-events-none"></div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">🧳 The "Go Bag"</h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                            Most people have a first aid kit for themselves, but human supplies aren't always safe for pets (especially our pain meds and ointments).
                            Here is what needs to be in your pet-specific kit:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <ul className="space-y-4">
                                <CheckItem text="Self-adhering bandages (won't stick to fur)" />
                                <CheckItem text="Digital thermometer (rectal is most accurate)" />
                                <CheckItem text="Styptic powder (stops bleeding from toenails)" />
                                <CheckItem text="Blunt-tip scissors" />
                            </ul>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-center text-center">
                                <p className="font-bold text-gray-900 mb-2">Short on time?</p>
                                <p className="text-sm text-gray-500 mb-4">You can grab a pre-made kit that vets recommend.</p>
                                <a
                                    href={getAmazonLink("pet first aid kit")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-red-700 transition-colors shadow-md"
                                >
                                    Get a Kit on Amazon
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Common Scenarios */}
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Do When...</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ScenarioCard
                                emoji="🩸"
                                title="They Cut Their Paw"
                                text="Flush the wound with water or saline. Apply pressure with clean gauze. Don't let them lick it! If the bleeding doesn't stop in 5 minutes, head to the vet."
                            />
                            <ScenarioCard
                                emoji="🐝"
                                title="They Get Stung"
                                text="If you can see the stinger, scrape it out with a credit card (don't pinch it, or you'll squeeze more venom in). Monitor closely for facial swelling—that's an emergency."
                            />
                            <ScenarioCard
                                emoji="🥵"
                                title="They Overheat"
                                text="Move to shade immediately. Wet their paws and ears with cool (not freezing) water. Offer small sips of water. Do NOT throw them in an ice bath—it causes shock."
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

function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 text-lg text-gray-700">
            <span className="text-green-500 font-bold text-xl">✓</span>
            {text}
        </li>
    )
}

function ScenarioCard({ emoji, title, text }: { emoji: string, title: string, text: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">
                {emoji}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">
                {text}
            </p>
        </div>
    )
}
