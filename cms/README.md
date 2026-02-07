# Hire Flow CMS

Payload CMS backend for managing blog content.

## Prerequisites

- **Node.js** 18+ installed
- **MongoDB** - Either:
  - Local MongoDB installation, OR
  - [MongoDB Atlas](https://www.mongodb.com/atlas) free tier account

## Quick Start

### 1. Install Dependencies

```bash
cd cms
npm install
```

### 2. Configure Environment

Edit `.env.local` with your settings:

```env
# MongoDB Connection
# For MongoDB Atlas, use your connection string from Atlas dashboard
MONGODB_URI=mongodb://localhost:27017/hire-flow-cms

# Change this to a secure random string!
PAYLOAD_SECRET=your-super-secret-key-change-this

# Server port
PORT=3001
```

### 3. Start the CMS

```bash
npm run dev
```

### 4. Create Admin User

1. Open http://localhost:3001/admin
2. Create your first admin account
3. Start creating blog posts!

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/blog-posts` | List all blog posts |
| `GET /api/blog-posts?where[slug][equals]=my-post` | Get post by slug |
| `GET /api/media` | List all media files |
| `GET /health` | Health check endpoint |

## Blog Post Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | Text | Yes | Post title |
| slug | Text | Yes | URL-friendly identifier (auto-generated) |
| category | Select | Yes | Automation, Efficiency, Payroll, etc. |
| date | Date | Yes | Publication date |
| status | Select | Yes | Draft or Published |
| subtitle | Textarea | Yes | Brief description for cards |
| image | Upload | Yes | Featured image |
| overview | Textarea | Yes | Main overview section |
| obstacles | Array | No | List of challenges/obstacles |
| outcomes | Textarea | Yes | Outcomes section |
| summary | Textarea | Yes | Post summary |
| contentImage | Upload | No | Optional content area image |

## Production Build

```bash
# Build both Payload and server
npm run build

# Start production server
npm run serve
```

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running (`mongod` command)
- Check your connection string in `.env.local`
- For Atlas, ensure your IP is whitelisted

### Port Already in Use

Change the `PORT` value in `.env.local` to an available port.
