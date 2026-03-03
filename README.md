# Region Systems & Automations Website

A complete, production-ready website for Region Systems & Automations, an AI consulting and automation integration business. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist aesthetic with deep navy, white, and blue color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Working Contact Form**: Integrated email functionality with auto-responses
- **Fast Performance**: Optimized images, lazy loading, and efficient code
- **Accessibility**: WCAG compliant with proper focus management and screen reader support

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js 13+ app directory
│   │   ├── about/         # About Us page
│   │   ├── contact/       # Contact page
│   │   ├── services/      # Services page
│   │   ├── api/           # API routes
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global styles
│   └── components/        # Reusable components
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       └── ContactForm.tsx
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── vercel.json           # Deployment configuration
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Next.js API Routes (serverless)
- **Email**: Nodemailer for contact form submissions
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/region-systems-website.git
   cd region-systems-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   # Email Configuration for Contact Form
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM="Region Systems & Automations" <noreply@regionsystems.com>
   CONTACT_EMAIL=contact@regionsystems.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form requires email configuration. Here are setup instructions for common providers:

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account → Security → App passwords
3. Use your Gmail address as `SMTP_USER` and the app password as `SMTP_PASS`

### Custom SMTP Setup
Update the environment variables with your SMTP provider's settings:
- `SMTP_HOST`: Your SMTP server hostname
- `SMTP_PORT`: Usually 587 for TLS or 465 for SSL
- `SMTP_USER`: Your SMTP username
- `SMTP_PASS`: Your SMTP password

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Set Environment Variables**
   In your Vercel dashboard, go to your project settings and add the environment variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_EMAIL`

### Deploy to Other Platforms

The project can also be deployed to:
- **Netlify**: Use the build command `npm run build` and publish directory `.next`
- **AWS Amplify**: Connect your repository and use the default Next.js build settings
- **Digital Ocean App Platform**: Use the Next.js app template

## 🎨 Customization

### Color Palette
The design uses a carefully crafted color palette defined in `tailwind.config.js`:
- **Navy**: Primary brand color (#0f172a to #1e293b)
- **Accent Blue**: Call-to-action color (#3b82f6 to #2563eb)
- **Supporting Colors**: Grays and subtle blues for backgrounds

### Typography
- **Font**: Inter (loaded from Google Fonts)
- **Hierarchy**: Consistent type scale with proper font weights

### Components
All components are built with:
- **Responsive design**: Mobile-first approach
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized re-renders and lazy loading

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with compelling value proposition
- Services overview with clear CTAs
- Trust indicators and social proof
- Client testimonials
- Call-to-action section

### About Us (`/about`)
- Company mission and vision
- Core values and differentiators
- Team member profiles
- Company timeline and milestones

### Services (`/services`)
- Detailed service offerings
- Industry expertise showcase
- Process overview
- Pricing and timeline information

### Contact (`/contact`)
- Comprehensive contact form
- Multiple contact methods
- FAQ section
- Auto-response email system

## 🔍 SEO Features

- **Meta Tags**: Complete title, description, and keyword optimization
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions

## 🛡️ Security Features

- **Content Security Policy**: XSS protection headers
- **CORS**: Proper cross-origin resource sharing
- **Input Validation**: Server-side form validation
- **Rate Limiting**: API endpoint protection (recommended for production)

## 📱 Responsive Design

The website is fully responsive across all device sizes:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Code Structure
- **Components**: Reusable UI components in `/src/components`
- **Pages**: Next.js app router pages in `/src/app`
- **Styles**: Global styles and Tailwind configuration
- **API**: Serverless functions in `/src/app/api`

## 📞 Support

For questions about implementation or customization:
- Review the code documentation and comments
- Check the Next.js documentation
- Contact support for specific business requirements

## 📄 License

This project is proprietary and confidential. All rights reserved by Region Systems & Automations.

---

## 🎯 Business Impact

This website is designed to:
- **Generate Leads**: Optimized conversion funnels
- **Build Trust**: Professional design and social proof
- **Educate Prospects**: Clear service explanations
- **Facilitate Contact**: Multiple touchpoints and easy forms
- **Support Growth**: Scalable architecture and SEO foundation

The modern, professional design reflects the company's expertise in AI and automation while making complex services accessible to potential clients.

