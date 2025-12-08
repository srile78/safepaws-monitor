import { getRecalls } from '../lib/data';
import RecallGrid from '../components/RecallGrid';

export default async function Home() {
  const recalls = await getRecalls();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Pet Food Recall Monitor</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <RecallGrid recalls={recalls} />
        </div>
      </main>
    </div>
  );
}
