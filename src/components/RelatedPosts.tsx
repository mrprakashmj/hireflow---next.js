import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-data';

export type RelatedPostsProps = {
    posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
    if (posts.length === 0) return null;

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[#FFF2EB]">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#021A1F] mb-4">
                        Access More Research
                    </h2>
                    <Link
                        href="/blog"
                        className="text-[#218196] hover:text-[#085263] transition-colors font-medium"
                    >
                        View All Insights →
                    </Link>
                </div>

                {/* Related Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">

                                {/* Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    {post.image && (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5B6A6D] mb-3">
                                        <span className="uppercase tracking-wider font-semibold text-[#218196]">
                                            {post.category}
                                        </span>
                                        <span className="w-px h-4 bg-gray-300"></span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#021A1F] leading-tight group-hover:text-[#218196] transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
