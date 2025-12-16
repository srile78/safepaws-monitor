
import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">Privacy Policy</h1>

                <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
                    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us. For example, we collect information when you subscribe to our newsletter,
                            request customer support, or communicate with us. The types of information we may collect include your email address
                            and any other information you choose to provide.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>To send you recall alerts and safety updates (if you opted in).</li>
                            <li>To improve our website and customer service.</li>
                            <li>To monitor and analyze trends, usage, and activities in connection with our services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">3. Cookies and Tracking</h2>
                        <p>
                            We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data
                            that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">4. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external sites that are not operated by us (e.g., Amazon). Please be aware that we have
                            no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">5. Data Security</h2>
                        <p>
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access,
                            disclosure, alteration and destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at support@safepawsmonitor.com.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
