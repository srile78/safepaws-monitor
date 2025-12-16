import { getRecalls } from '../lib/data';
import HomeDashboard from '../components/HomeDashboard';

export default async function Home() {
  const recalls = await getRecalls();

  return (
    <div className="min-h-screen font-sans">
      {/* SearchBar, Hero, and Content are now all in HomeDashboard */}
      <HomeDashboard recalls={recalls} />
    </div>
  );
}
