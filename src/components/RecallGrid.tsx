'use client';

import React, { useMemo } from 'react';
import { Recall } from '../app/types';
import RecallCard from './RecallCard';

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
                        <p className="mt-1 text-gray-500">We found no active recalls matching &ldquo;{searchTerm}&rdquo;.</p>
                        <p className="text-sm text-gray-400 mt-2">This product appears safe based on current FDA data.</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
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
