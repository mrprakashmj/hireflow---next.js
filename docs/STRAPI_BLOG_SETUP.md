# Strapi CMS Setup Guide for Blog Management

This guide explains how to set up Strapi CMS to manage blog posts dynamically.

## Prerequisites

- Strapi instance running (locally or deployed)
- Strapi API token with read permissions

## Configuration

The API is already configured in `.env.local`:
```bash
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token-here
```

## Strapi Content Type Setup

### 1. Create Blog Post Collection Type

In your Strapi admin panel (http://localhost:1337/admin):

1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it: `blog-post`

### 2. Add Fields

Add the following fields to your `blog-post` content type:

| Field Name | Type | Required | Notes |
|------------|------|----------|-------|
| `slug` | Text | Yes | Unique, used in URL |
| `title` | Text | Yes | Blog post title |
| `category` | Enumeration | Yes | Values: Automation, Efficiency, Payroll |
| `date` | Text | Yes | Format: "07 Nov 2025" |
| `subtitle` | Text | Yes | Short description |
| `overview` | Rich Text | Yes | Introduction paragraph |
| `obstacles` | JSON | Yes | Array of obstacle strings |
| `outcomes` | Rich Text | Yes | Benefits paragraph |
| `summary` | Rich Text | Yes | Conclusion paragraph |
| `image` | Media (Single) | No | Blog thumbnail image |
| `contentImage` | Media (Single) | No | Image in blog content |

### 3. Configure Obstacles Field

For the `obstacles` field (JSON type), use this format when creating blog posts:
```json
[
  "First obstacle description",
  "Second obstacle description",
  "Third obstacle description"
]
```

### 4. Set Permissions

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Under **Permissions** → **Blog-post**:
   - Enable `find` (get all posts)
   - Enable `findOne` (get single post)
3. Click **Save**

## Adding Blog Posts

### Via Strapi Admin Panel

1. Go to **Content Manager** → **Blog-post**
2. Click **Create new entry**
3. Fill in all fields:
   - **slug**: URL-friendly slug (e.g., `payroll-hr-with-automated-workforce-management`)
   - **title**: Full blog title
   - **category**: Select from dropdown
   - **date**: e.g., "07 Nov 2025"
   - **subtitle**: Short description
   - **overview**: Introduction paragraph
   - **obstacles**: JSON array of obstacles
   - **outcomes**: Benefits text
   - **summary**: Conclusion text
   - **image**: Upload thumbnail image (800x600 recommended)
   - **contentImage**: Upload content image (1600x900 recommended)
4. Click **Save**
5. Click **Publish**

### Sample Blog Post Data

```json
{
  "slug": "payroll-hr-with-automated-workforce-management",
  "title": "Payroll HR With Automated Workforce Management",
  "category": "Automation",
  "date": "07 Nov 2025",
  "subtitle": "Automated workforce management simplifies HR operations, boosts efficiency, and minimizes manual tasks.",
  "overview": "Handling a large workforce often brings complexity...",
  "obstacles": [
    "Managing schedules and shifts manually consumes significant time.",
    "Tracking attendance and leave requests is cumbersome and error-prone.",
    "Workforce data is often fragmented across different departments.",
    "Limited insights into employee performance and productivity hinder decision-making."
  ],
  "outcomes": "Our workforce management solutions drive measurable improvements...",
  "summary": "Manual payroll processes can create bottlenecks..."
}
```

## How It Works

### Data Flow

1. **Strapi CMS** → Blog posts are created/edited in Strapi admin panel
2. **API Fetch** → Next.js fetches data from Strapi API on build/request
3. **Fallback** → If Strapi is unavailable, local data is used
4. **Display** → Blog pages render with Strapi data

### Key Files

- `src/lib/strapi.ts` - Strapi API client
- `src/data/blog-data.ts` - Data layer with Strapi integration
- `.env.local` - Strapi configuration

### API Endpoints Used

- `GET /api/blog-posts?populate=*` - Get all blog posts
- `GET /api/blog-posts?filters[slug][$eq]=<slug>&populate=*` - Get post by slug
- `GET /api/blog-posts?filters[category][$eq]=<category>&populate=*` - Get posts by category

## Testing

### 1. With Local Data (Fallback)

If Strapi is not configured or unavailable, the system automatically falls back to local data in `src/data/blog-data.ts`.

### 2. With Strapi

1. Ensure Strapi is running: `http://localhost:1337`
2. Add blog posts via Strapi admin panel
3. Visit blog pages: `http://localhost:3000/blog`
4. Posts from Strapi will be displayed

## Verifying Integration

Check console logs for:
- ✅ **Success**: No errors = Strapi is working
- ⚠️ **Fallback**: "Falling back to local blog data" = Using local data

## Deployment

### Environment Variables

For production, update `.env.production`:
```bash
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your-production-api-token
```

### Image Handling

- Upload images to Strapi's media library
- Images will be served from Strapi URL
- Ensure Strapi is publicly accessible for image serving

## Benefits

✅ **Dynamic Content**: Edit blog posts without code deployments  
✅ **User-Friendly**: Non-technical users can manage content via Strapi UI  
✅ **Fallback Safety**: Local data ensures site works without Strapi  
✅ **Type-Safe**: Full TypeScript integration  
✅ **Real-time Updates**: Content changes reflect immediately
