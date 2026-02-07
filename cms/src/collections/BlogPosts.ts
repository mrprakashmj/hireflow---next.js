import type { CollectionConfig } from 'payload';

export const BlogPosts: CollectionConfig = {
    slug: 'blog-posts',
    labels: {
        singular: 'Blog Post',
        plural: 'Blog Posts',
    },
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'date', 'status'],
        listSearchableFields: ['title', 'category', 'subtitle'],
    },
    access: {
        read: () => true, // Public read access for blog posts
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Title',
            admin: {
                description: 'The main title of the blog post',
            },
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            label: 'Slug',
            admin: {
                description: 'URL-friendly identifier (auto-generated from title)',
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }: { value?: string; data?: { title?: string } }) => {
                        // Auto-generate slug from title if not provided
                        if (!value && data?.title) {
                            return data.title
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)/g, '');
                        }
                        return value;
                    },
                ],
            },
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            label: 'Category',
            options: [
                { label: 'Automation', value: 'Automation' },
                { label: 'Efficiency', value: 'Efficiency' },
                { label: 'Payroll', value: 'Payroll' },
                { label: 'HR Management', value: 'HR Management' },
                { label: 'Technology', value: 'Technology' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'date',
            type: 'date',
            required: true,
            label: 'Publication Date',
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'dd MMM yyyy',
                },
                position: 'sidebar',
            },
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
            ],
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'subtitle',
            type: 'textarea',
            required: true,
            label: 'Subtitle',
            admin: {
                description: 'A brief description shown in blog cards',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Featured Image',
            admin: {
                description: 'Main image shown on blog cards and hero section',
            },
        },
        {
            name: 'overview',
            type: 'textarea',
            required: true,
            label: 'Overview',
            admin: {
                description: 'The main overview/introduction section',
                rows: 6,
            },
        },
        {
            name: 'obstacles',
            type: 'array',
            label: 'Obstacles / Challenges',
            minRows: 1,
            admin: {
                description: 'List of obstacles or challenges addressed',
            },
            fields: [
                {
                    name: 'point',
                    type: 'text',
                    required: true,
                    label: 'Obstacle Point',
                },
            ],
        },
        {
            name: 'outcomes',
            type: 'textarea',
            required: true,
            label: 'Outcomes',
            admin: {
                description: 'The outcomes/results section',
                rows: 6,
            },
        },
        {
            name: 'summary',
            type: 'textarea',
            required: true,
            label: 'Summary',
            admin: {
                description: 'Final summary of the blog post',
                rows: 4,
            },
        },
        {
            name: 'contentImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Content Image',
            admin: {
                description: 'Optional image displayed within the content area',
            },
        },
    ],
};
