import { getRecalls } from '../lib/data';
import HomeDashboard from '../components/HomeDashboard';

export default async function Home() {
  const recalls = await getRecalls();

  return (
    <div className="min-h-screen font-sans">
      {/* SearchBar, Hero, and Content are now all in HomeDashboard */}
      <HomeDashboard recalls={recalls} />

      {/* SEO & Trust Content */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Trust SafePaws Monitor?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🛑 Official Data Source</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't rely on rumors. Every alert on our platform is directly synchronized with the U.S. Food & Drug Administration (FDA) recall database.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">⚡ Real-Time Updates</h3>
              <p className="text-gray-600 leading-relaxed">
                Pet safety can't wait. Our systems check for new recall filings every 24 hours to ensure you have the latest information as soon as it's public.
              </p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-gray-700">
              <strong>Our Mission:</strong> To empower pet parents with accessible, accurate, and timely safety information.
              We believe every dog and cat deserves safe food, and every owner deserves peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
