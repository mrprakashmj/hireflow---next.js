/**
 * Payload CMS API Client
 * 
 * Provides functions to fetch blog content from Payload CMS REST API
 */

const PAYLOAD_CMS_URL = process.env.PAYLOAD_CMS_URL || 'http://localhost:3001';

export interface PayloadBlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    date: string;
    status: 'draft' | 'published';
    subtitle: string;
    image: PayloadMedia | string;
    overview: string;
    obstacles: { point: string }[];
    outcomes: string;
    summary: string;
    contentImage?: PayloadMedia | string;
    createdAt: string;
    updatedAt: string;
}

export interface PayloadMedia {
    id: string;
    alt: string;
    caption?: string;
    url: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    sizes?: {
        thumbnail?: { url: string; width: number; height: number };
        card?: { url: string; width: number; height: number };
        hero?: { url: string; width: number; height: number };
    };
}

export interface PayloadResponse<T> {
    docs: T[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

/**
 * Get the image URL from a Payload media object or string
 */
export function getImageUrl(image: PayloadMedia | string | undefined, size?: 'thumbnail' | 'card' | 'hero'): string {
    if (!image) return '';

    let url = '';

    if (typeof image === 'string') {
        url = image;
    } else if (size && image.sizes?.[size]?.url) {
        // If a specific size is requested and available
        url = image.sizes[size]!.url;
    } else {
        // Return the main URL
        url = image.url;
    }

    // Handle Payload 3.0 URL format: convert /api/media/file/ to /media/
    if (url.includes('/api/media/file/')) {
        url = url.replace('/api/media/file/', '/media/');
    }

    // Add base URL if not already present
    if (!url.startsWith('http')) {
        return `${PAYLOAD_CMS_URL}${url}`;
    }

    return url;
}

/**
 * Format date from ISO string to display format
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
}

/**
 * Fetch all published blog posts from Payload CMS
 */
export async function fetchBlogPosts(): Promise<PayloadBlogPost[]> {
    try {
        const response = await fetch(
            `${PAYLOAD_CMS_URL}/api/blog-posts?sort=-date&depth=1`,
            {
                cache: 'no-store', // Always fetch fresh data
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }

        const data: PayloadResponse<PayloadBlogPost> = await response.json();
        console.log('Fetched blog posts from CMS:', data.docs.length);
        return data.docs;
    } catch (error) {
        console.error('Error fetching blog posts from Payload CMS:', error);
        return [];
    }
}

/**
 * Fetch a single blog post by slug from Payload CMS
 */
export async function fetchBlogPostBySlug(slug: string): Promise<PayloadBlogPost | null> {
    try {
        const response = await fetch(
            `${PAYLOAD_CMS_URL}/api/blog-posts?where[slug][equals]=${encodeURIComponent(slug)}&depth=1`,
            {
                cache: 'no-store', // Always fetch fresh data
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch blog post: ${response.status}`);
        }

        const data: PayloadResponse<PayloadBlogPost> = await response.json();
        console.log(`Fetched blog post "${slug}" from CMS:`, data.docs.length > 0 ? 'found' : 'not found');
        return data.docs[0] || null;
    } catch (error) {
        console.error(`Error fetching blog post "${slug}" from Payload CMS:`, error);
        return null;
    }
}

/**
 * Fetch related blog posts by category from Payload CMS
 */
export async function fetchRelatedPosts(
    currentSlug: string,
    category: string,
    limit: number = 3
): Promise<PayloadBlogPost[]> {
    try {
        const response = await fetch(
            `${PAYLOAD_CMS_URL}/api/blog-posts?where[slug][not_equals]=${encodeURIComponent(currentSlug)}&where[category][equals]=${encodeURIComponent(category)}&where[status][equals]=published&limit=${limit}&depth=1`,
            {
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch related posts: ${response.status}`);
        }

        const data: PayloadResponse<PayloadBlogPost> = await response.json();
        return data.docs;
    } catch (error) {
        console.error('Error fetching related posts from Payload CMS:', error);
        return [];
    }
}

/**
 * Check if Payload CMS is available
 */
export async function isPayloadCMSAvailable(): Promise<boolean> {
    try {
        // Check if the API is responding by querying blog-posts with limit 0
        const response = await fetch(`${PAYLOAD_CMS_URL}/api/blog-posts?limit=0`, {
            next: { revalidate: 10 },
        });
        return response.ok;
    } catch {
        return false;
    }
}
