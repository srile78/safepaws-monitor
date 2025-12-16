import React from 'react';

export default function AdPlaceholder() {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-6 h-full flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <span className="relative z-10 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase rounded-full tracking-wider mb-3">
                Sponsored
            </span>
            <h3 className="relative z-10 text-gray-900 font-bold text-lg mb-2">
                Premium Pet Protection
            </h3>
            <p className="relative z-10 text-gray-600 text-sm max-w-[200px]">
                Get 24/7 monitoring for your furry friends.
            </p>
            <button className="relative z-10 mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                Learn More
            </button>
        </div>
    );
}
