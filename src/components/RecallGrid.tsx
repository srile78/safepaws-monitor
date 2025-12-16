'use client';

import React, { useMemo } from 'react';
import { Recall } from '../app/types';
import RecallCard from './RecallCard';
// import SearchBar from './SearchBar'; // Moved to HomeDashboard
import AdPlaceholder from './AdPlaceholder';
import { getSafeLink } from '../lib/utils';
import { AFFILIATE_TAG } from '../lib/affiliate';

interface RecallGridProps {
    recalls: Recall[];
    searchTerm: string;
    onClearSearch: () => void;
}

export default function RecallGrid({ recalls, searchTerm, onClearSearch }: RecallGridProps) {
    // const [searchTerm, setSearchTerm] = useState(''); // Removed internal state

    const filteredRecalls = useMemo(() => {
        if (!searchTerm) return recalls;
        const lowerTerm = searchTerm.toLowerCase();
        return recalls.filter((recall) =>
            recall.brand_name?.toLowerCase().includes(lowerTerm) ||
            recall.product_description?.toLowerCase().includes(lowerTerm)
        );
    }, [recalls, searchTerm]);

    const renderContent = () => {
        const items: React.ReactNode[] = [];
        filteredRecalls.forEach((recall, index) => {
            items.push(<RecallCard key={recall.recall_number || `recall-${index}`} recall={recall} highlightTerm={searchTerm} />);

            // Inject Ad after every 5th item (index 4, 9, 14...)
            if ((index + 1) % 5 === 0) {
                items.push(<AdPlaceholder key={`ad-${index}`} />);
            }
        });
        return items;
    };

    return (
        <div>
            {/* SearchBar moved to HomeDashboard parent */}

            <div className="flex justify-between items-center mb-6">
                <div className="text-gray-600 font-medium">
                    Showing {filteredRecalls.length} alert{filteredRecalls.length !== 1 && 's'}
                </div>
            </div>

            {filteredRecalls.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200 border-dashed">
                    <div className="mb-4">
                        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Good news!</h3>
                        <p className="mt-1 text-gray-500">We found no active recalls for "{searchTerm}".</p>
                        <p className="text-sm text-gray-400 mt-2">This product might be safe.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <a
                            href={`https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}&tag=${AFFILIATE_TAG}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            <svg className="mr-2 -ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.798l-6.228.05a1.374 1.374 0 0 0-.963.437l-.003.002a1.372 1.372 0 0 0-.256.463l.067.025a1.379 1.379 0 0 0 .19-.488h-.125a1.373 1.373 0 0 0-.46-1.353l6.236-.05L12.09.438A1.371 1.371 0 0 0 13.483 0zm-2.404 3.732L9.5 2.154l-1.58 1.578 3.16 3.16.52-.52-2.122-2.122.383-.383 1.057 1.056.52-.52-1.58-1.578-1.58 1.579-.96-.96.52-.52.962.962 1.578-1.58zM19.34 6.75a6.762 6.762 0 0 0-3.957 1.29l.394.394a6.22 6.22 0 0 1 3.563-1.127 6.22 6.22 0 0 1 4.417 1.83l.393-.393a6.776 6.776 0 0 0-4.81-2z" />
                                <path d="M9.89 8.685l.392.392-.99 2.502 2.503-.99.392.392-3.146 1.246a.35.35 0 0 1-.444-.444l1.246-3.146.047.048z" />
                                <path d="M15.5 12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>
                            Shop "{searchTerm}" on Amazon
                        </a>

                        <button
                            onClick={onClearSearch}
                            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                        >
                            Clear Search
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {renderContent()}
                </div>
            )}
        </div>
    );
}
