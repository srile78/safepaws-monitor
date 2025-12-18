'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    layoutKey?: string;
    className?: string; // Allow custom styling
}

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function AdUnit({ slotId, format = 'auto', layoutKey, className }: AdUnitProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div className={`ad-container my-8 text-center ${className || ''}`}>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Advertisement</div>
            <ins
                className="adsbygoogle block"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-8082302563728806"
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
                data-ad-layout-key={layoutKey}
                ref={adRef}
            />
        </div>
    );
}
