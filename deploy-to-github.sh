#!/bin/bash

# EverArchive Documentation GitHub Pages Deployment Script
# This script builds and deploys the documentation to GitHub Pages

echo "🚀 EverArchive Documentation - GitHub Pages Deployment"
echo "======================================================"

# Check if we're in the right directory
if [[ ! -f "docusaurus.config.ts" ]]; then
    echo "❌ Error: Run this script from the canonical-docs directory"
    exit 1
fi

# Check if we're in a git repository
if [[ ! -d ".git" ]]; then
    echo "❌ Error: Not in a git repository. Initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/everarchive-org/canonical-docs.git"
    exit 1
fi

# Check git status
echo "🔍 Checking git status..."
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 You have uncommitted changes. Committing them first..."
    git add .
    git commit -m "Update documentation content before deployment"
fi

# Build the site
echo "🔨 Building documentation site..."
npm run build

if [[ $? -ne 0 ]]; then
    echo "❌ Build failed! Check the errors above."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
echo "   Target: https://docs.everarchive.org"
echo "   Repository: https://github.com/everarchive-org/canonical-docs"

# Use docusaurus deploy command
npm run deploy

if [[ $? -eq 0 ]]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "   Your site should be available at: https://docs.everarchive.org"
    echo "   Note: DNS changes may take a few minutes to propagate"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Verify the site loads at https://docs.everarchive.org"
    echo "   2. Set up your DNS CNAME record to point to: everarchive-org.github.io"
    echo "   3. Configure GitHub Pages settings to use the custom domain"
else
    echo "❌ Deployment failed!"
    echo ""
    echo "🔧 Common solutions:"
    echo "   1. Check your GitHub authentication (gh auth login)"
    echo "   2. Verify repository permissions"
    echo "   3. Ensure the repository exists: https://github.com/everarchive-org/canonical-docs"
    exit 1
fi