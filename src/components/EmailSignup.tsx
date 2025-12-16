'use client';

import React, { useState } from 'react';

export default function EmailSignup() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubscribed(true);
                setEmail('');
                // Reset success message after 5 seconds to allow adding another if needed, 
                // but usually for a newsletter one is enough. Keeping the "Success" state visible is often better.
                // Commenting out the auto-reset for better UX feedback.
                /* 
                setTimeout(() => {
                    setSubscribed(false);
                }, 5000); 
                */
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Error connecting to the server.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="text-left md:max-w-xs">
                        <p className="text-gray-900 font-bold text-lg leading-tight">
                            Get weekly safety summaries.
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                            We monitor the FDA so you don't have to.
                        </p>
                    </div>

                    {subscribed ? (
                        <div className="bg-green-50 text-green-800 rounded-lg px-4 py-2 text-sm font-medium animate-fade-in">
                            🎉 You're on the list!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}
                </div>
                {!subscribed && (
                    <p className="mt-4 text-xs text-gray-400">
                        Unsubscribe at any time.
                    </p>
                )}
            </div>
        </div>
    );
}
