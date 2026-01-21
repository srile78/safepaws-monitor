import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                <div className="mb-6">
                    <Link href="/" className="inline-flex items-center text-blue-600 font-bold hover:underline text-sm mb-6">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-black text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600 text-lg">
                        Have a question, suggestion, or found a bug? We'd love to hear from you.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">General Support</h2>
                        <p className="text-gray-700 mb-4">
                            For general inquiries, feedback, or assistance with the website, please email us directly.
                        </p>
                        <a href="mailto:support@safepawsmonitor.com" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 text-lg">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            support@safepawsmonitor.com
                        </a>
                    </div>

                    <div className="border-t border-gray-100 pt-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-800">Is this data official?</h4>
                                <p className="text-gray-600 text-sm mt-1">Yes, all our data is sourced directly from U.S. FDA recall announcements.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">How often is it updated?</h4>
                                <p className="text-gray-600 text-sm mt-1">Our system checks for new recalls every 24 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
