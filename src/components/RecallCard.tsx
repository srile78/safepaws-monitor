import React from 'react';
import { Recall } from '../app/types';
import { getAmazonLink } from '../lib/affiliate';

interface RecallCardProps {
    recall: Recall;
    highlightTerm?: string;
}

/**
 * Helper to highlight text that matches the search term (case-insensitive).
 */
function HighlightedText({ text, term }: { text: string, term?: string }) {
    if (!term || !term.trim()) {
        return <>{text}</>;
    }

    // Split text by the search term (case insensitive)
    // We use a regex with capturing group (...) so that the delimiter is included in the result array
    const parts = text.split(new RegExp(`(${term})`, 'gi'));

    return (
        <span>
            {parts.map((part, i) =>
                part.toLowerCase() === term.toLowerCase() ? (
                    <mark key={i} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">{part}</mark>
                ) : (
                    part
                )
            )}
        </span>
    );
}

export default function RecallCard({ recall, highlightTerm }: RecallCardProps) {
    const isClassI = recall.classification === 'Class I';

    // Card Styling logic
    const containerClasses = isClassI
        ? 'border-red-500 bg-red-50'
        : 'border-yellow-400 bg-yellow-50';

    const badgeClasses = isClassI
        ? 'bg-red-600 text-white'
        : 'bg-yellow-500 text-black';

    const badgeText = isClassI ? 'DANGER' : 'WARNING';

    // Truncate description to 100 characters (applied BEFORE highlighting to keep logic simple, 
    // though ideally we'd highlight then truncate, this is safer for React nodes)
    const truncatedDescription = recall.product_description.length > 100
        ? recall.product_description.substring(0, 100) + '...'
        : recall.product_description;

    return (
        <div className={`group rounded-[2rem] bg-white border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden relative`}>
            {/* Status Bar - Bolder */}
            <div className={`h-6 w-full ${isClassI ? 'bg-red-500' : 'bg-amber-400'}`} />

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    {/* Badge with Icon */}
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide gap-2 shadow-sm ${isClassI
                        ? 'bg-red-600 text-white'
                        : 'bg-amber-100 text-amber-800'
                        }`}>
                        {isClassI ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        )}
                        {badgeText}
                    </span>
                    <span className="text-xs text-gray-500 font-bold bg-gray-100 px-3 py-1 rounded-full">{recall.report_date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug group-hover:text-[color:var(--primary-blue)] transition-colors" title={recall.product_description}>
                    <HighlightedText text={truncatedDescription} term={highlightTerm} />
                </h3>

                <p className="text-sm text-gray-600 mb-8 flex-grow leading-relaxed">
                    <span className="text-gray-900 font-bold block mb-1">Reason for Recall:</span>
                    <HighlightedText text={recall.reason_for_recall} term={highlightTerm} />
                </p>

                <div className="mt-auto pt-0">
                    <a
                        href={getAmazonLink(recall.product_description, undefined)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex justify-center items-center px-6 py-4 text-base font-extrabold rounded-2xl text-white bg-[#128CED] hover:bg-blue-600 hover:scale-[1.02] shadow-[0_4px_14px_rgba(18,140,237,0.3)] hover:shadow-[0_6px_20px_rgba(18,140,237,0.4)] transition-all duration-200"
                    >
                        Find Safe Alternative
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
