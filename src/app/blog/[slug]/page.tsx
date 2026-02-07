import { notFound } from 'next/navigation';

import { BlogDetailHero } from '@/components/BlogDetailHero';
import { BlogContent } from '@/components/BlogContent';
import { RelatedPosts } from '@/components/RelatedPosts';
import { BlogCTA } from '@/components/BlogCTA';
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from '@/data/blog-data';

// Allow dynamic rendering for CMS content
export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = await getRelatedPosts(post.slug, post.category, 3);

    return (
        <main>

            <BlogDetailHero
                title={post.title}
                category={post.category}
                date={post.date}
                subtitle={post.subtitle}
                image={post.image}
            />
            <BlogContent
                overview={post.overview}
                obstacles={post.obstacles}
                outcomes={post.outcomes}
                summary={post.summary}
                contentImage={post.contentImage}
            />
            <RelatedPosts posts={relatedPosts} />
            <BlogCTA />

        </main>
    );
}

// Generate static params for all blog posts (includes both CMS and local posts)
export async function generateStaticParams() {
    try {
        const posts = await getAllBlogPosts();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch {
        // Return empty array if fetching fails, allowing dynamic rendering
        return [];
    }
}
