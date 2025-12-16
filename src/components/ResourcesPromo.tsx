
import React from 'react';
import Link from 'next/link';

export default function ResourcesPromo() {
    return (
        <div className="mt-16 mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-blue-100 relative overflow-hidden">
                {/* Decorative background doodles opacity */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        Keep your pet safe <span className="text-[rgb(var(--primary-blue))]">beyond the bowl</span>.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Did you know that common household items like grapes, lilies, and chocolate can be dangerous?
                        Check out our new vet-approved guides to keep your home safe.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/resources/toxic-foods"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1"
                        >
                            <span className="mr-2">🚫</span> Foods to Avoid
                        </Link>
                        <Link
                            href="/resources/allergies-diet"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-blue-900 bg-white border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <span className="mr-2">🤧</span> Allergies & Diet
                        </Link>
                    </div>

                    <div className="mt-8">
                        <Link href="/resources" className="text-sm font-bold text-gray-500 hover:text-[color:var(--primary-blue)] transition-colors">
                            View All Resources &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
