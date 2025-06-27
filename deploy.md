# Portfolio Website Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository: `https://github.com/deepu1965/Portfolio.git`
   - Vercel will automatically detect it's a React app
   - Click "Deploy"
   - Your site will be live in minutes!

2. **Or deploy from command line:**
   ```bash
   cd /home/deepu/DSA/portfolio-website
   npx vercel
   ```
   - Follow the prompts
   - First time: it will ask you to login and configure
   - Your site will be deployed with a unique URL

### Option 2: Netlify (Also Free & Easy)

1. **Via GitHub:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

2. **Via Drag & Drop:**
   - Run `npm run build` locally
   - Go to [netlify.com](https://netlify.com)
   - Drag the `build` folder to the deploy area

### Option 3: GitHub Pages (Free)

1. **Setup:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://deepu1965.github.io/Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📝 Pre-deployment Checklist

- [ ] Add your images (`profilepic.jpeg`, `background.jpeg`) to `src/assets/`
- [ ] Test locally: `npm start`
- [ ] Build successfully: `npm run build`
- [ ] Update any personal information in the components
- [ ] Commit and push your changes to GitHub

## 🌟 Recommended Steps

1. **Push your code to GitHub** (if not already done)
2. **Use Vercel** for the easiest deployment
3. **Your site will be live** with a URL like: `your-project-name.vercel.app`

## 🔧 Custom Domain (Optional)

After deployment, you can add a custom domain:
- Buy a domain from any provider
- Add it in your deployment platform's settings
- Update DNS records as instructed

## 📞 Need Help?

If you encounter any issues:
1. Check the build logs in the deployment platform
2. Ensure all dependencies are in `package.json`
3. Make sure your images are in the correct location
4. Verify all imports are correct

Good luck with your deployment! 🚀
