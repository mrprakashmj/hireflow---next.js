import { BlogHero } from '@/components/BlogHero';
import { BlogGrid } from '@/components/BlogGrid';

import { getAllBlogPosts } from '@/data/blog-data';

export default async function BlogPage() {
    const posts = await getAllBlogPosts();

    return (
        <main>
            <BlogHero />
            <BlogGrid articles={posts} />

        </main>
    );
}
