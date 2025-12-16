import React from 'react';

export default function EmailPreviewPage() {
    return (
        <div className="min-h-screen bg-gray-200 p-4 md:p-8 flex items-center justify-center font-sans">
            <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl overflow-hidden ring-1 ring-gray-900/5">

                {/* Fake Email Client Header (Mac Style) */}
                <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center gap-4">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/50"></div>
                    </div>
                    <div className="flex-1 text-center pr-12">
                        <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded shadow-sm border border-gray-200">
                            Inbox &mdash; Message Preview
                        </span>
                    </div>
                </div>

                {/* Email Header Metadata */}
                <div className="bg-white p-6 border-b border-gray-100">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Welcome to SafePaws Monitor 🐾</h1>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#128CED] flex items-center justify-center text-white font-bold text-xl shadow-sm">
                            S
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                                <p className="text-sm font-bold text-gray-900">SafePaws Team <span className="text-gray-500 font-normal">&lt;alerts@safepaws.com&gt;</span></p>
                                <span className="text-xs text-gray-400">10:42 AM</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">To: <span className="text-gray-700">Sean Riley</span> &lt;seanriley25@gmail.com&gt;</p>
                        </div>
                    </div>
                </div>

                {/* Email Body Content (The part that gets sent) */}
                <div className="p-8 md:p-12 text-gray-800 leading-relaxed bg-white">
                    <div className="max-w-lg mx-auto">
                        {/* Logo in Email */}
                        <div className="mb-8 text-center md:text-left">
                            <span className="text-2xl font-black text-[#128CED] tracking-tight">SafePaws</span>
                        </div>

                        <p className="mb-4 text-lg">Hi Sean,</p>
                        <p className="mb-4 text-gray-600">
                            Thanks for joining the <strong>SafePaws</strong> community. We're glad you're here, though we wish a service like this didn't need to exist.
                        </p>
                        <p className="mb-8 text-gray-600">
                            Each week, we monitor FDA reports to find potential recalls affecting dog and cat food. If we find something dangerous, you'll be the first to know.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-[#128CED] p-6 mb-8 rounded-r-lg">
                            <h3 className="font-bold text-[#128CED] mb-2">What happens next?</h3>
                            <ul className="list-disc list-inside text-sm text-blue-900/80 space-y-2">
                                <li>We only email you when there is a <strong>confirmed recall</strong>.</li>
                                <li>We send a straightforward "Safe/Not Safe" summary.</li>
                                <li>We respect your inbox—no spam, ever.</li>
                            </ul>
                        </div>

                        <div className="text-center py-4 mb-8">
                            <a href="http://localhost:3000" className="inline-block px-8 py-4 bg-[#128CED] text-white font-bold rounded-full hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 no-underline">
                                Check Current Recalls
                            </a>
                        </div>

                        <p className="text-gray-600">Stay safe,</p>
                        <p className="font-bold text-gray-900">The SafePaws Team</p>
                    </div>

                    {/* Email Footer */}
                    <div className="border-t border-gray-100 pt-8 mt-12 text-center text-xs text-gray-400">
                        <p className="mb-2">SafePaws Monitor • 123 Pet Safety Lane • San Francisco, CA</p>
                        <p>
                            <a href="#" className="underline hover:text-gray-600 decoration-gray-300">Unsubscribe</a> &bull;
                            <a href="#" className="underline hover:text-gray-600 decoration-gray-300 ml-1">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
