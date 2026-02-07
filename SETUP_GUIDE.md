# Hire Flow - Complete Installation Guide

This guide covers setting up the Hire Flow Next.js application with Payload CMS on a new system.

## Prerequisites

Before starting, ensure you have installed:

- **Node.js** v18.x or higher ([Download](https://nodejs.org/))
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud)
- **Git** for cloning the repository

---

## Step 1: Clone the Repository

```bash
git clone <your-repo-url> hire-flow
cd hire-flow
```

---

## Step 2: Set Up the Main Next.js Application

### 2.1 Install Dependencies

```bash
npm install
```

### 2.2 Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# CMS Configuration
PAYLOAD_CMS_URL=http://localhost:3001
NEXT_PUBLIC_USE_DUMMY_DATA=false
```

### 2.3 Start the Application

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

---

## Step 3: Set Up the Payload CMS

### 3.1 Navigate to CMS Directory

```bash
cd cms
```

### 3.2 Install CMS Dependencies

```bash
npm install
```

### 3.3 Configure CMS Environment Variables

Create a `.env.local` file in the `cms` directory:

```env
# MongoDB Connection String
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/hire-flow-cms

# For MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/hire-flow-cms?retryWrites=true&w=majority

# Security
PAYLOAD_SECRET=your-super-secret-key-change-this-to-random-string

# Server
PORT=3001
```

> **Important:** Generate a strong random string for `PAYLOAD_SECRET` in production!

### 3.4 Create Uploads Directory

```bash
mkdir uploads
```

### 3.5 Start the CMS

```bash
npm run dev
```

The CMS admin panel will be available at: **http://localhost:3001/admin**

---

## Step 4: Create Admin User

1. Open **http://localhost:3001/admin**
2. You'll see the "Create First User" screen
3. Enter your email and password
4. Click **Create**

---

## Step 5: Create Blog Content

1. Go to **http://localhost:3001/admin**
2. Click **Blog Posts** → **Create New**
3. Fill in:
   - **Title**: Your blog title
   - **Slug**: URL-friendly version (e.g., `my-first-post`)
   - **Category**: Select or type a category
   - **Date**: Publication date
   - **Status**: Set to `Published` for it to appear on the website
   - **Image**: Upload a featured image
   - Fill other fields as needed
4. Click **Save**

---

## Running Both Servers

To run the complete application, you need **two terminal windows**:

### Terminal 1 - Main Website (Port 3000)
```bash
cd hire-flow
npm run dev
```

### Terminal 2 - CMS (Port 3001)
```bash
cd hire-flow/cms
npm run dev
```

---

## Production Deployment

### Build the Main Application

```bash
npm run build
npm start
```

### Build the CMS

```bash
cd cms
npm run build
npm start
```

---

## MongoDB Setup Options

### Option A: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/hire-flow-cms`

### Option B: MongoDB Atlas (Cloud) - Recommended

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with password
4. Get connection string from Atlas dashboard
5. Replace placeholders in your `.env.local`

---

## Troubleshooting

### Images Not Loading

- Ensure CMS is running on port 3001
- Check that images are uploaded in CMS admin
- Verify `PAYLOAD_CMS_URL` in `.env.local`

### Blog Posts Not Appearing

- Check that status is set to `Published` in CMS
- Ensure slug field is filled (lowercase, hyphens, no spaces)
- Restart the Next.js dev server

### CMS Not Starting

- Check MongoDB connection string
- Ensure MongoDB is running
- Check for errors in terminal

### 404 Errors on Blog Detail Pages

- Verify the slug matches exactly
- Slugs must be lowercase with hyphens (e.g., `web-development`)

---

## File Structure

```
hire-flow/
├── .env.local              # Main app environment
├── src/                    # Next.js source code
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── data/             # Data fetching
│   └── lib/              # Utilities (including payload.ts)
├── cms/                    # Payload CMS
│   ├── .env.local        # CMS environment
│   ├── src/
│   │   ├── collections/  # Content types (BlogPosts, Media, Users)
│   │   └── payload.config.ts
│   └── uploads/          # Uploaded media files
└── next.config.ts         # Next.js configuration
```

---

## Support

For issues or questions, please check:
- Payload CMS docs: https://payloadcms.com/docs
- Next.js docs: https://nextjs.org/docs
