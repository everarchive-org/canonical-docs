#!/bin/bash

# EverArchive Documentation Deployment Script
# This script builds and serves the documentation site

echo "🚀 EverArchive Documentation Deployment"
echo "======================================="

# Clean and build
echo "🧹 Cleaning previous build..."
npm run clear

echo "🔨 Building documentation site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📄 Documentation site ready:"
    echo "   - Build artifacts: ./build/"
    echo "   - Development server: npm run start"
    echo "   - Production serve: npm run serve"
    echo ""
    echo "🌐 To deploy to GitHub Pages:"
    echo "   npm run deploy"
else
    echo "❌ Build failed!"
    echo ""
    echo "🔍 Common issues to check:"
    echo "   - Missing markdown files referenced in sidebar"
    echo "   - MDX syntax errors in content files"
    echo "   - Broken internal links"
    echo ""
    echo "💡 Run 'npm run start' to test locally"
    exit 1
fi