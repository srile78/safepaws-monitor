
import React from 'react';

export default function AccessibilityPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Accessibility Statement</h1>

                <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment</h2>
                        <p>
                            SafePaws Monitor is committed to ensuring digital accessibility for people with disabilities.
                            We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Measures to Support Accessibility</h2>
                        <p>SafePaws Monitor takes the following measures to ensure accessibility of our website:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Include accessibility as part of our mission statement.</li>
                            <li>Integrate accessibility into our procurement practices.</li>
                            <li>Employ formal accessibility quality assurance methods.</li>
                            <li>Use high-contrast colors and readable fonts (e.g., Nunito).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Conformance Status</h2>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility
                            for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                            SafePaws Monitor is partially conformant with WCAG 2.1 level AA.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Feedback</h2>
                        <p>
                            We welcome your feedback on the accessibility of SafePaws Monitor. Please let us know if you encounter accessibility barriers
                            on our website:
                        </p>
                        <p className="mt-2 font-bold text-blue-600">
                            E-mail: support@safepawsmonitor.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
