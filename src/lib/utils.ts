// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AFFILIATE_TAG } from './affiliate';

export function getSafeLink(term: string): string {
    const lowerTerm = term.toLowerCase();
    let search = 'safe pet treats'; // Default fallback

    if (lowerTerm.includes('cat') || lowerTerm.includes('kitten')) {
        search = 'organic cat food';
    } else if (lowerTerm.includes('dog') || lowerTerm.includes('puppy')) {
        search = 'organic dog food';
    }

    return `https://www.amazon.com/s?k=${encodeURIComponent(search)}&tag=${AFFILIATE_TAG}`;
}
