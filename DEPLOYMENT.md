# P&G Group Solar Calculator - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com with GitHub)

### Admin Credentials
- **Email:** admin@pnggroup.com
- **Password:** admin123

### Features
- ✅ Solar system calculator
- ✅ Product marketplace with SRNE products
- ✅ Admin panel for product management
- ✅ Authentication system
- ✅ Bilingual support (English/Spanish)
- ✅ Responsive design

### Deployment Steps

1. **Push to GitHub** (if not done yet)
2. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" and use GitHub
   - Click "Import Project"
   - Select this repository
   - Click "Deploy"

3. **Configuration:**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)
   - No environment variables needed

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Post-Deployment

Your app will be live at: `https://your-project.vercel.app`

**Note:** localStorage is used for:
- User authentication
- Product data
- Admin changes

This means each user's data is stored locally in their browser.

### Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Client-side authentication
