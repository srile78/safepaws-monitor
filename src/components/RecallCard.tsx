import React from 'react';
import { Recall } from '../app/types';

interface RecallCardProps {
    recall: Recall;
}

export default function RecallCard({ recall }: RecallCardProps) {
    const isClassI = recall.classification === 'Class I';
    const borderColor = isClassI ? 'border-red-500' : 'border-yellow-400';
    const badgeColor = isClassI ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';

    return (
        <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${borderColor} hover:shadow-lg transition-shadow duration-300 flex flex-col h-full`}>
            <div className="flex justify-between items-start mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}>
                    {recall.classification}
                </span>
                <span className="text-sm text-gray-500">{recall.report_date}</span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2" title={recall.product_description}>
                {recall.product_description}
            </h3>

            <p className="text-sm text-gray-600 mb-4 flex-grow">
                <span className="font-semibold text-gray-700">Reason:</span> {recall.reason_for_recall}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-mono">{recall.recall_number}</span>
                    <a
                        href="https://www.amazon.com/s?k=pet+food"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                        Safe Alternative
                    </a>
                </div>
            </div>
        </div>
    );
}
