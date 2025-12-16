
import React from 'react';

export default function CompliancePage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Compliance & Privacy Rights</h1>

                <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">California Consumer Privacy Act (CCPA)</h2>
                        <p>
                            This Privacy Notice for California Residents supplements the information contained in our general Privacy Policy
                            and applies solely to all visitors, users, and others who reside in the State of California.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your Rights</h2>
                        <p>The CCPA provides consumers (California residents) with specific rights regarding their personal information:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li><strong>Access:</strong> You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.</li>
                            <li><strong>Deletion:</strong> You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions.</li>
                            <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Do Not Sell My Personal Information</h2>
                        <p>
                            SafePaws Monitor does not sell your personal information to third parties.
                            We may share data with service providers (like email delivery services) only to fulfill the services you requested.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Exercising Your Rights</h2>
                        <p>
                            To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us
                            by emailing: support@safepawsmonitor.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
