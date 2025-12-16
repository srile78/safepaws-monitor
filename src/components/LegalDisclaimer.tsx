import React from 'react';

export default function LegalDisclaimer() {
    return (
        <div className="mt-12 mb-8 bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg shadow-sm">
            <h4 className="text-gray-900 font-bold mb-2 uppercase tracking-wide text-xs">Legal Disclaimer</h4>
            <div className="text-sm text-gray-700 space-y-2">
                <p>
                    <strong>Not a Veterinary Service:</strong> The content provided on SafePaws Monitor is for informational purposes only.
                    We are not veterinarians, and this data is not a substitute for professional medical advice, diagnosis, or treatment.
                    Always seek the advice of your veterinarian with any questions you may have regarding your pet's health.
                </p>
                <p>
                    <strong>Data Source:</strong> All recall data is sourced programmatically from the
                    <a href="https://open.fda.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">
                        U.S. Food and Drug Administration (FDA) OpenFDA API
                    </a>.
                    While we strive for accuracy, we cannot guarantee the completeness or timeliness of the data provided by the source.
                </p>
            </div>
        </div>
    );
}
