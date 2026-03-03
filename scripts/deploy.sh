#!/bin/bash

# Region Systems & Automations - Deployment Script
# This script helps deploy the website to Vercel

echo "🚀 Region Systems & Automations - Deployment Script"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please log in to Vercel..."
    vercel login
fi

# Build the project locally first
echo "🔨 Building project locally..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Local build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Set up environment variables in Vercel dashboard:"
echo "   - SMTP_HOST"
echo "   - SMTP_PORT" 
echo "   - SMTP_USER"
echo "   - SMTP_PASS"
echo "   - SMTP_FROM"
echo "   - CONTACT_EMAIL"
echo ""
echo "2. Test the contact form functionality"
echo "3. Update DNS settings to point to Vercel (if using custom domain)"
echo ""
echo "🎉 Your website is now live!"

