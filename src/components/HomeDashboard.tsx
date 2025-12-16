
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Recall } from '../app/types';
import RecallGrid from './RecallGrid';
import SearchBar from './SearchBar';
import EmailSignup from './EmailSignup';
import LegalDisclaimer from './LegalDisclaimer';

interface HomeDashboardProps {
    recalls: Recall[];
}

export default function HomeDashboard({ recalls }: HomeDashboardProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState<'All' | 'Dog' | 'Cat'>('All');

    // Filter logic: Search Term AND Category
    const filteredRecalls = recalls.filter(recall => {
        const matchesSearch = recall.product_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recall.reason_for_recall.toLowerCase().includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;

        if (categoryFilter === 'All') return true;
        // Simple heuristic for category filtering based on description
        const desc = recall.product_description.toLowerCase();
        if (categoryFilter === 'Dog') return desc.includes('dog') || desc.includes('puppy');
        if (categoryFilter === 'Cat') return desc.includes('cat') || desc.includes('kitten');
        return true;
    });

    return (
        <div className="min-h-screen pb-12"> {/* Background pattern comes from globals.css body */}

            {/* 1. CHEWY-STYLE HEADER */}
            <header className="bg-[#128CED] sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            SafePaws
                        </h1>
                    </Link>

                    {/* Search Bar - Wide and Centered */}
                    <div className="flex-grow max-w-2xl mx-auto hidden md:block">
                        <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search recalls (e.g. 'Purina', 'Salmon')..." />
                    </div>

                    {/* Right Actions (Mock) */}
                    <div className="flex items-center gap-6 text-white font-bold text-sm">
                        <Link href="/resources" className="hidden sm:block hover:text-blue-200">Resources</Link>
                        <Link href="/about" className="hidden sm:block hover:text-blue-200">About</Link>
                        <Link href="#signup" className="flex items-center gap-2 hover:text-blue-200">
                            <span className="bg-white/20 p-2 rounded-full">🔔</span>
                            <span className="hidden lg:inline">Get Alerts</span>
                        </Link>
                    </div>
                </div>
                {/* Mobile Search Bar (visible only on small screens) */}
                <div className="md:hidden px-4 pb-4">
                    <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search recalls..." />
                </div>
            </header>

            {/* 2. HERO BANNER */}
            <div className="bg-white border-b border-gray-200 mb-8">
                <div className="max-w-7xl mx-auto relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                        {/* Text Side */}
                        <div className="p-8 md:p-16 flex flex-col justify-center text-center md:text-left z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#128CED] mb-6 leading-tight">
                                Has your food <br /> been recalled?
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto md:mx-0">
                                We monitor <span className="font-bold text-red-600">{recalls.length}</span> active FDA alerts 24/7 so you never miss a warning. Check your pantry now.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#recalls" className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-transform hover:scale-105 shadow-lg text-center">
                                    Check Recent Recalls
                                </a>
                                <Link href="/resources" className="px-8 py-3 bg-white text-[#128CED] font-bold rounded-full border-2 border-[#128CED] hover:bg-blue-50 transition-transform hover:scale-105 text-center">
                                    Safety Guides
                                </Link>
                            </div>
                        </div>

                        {/* Image Side (Background on mobile, side on desktop) */}
                        <div className="relative h-64 md:h-auto overflow-hidden">
                            <Image
                                src="/hero-pets-real.png"
                                alt="Happy Dog and Cat"
                                fill
                                className="object-cover object-center md:rounded-bl-[4rem]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* 3. CIRCLE NAV - "Who are you checking for?" */}
                <div className="text-center pt-8 pb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Who are you checking for?</h3>
                    <div className="flex justify-center gap-8 md:gap-16">
                        {/* Dog Circle */}
                        <button
                            onClick={() => setCategoryFilter(categoryFilter === 'Dog' ? 'All' : 'Dog')}
                            className={`group flex flex-col items-center gap-3 transition-transform ${categoryFilter === 'Dog' ? 'scale-110' : 'hover:scale-105'}`}
                        >
                            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full p-1 ${categoryFilter === 'Dog' ? 'bg-[#128CED]' : 'bg-transparent group-hover:bg-gray-200'} transition-colors`}>
                                <Image
                                    src="/dog-circle.png"
                                    alt="Dog"
                                    width={128}
                                    height={128}
                                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </div>
                            <span className={`font-bold text-lg ${categoryFilter === 'Dog' ? 'text-[#128CED]' : 'text-gray-700'}`}>Dog</span>
                        </button>

                        {/* Cat Circle */}
                        <button
                            onClick={() => setCategoryFilter(categoryFilter === 'Cat' ? 'All' : 'Cat')}
                            className={`group flex flex-col items-center gap-3 transition-transform ${categoryFilter === 'Cat' ? 'scale-110' : 'hover:scale-105'}`}
                        >
                            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full p-1 ${categoryFilter === 'Cat' ? 'bg-[#128CED]' : 'bg-transparent group-hover:bg-gray-200'} transition-colors`}>
                                <Image
                                    src="/cat-circle.png"
                                    alt="Cat"
                                    width={128}
                                    height={128}
                                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </div>
                            <span className={`font-bold text-lg ${categoryFilter === 'Cat' ? 'text-[#128CED]' : 'text-gray-700'}`}>Cat</span>
                        </button>
                    </div>
                </div>

                {/* Email Signup with ID for anchor link */}
                <div id="signup">
                    <EmailSignup />
                </div>

                {/* Recall Grid */}
                <div id="recalls">
                    <RecallGrid recalls={filteredRecalls} searchTerm={searchTerm} onClearSearch={() => setSearchTerm('')} />
                </div>

                {/* Visible Legal Disclaimer */}
                <LegalDisclaimer />
            </div>
        </div>
    );
}
