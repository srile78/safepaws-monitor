
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SafePaws Monitor | Real-Time Pet Food Recalls",
  description: "Instant alerts for dog and cat food recalls. Protect your pets with real-time FDA safety data.",
};

import Script from 'next/script';

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8082302563728806"
        />
        {children}

        {/* Professional Footer */}
        <footer className="bg-gray-100 border-t border-gray-200 text-gray-700 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Col 1 */}
              <div>
                <div className="mb-6 relative h-16 w-48">
                  <Image
                    src="/safepaws-logo.png"
                    alt="SafePaws Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-4">About SafePaws</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-blue-600">Our Mission</Link></li>
                  <li><Link href="/about" className="hover:text-blue-600">The Team</Link></li>
                  <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
                </ul>
              </div>
              {/* Col 2 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/resources/toxic-foods" className="hover:text-blue-600">Toxic Foods</Link></li>
                  <li><Link href="/resources/pet-first-aid" className="hover:text-blue-600">Pet First Aid</Link></li>
                  <li><Link href="/resources" className="hover:text-blue-600">Recall Archive</Link></li>
                </ul>
              </div>
              {/* Col 3 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-blue-600">Contact Us</Link></li>
                  <li><Link href="#" className="hover:text-blue-600">FAQ</Link></li>
                  <li><Link href="#" className="hover:text-blue-600">Report an Issue</Link></li>
                </ul>
              </div>
              {/* Col 4 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Stay Connected</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Join 10,000+ pet parents getting daily safety alerts.
                </p>
                <div className="flex space-x-4">
                  {/* Social Placeholders */}
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">FB</span>
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">IG</span>
                  <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">X</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              <div className="mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} SafePaws Monitor LLC. All Rights Reserved.
              </div>
              <div className="flex flex-wrap gap-6 justify-center">
                <Link href="/terms" className="hover:text-gray-900">Terms of Use</Link>
                <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
                <Link href="/accessibility" className="hover:text-gray-900">Accessibility</Link>
                <Link href="/compliance" className="hover:text-gray-900">California Privacy Rights</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
