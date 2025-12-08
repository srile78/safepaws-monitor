'use client';

import React, { useState, useMemo } from 'react';
import { Recall } from '../app/types';
import RecallCard from './RecallCard';
import SearchBar from './SearchBar';

interface RecallGridProps {
    recalls: Recall[];
}

export default function RecallGrid({ recalls }: RecallGridProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecalls = useMemo(() => {
        if (!searchTerm) return recalls;
        const lowerTerm = searchTerm.toLowerCase();
        return recalls.filter((recall) =>
            recall.brand_name?.toLowerCase().includes(lowerTerm) ||
            recall.product_description?.toLowerCase().includes(lowerTerm)
        );
    }, [recalls, searchTerm]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-gray-600 font-medium">
                    Showing {filteredRecalls.length} recall{filteredRecalls.length !== 1 && 's'}
                </div>
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>

            {filteredRecalls.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200 border-dashed">
                    <p className="text-gray-500 text-lg">No recalls found matching "{searchTerm}"</p>
                    <button
                        onClick={() => setSearchTerm('')}
                        className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                        Clear Search
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecalls.map((recall, index) => (
                        <RecallCard key={recall.recall_number || index} recall={recall} />
                    ))}
                </div>
            )}
        </div>
    );
}
