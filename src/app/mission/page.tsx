
import React from 'react';

export default function MissionPage() {
    return (
        <div className="min-h-screen font-sans">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Why I Built SafePaws</h1>
                    <div className="h-1.5 w-24 bg-[color:var(--primary-blue)] mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-lg text-gray-600 mx-auto leading-relaxed">
                    <p className="mb-6">
                        As a pet parent, there is nothing more terrifying than hearing about a recall for the food you just fed your best friend.
                    </p>
                    <p className="mb-6">
                        I built <strong>SafePaws</strong> because I was tired of finding out about safety alerts weeks too late. The FDA data exists, but it's buried in complex spreadsheets and government websites that are hard to check daily.
                    </p>
                    <p className="mb-6">
                        My mission is simple: <strong>Make pet safety accessible, instant, and friendly.</strong>
                    </p>
                    <p className="mb-8">
                        This site monitors FDA recall databases 24/7. When a new alert is issued, we update instantly so you can check your pantry and keep your fur baby safe.
                    </p>

                    <div className="bg-blue-50 p-8 rounded-3xl text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
                        <p className="mb-6">
                            We use affiliate links to keep this site free. If you find a recalled product, we'll help you find a safe, organic alternative.
                        </p>
                        <a href="/" className="inline-block px-8 py-3 bg-[color:var(--primary-blue)] text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                            Back to Monitor
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
