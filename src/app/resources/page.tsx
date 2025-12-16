
import React from 'react';
import Link from 'next/link';
import { Nunito } from "next/font/google";
import LegalDisclaimer from '../../components/LegalDisclaimer';

const nunito = Nunito({ subsets: ["latin"] });

export default function ResourcesPage() {
    return (
        <div className={`min-h-screen font-sans ${nunito.className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Header Section with Glass effect */}
                <div className="text-center mb-16 bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/50 shadow-sm mx-auto max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-blue-600 font-bold mb-6 hover:underline">
                        &larr; Back to Monitor
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Pet Health <span className="text-[rgb(var(--primary-blue))]">Resources</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        Expert guides to keep your furry friend happy, healthy, and safe from hidden dangers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Card 1: Toxic Foods */}
                    <Link href="/resources/toxic-foods" className="group relative block h-full">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-red-100/50 rounded-[2.5rem] transform rotate-1 group-hover:rotate-2 transition-transform duration-300 backdrop-blur-sm"></div>

                        <div className="relative h-full bg-white/80 backdrop-blur-md border border-red-100 rounded-[2.5rem] p-10 shadow-sm group-hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner">
                                🚫
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                Toxic Foods to Avoid
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                A comprehensive list of everyday foods, plants, and fruits that can be dangerous or fatal to cats and dogs.
                            </p>
                            <span className="text-red-600 font-bold flex items-center bg-red-50 w-fit px-4 py-2 rounded-full group-hover:bg-red-100 transition-colors">
                                Read Guide &rarr;
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: Allergies & Diet */}
                    <Link href="/resources/allergies-diet" className="group relative block h-full">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-blue-100/50 rounded-[2.5rem] transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 backdrop-blur-sm"></div>

                        <div className="relative h-full bg-white/80 backdrop-blur-md border border-blue-100 rounded-[2.5rem] p-10 shadow-sm group-hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner">
                                🤧
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                Allergies & Safe Diets
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Is your pet itching or upset? Learn about common food allergies and how to pick the right sensitive stomach diet.
                            </p>
                            <span className="text-blue-600 font-bold flex items-center bg-blue-50 w-fit px-4 py-2 rounded-full group-hover:bg-blue-100 transition-colors">
                                Read Guide &rarr;
                            </span>
                        </div>
                    </Link>
                </div>

                <LegalDisclaimer />
            </div>
        </div>
    );
}
