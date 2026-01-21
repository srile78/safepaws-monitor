'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-50 shadow-lg border-t border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-center sm:text-left text-gray-300">
                    We use cookies to enhance your experience and analyze our traffic. By continuing to visit this site, you agree to our use of cookies.
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 ml-1 underline">Unknown Privacy Policy</a>
                </p>
                <button
                    onClick={acceptCookies}
                    className="whitespace-nowrap bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
