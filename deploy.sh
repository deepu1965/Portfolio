#!/bin/bash

# Portfolio Website Deployment Script
# Make sure you're in the portfolio-website directory

echo "🚀 Starting Portfolio Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in portfolio-website directory"
    echo "Please run: cd /home/deepu/DSA/portfolio-website"
    exit 1
fi

echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌟 Your portfolio is ready for deployment!"
    echo ""
    echo "Choose your deployment option:"
    echo "1. Vercel (Recommended - Easiest)"
    echo "2. GitHub Pages"
    echo "3. Netlify"
    echo ""
    
    read -p "Enter your choice (1-3): " choice
    
    case $choice in
        1)
            echo "🚀 Deploying to Vercel..."
            npx vercel
            echo "✅ Deployment complete! Your site is live!"
            ;;
        2)
            echo "🚀 Deploying to GitHub Pages..."
            echo "Make sure you've pushed your code to GitHub first!"
            npm run deploy
            echo "✅ Deployment complete! Your site will be live at:"
            echo "https://deepu1965.github.io/Portfolio"
            ;;
        3)
            echo "📁 For Netlify deployment:"
            echo "1. Go to https://netlify.com"
            echo "2. Sign up with GitHub"
            echo "3. Create new site from Git"
            echo "4. Choose your repository"
            echo "5. Build command: npm run build"
            echo "6. Publish directory: build"
            echo "7. Click Deploy!"
            ;;
        *)
            echo "❌ Invalid choice. Please run the script again."
            ;;
    esac
else
    echo "❌ Build failed. Please fix the errors and try again."
fi
