# P&G Group - Solar Energy Solutions

A comprehensive solar energy calculator and product marketplace built with Next.js, featuring bilingual support (English/Spanish) and an admin panel for product management.

## 🌟 Features

- **Solar Calculator** - Calculate optimal solar system size based on consumption
- **Product Marketplace** - Browse and order SRNE solar products (panels, inverters, batteries, controllers)
- **Admin Panel** - Manage product catalog with full CRUD operations
- **Authentication System** - User login/signup with admin privileges
- **Bilingual** - Full Spanish and English support
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Project Gallery** - Showcase completed installations
- **Contact Form** - Get in touch with the team

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Admin Access

- **Email:** admin@pnggroup.com
- **Password:** admin123

Access the admin panel at `/admin` after logging in.

## 📦 Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Storage:** localStorage (client-side)

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy with one click

## 📂 Project Structure

```
app/
├── about/          # About Us page
├── admin/          # Admin panel for product management
├── calculator/     # Solar calculator
├── components/     # Reusable components
├── contact/        # Contact page
├── context/        # React Context (Auth, Language)
├── documentation/  # Technical documentation
├── gallery/        # Project gallery
├── login/          # Authentication page
├── products/       # Product marketplace
└── translations/   # i18n translations
```

## 🔧 Configuration

No environment variables required. All data is stored client-side using localStorage.

## 📝 License

Private project for P&G Group.

## 🤝 Support

For questions or support, visit the Contact page or reach out to the development team.
