'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blog-data';

export type BlogGridProps = {
    title?: string;
    articles?: BlogPost[];
};

export function BlogGrid({
    title = "Latest Insights",
    articles = []
}: BlogGridProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Efficiency", "Payroll", "Automation"];

    const filteredArticles = activeCategory === "All"
        ? articles
        : articles.filter(article => article.category === activeCategory);

    return (
        <section className="py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Header & Filter */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#021A1F]">
                        {title}
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat
                                    ? "bg-[#218196] text-white"
                                    : "bg-gray-100 text-[#5B6A6D] hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {filteredArticles?.map((item, idx) => (
                        <Link
                            key={idx}
                            href={`/blog/${item.slug}`}
                            className="group block"
                        >
                            <div className="flex flex-col h-full">
                                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-sm">
                                    {typeof item.image === 'string' && item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : null}
                                </div>
                                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5B6A6D] mb-3">
                                    <span className="uppercase tracking-wider font-semibold text-[#218196]">{item.category}</span>
                                    <span className="w-px h-4 bg-gray-300"></span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#021A1F] leading-tight group-hover:text-[#218196] transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
