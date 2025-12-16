
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export default function AboutPage() {
    return (
        <div className={`min-h-screen font-sans ${nunito.className}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                </div>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
                    About <span className="text-[#128CED]">SafePaws Monitor</span>
                </h1>
                <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                    Built by pet lovers, for pet lovers. We turn complex FDA data into simple, life-saving alerts.
                </p>

                {/* Founder Section */}
                <div className="bg-blue-50 rounded-[3rem] p-8 md:p-12 mb-20 shadow-sm border border-blue-100">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white rotate-2 bg-gray-200">
                                <Image
                                    src="/sean-founder.jpg"
                                    alt="Sean, Founder of SafePaws"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Meet Sean</h2>
                            <p className="text-blue-600 font-bold mb-6 uppercase tracking-wider text-sm">Founder of SafePaws</p>
                            <div className="prose prose-lg text-gray-700 leading-relaxed">
                                <p className="mb-4">
                                    "I founded SafePaws for one simple reason: <strong>I wanted an easy way to find out if the food I was feeding my dog or cat was safe.</strong>"
                                </p>
                                <p>
                                    Navigating government websites and obscure press releases shouldn't be a requirement for being a good pet owner.
                                    After realizing how fragmented this information was, I decided to build a platform that brings verified FDA recall data straight to the parents who need it most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Memorial/Pets Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Inspiration Behind the Mission</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our "Chief Product Testers" taught us everything we know about loyalty and love.
                            This project is dedicated to their memory.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Akuma */}
                        <PetCard
                            name="Akuma"
                            title="Quality Control Manager"
                            dates="Rest in Peace, 2024"
                            funFact="Ice was his favorite treat."
                            imageSrc="/akuma.jpg"
                            accentColor="bg-red-50"
                            borderColor="border-red-100"
                            icon="🦴"
                        />

                        {/* Missy */}
                        <PetCard
                            name="Missy"
                            title="Chief Nap Officer"
                            dates="Rest in Peace, 2023"
                            funFact="Hated the rain but loved the ocean!"
                            imageSrc="/missy.jpg"
                            accentColor="bg-blue-50"
                            borderColor="border-blue-100"
                            icon="🌊"
                        />

                        {/* Jordan & Feisty */}
                        <PetCard
                            name="Jordan & Feisty"
                            title="The Ego Squad"
                            dates="Rest in Peace, 2023"
                            funFact="These two were always fighting for the most attention in the room."
                            imageSrc="/jordan-and-feisty.jpg"
                            accentColor="bg-yellow-50"
                            borderColor="border-yellow-100"
                            icon="👑"
                        />
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-900 text-white rounded-[2rem] p-12 text-center relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Keep Their Legacy Safe</h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
                        Join us in our mission to protect pets everywhere. Check your pantry, sign up for alerts, and share this tool with a friend.
                    </p>
                    <Link href="/" className="inline-block px-8 py-4 bg-[#128CED] text-white font-bold rounded-full hover:bg-blue-600 transition-transform hover:scale-105 shadow-xl relative z-10">
                        Check Recalls Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

function PetCard({ name, title, dates, funFact, imageSrc, accentColor, borderColor, icon }: any) {
    return (
        <div className={`flex flex-col h-full ${accentColor} border ${borderColor} rounded-3xl p-6 transition-transform hover:-translate-y-1 duration-300`}>
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 shadow-md bg-white">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex-grow text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-[#128CED] font-bold text-sm uppercase tracking-wide mb-2">{title}</p>
                <div className="inline-block bg-white/60 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 mb-4 border border-gray-100">
                    {dates}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                    "{funFact}"
                </p>
            </div>
        </div>
    )
}
