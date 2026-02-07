import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media',
    },
    access: {
        read: () => true, // Public read access for images
    },
    upload: {
        staticDir: 'uploads',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 800,
                height: 600,
                position: 'centre',
            },
            {
                name: 'hero',
                width: 1600,
                height: 900,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            label: 'Alt Text',
            admin: {
                description: 'Describe this image for accessibility',
            },
        },
        {
            name: 'caption',
            type: 'text',
            label: 'Caption',
            admin: {
                description: 'Optional caption for the image',
            },
        },
    ],
};
