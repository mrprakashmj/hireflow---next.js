/**
 * Focused diagnostic script for Strapi image paths
 */
require('dotenv').config({ path: '.env.local' });

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

async function diagnose() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
            headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
        });
        const result = await response.json();

        if (result.data && result.data.length > 0) {
            const post = result.data[0];
            console.log('--- BLOG POST DIAGNOSTICS ---');
            console.log('Title:', post.title);
            console.log('Image Field Type:', typeof post.image);
            console.log('Image Field Content:', JSON.stringify(post.image, null, 2));
            console.log('ContentImage Field Content:', JSON.stringify(post.contentImage, null, 2));
            console.log('-----------------------------');
        } else {
            console.log('No blogs found to diagnose.');
        }
    } catch (e) {
        console.error('Error:', e.message);
    }
}
diagnose();
