import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';

import { BlogPosts } from './collections/BlogPosts';
import { Media } from './collections/Media';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    // Admin panel configuration
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- Hire Flow CMS',
        },
    },

    // Collections
    collections: [Users, BlogPosts, Media],

    // Database adapter - MongoDB
    db: mongooseAdapter({
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/hire-flow-cms',
    }),

    // Rich text editor
    editor: lexicalEditor(),

    // Secret for encrypting cookies and tokens
    secret: process.env.PAYLOAD_SECRET || 'your-super-secret-key-change-this',

    // TypeScript configuration
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
});
