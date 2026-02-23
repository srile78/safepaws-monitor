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
        '/resources/allergies-diet',
        '/resources/dog-diets',
        '/resources/cat-diets',
        '/resources/raw-vs-processed',
        '/resources/dry-vs-fresh',
        '/resources',
        '/compliance',
        '/accessibility',
        '/blog',
        '/blog/how-to-read-pet-food-recall-notice',
        '/blog/most-dangerous-pet-food-recalls-history',
        '/blog/what-to-do-pet-ate-recalled-food',
        '/blog/how-fda-pet-food-recall-process-works',
        '/blog/complete-guide-dog-food-ingredients',
        '/blog/complete-guide-cat-food-ingredients',
        '/blog/how-to-transition-pet-new-food',
        '/blog/understanding-aafco-pet-food-standards',
        '/blog/signs-pet-food-poisoning',
        '/blog/common-pet-food-allergies',
        '/blog/senior-dog-nutrition-guide',
        '/blog/puppy-vs-adult-dog-food',
        '/blog/best-pet-food-brands-clean-ingredients',
        '/blog/how-to-store-pet-food-safely',
        '/blog/grain-free-dog-food-science-controversy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
