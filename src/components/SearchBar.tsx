import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return (
        <div className="relative max-w-md w-full mx-auto sm:mx-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
            <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 hover:border-blue-100 focus:border-blue-500 rounded-full leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] sm:text-base transition-all duration-200"
                placeholder={placeholder || "Search by brand name (e.g. Purina, Blue Buffalo)..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
