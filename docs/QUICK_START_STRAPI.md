# Quick Start: Add Blog Data to Strapi Manually

Since the automatic migration is encountering schema issues, here's the fastest way to add your blog data to Strapi:

## Option 1: Via Strapi Admin Panel (Recommended)

### Access Strapi Admin
1. Go to: http://localhost:1337/admin
2. Login with your credentials
3. Navigate to: **Content Manager** → **Blog** (from left sidebar)

### Add First Blog Post

Click **"Create new entry"** and fill in these fields:

**Blog Post 1:**
- **slug**: `payroll-hr-with-automated-workforce-management`
- **title**: `Payroll HR With Automated Workforce Management`
- **category**: `Automation`  
- **date**: `07 Nov 2025`
- **subtitle**: `Automated workforce management simplifies HR operations, boosts efficiency, and minimizes manual tasks.`
- **overview**: 
  ```
 Handling a large workforce often brings complexity, as manual processes can create errors, delays, and inefficiencies. Our Automated Workforce Management platform streamlines HR tasks, ensures compliance, and enhances employee satisfaction. Automating shift planning, attendance monitoring, and task coordination allows businesses to save time, cut costs, and maximize workforce efficiency.
  ```
- **obstacles**: (if it's a JSON field, paste this; if separate text fields, add one by one)
  ```json
  ["Managing schedules and shifts manually consumes significant time.", "Tracking attendance and leave requests is cumbersome and error-prone.", "Workforce data is often fragmented across different departments.", "Limited insights into employee performance and productivity hinder decision-making."]
  ```
- **outcomes**: 
  ```
  Our workforce management solutions drive measurable improvements across all HR operations. Automating schedules, attendance, and task management reduces errors and boosts efficiency. Companies gain clear visibility into employee performance, enabling smarter workforce planning.
  ```
- **summary**:
  ```
  Manual payroll processes can create bottlenecks, inaccuracies, and inefficiencies. Our Payroll Management Services streamline operations, ensure compliance, and bring peace of mind.
  ```

**Save and Publish** the entry.

### Repeat for Remaining 5 Posts

Use the data from `docs/BLOG_DATA_MIGRATION.md` for the other 5 blog posts.

## Option 2: Check Strapi Schema First

Before adding data, verify what fields are actually required:

1. Go to: http://localhost:1337/admin/content-manager/collection-types/api::blog.blog
2. Click "Create new entry"
3. Note which fields appear in the form
4. Match those fields with the data provided

## After Adding Posts

1. **Publish**: Make sure to click "Publish" on each post
2. **Test**: Visit http://localhost:3000/blog to see them appear
3. **Verify**: Posts should now load from Strapi instead of local data

## Troubleshooting

**Posts not appearing on website:**
- Check they are "Published" not "Draft"
- Verify permissions: Settings → Roles → Public → Blog → Enable `find` and `findOne`
- Check browser console for errors

**Different field names in Strapi:**
- The integration expects: `slug`, `title`, `category`, `date`, `subtitle`, `overview`, `obstacles`, `outcomes`, `summary`
- If your Strapi has different field names, we'll need to update the transformation function

## Need Help?

If the fields don't match or you need help mapping the data, share a screenshot of the "Create new entry" form and I'll update the integration accordingly.
