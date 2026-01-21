import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://safepawsmonitor.com'; // Replace with your actual domain

    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/resources/toxic-foods',
        '/resources/pet-first-aid',
        '/resources',
        '/compliance',
        '/accessibility',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
