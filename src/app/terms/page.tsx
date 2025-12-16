
import React from 'react';

export default function TermsPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Terms of Use</h1>

                <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using SafePaws Monitor ("we", "our", or "us"), you agree to be bound by these Terms of Use.
                            If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">2. Nature of Information</h2>
                        <p>
                            SafePaws Monitor provides information regarding pet food recalls based on data from the U.S. Food and Drug Administration (FDA)
                            and other public sources. While we strive for accuracy, <strong>this service is for informational purposes only.</strong>
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>We are not a veterinary medical service.</li>
                            <li>We do not guarantee the immediate completeness of every recall notice.</li>
                            <li>Always verify critical safety information directly with manufacturer or FDA sources.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">3. Affiliate Disclosure</h2>
                        <p>
                            SafePaws Monitor participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed
                            to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">4. User Conduct</h2>
                        <p>
                            You agree to use this website only for lawful purposes. You agree not to take any action that might compromise the security
                            of the website, render the website inaccessible to others, or otherwise cause damage to the website or the Content.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">5. Reviewing the "No-Go" List</h2>
                        <p>
                            Our resource guides (e.g., Toxic Foods, First Aid) are general guidelines. Every pet is unique.
                            Always consult with a qualified veterinarian regarding your pet's specific health needs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">6. Limitation of Liability</h2>
                        <p>
                            SafePaws Monitor LLC shall not be liable for any direct, indirect, incidental, special, or consequential damages
                            resulting from the use or inability to use our services or for the cost of procurement of substitute goods and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of those changes.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
