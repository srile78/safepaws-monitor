// TODO: USER_ACTION - Replace 'safepaws-20' with your actual Amazon Associate Tag
export const AFFILIATE_TAG = 'safepaws-20';

/**
 * Generates an Amazon affiliate link for a given keyword or product.
 * 
 * @param keyword The search term or product name (e.g. "dog first aid kit")
 * @param specificAsin Optional: A specific ASIN if you want to link to a direct product page instead of search.
 * @returns The formatted Amazon URL with the affiliate tag.
 */
export function getAmazonLink(keyword: string, specificAsin?: string): string {
    if (specificAsin) {
        return `https://www.amazon.com/dp/${specificAsin}?tag=${AFFILIATE_TAG}`;
    }

    const encodedKeyword = encodeURIComponent(keyword);
    return `https://www.amazon.com/s?k=${encodedKeyword}&tag=${AFFILIATE_TAG}`;
}
