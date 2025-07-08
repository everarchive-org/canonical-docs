#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');

const OBSIDIAN_PATH = '/Users/grig/work/obsidian-vault/🧑‍🎨 Distributed Creatives/♾️ EverArchive/📚 Canonical Library';
const DOCS_PATH = './docs';

async function syncContent() {
  console.log('🔄 Syncing content from Obsidian to DocuSaurus...');
  
  // Clear existing docs except intro
  await fs.emptyDir(DOCS_PATH);
  
  // Copy and transform content
  const files = await glob('**/*.md', { cwd: OBSIDIAN_PATH });
  
  console.log(`📄 Found ${files.length} files to process`);
  
  for (const file of files) {
    const sourcePath = path.join(OBSIDIAN_PATH, file);
    const content = await fs.readFile(sourcePath, 'utf8');
    
    // Transform Obsidian content to DocuSaurus format
    const transformedContent = transformContent(content, file);
    
    // Create destination path
    const destPath = path.join(DOCS_PATH, transformPath(file));
    await fs.ensureDir(path.dirname(destPath));
    await fs.writeFile(destPath, transformedContent);
    
    console.log(`✅ Processed: ${file} → ${transformPath(file)}`);
  }
  
  // Create intro file
  await createIntroFile();
  
  console.log('✅ Content sync complete');
}

function transformContent(content, filename) {
  let transformed = content;
  
  // Convert [[wikilinks]] to [text](path)
  transformed = transformed.replace(/\[\[([^\]]+)\]\]/g, (match, link) => {
    const [file, display] = link.split('|');
    const linkPath = file.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    return `[${display || file}](${linkPath})`;
  });
  
  // Escape MDX problematic patterns
  // Escape standalone < and > that might be interpreted as JSX
  transformed = transformed.replace(/(\s)<(\d+)(\s)/g, '$1&lt;$2$3');
  transformed = transformed.replace(/(\s)>(\d+)(\s)/g, '$1&gt;$2$3');
  
  // Escape other problematic patterns for MDX
  transformed = transformed.replace(/<([^>]+)>/g, (match, content) => {
    // Only escape if it doesn't look like valid HTML/JSX
    if (!/^\/?\w+(\s|$)/.test(content) && !/^\w+\s+[^>]*$/.test(content)) {
      return `&lt;${content}&gt;`;
    }
    return match;
  });
  
  // Add frontmatter if not present
  if (!transformed.startsWith('---')) {
    const title = extractTitle(filename);
    const frontmatter = `---
title: ${title}
sidebar_position: ${getSidebarPosition(filename)}
---

`;
    transformed = frontmatter + transformed;
  }
  
  return transformed;
}

function transformPath(obsidianPath) {
  // Convert Obsidian path to DocuSaurus path
  let transformed = obsidianPath
    .replace(/^Tome I - The Vision\//, 'tome-i/')
    .replace(/^Tome II - The Architecture\//, 'tome-ii/')
    .replace(/^Tome III - The Operations\//, 'tome-iii/')
    .replace(/^Tome IV - The Implementation\//, 'tome-iv/')
    .replace(/^Features\//, 'features/')
    .replace(/^Software-Tools\//, 'tools/')
    .replace(/^Foundations\//, 'foundations/')
    .replace(/^00 - Master Index\.md$/, 'index.md')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-\/\.]/g, '');
  
  return transformed;
}

function extractTitle(filename) {
  const basename = path.basename(filename, '.md');
  // Remove number prefixes like "1.1 - " or "01-"
  return basename.replace(/^\d+\.?\d*\s*-\s*/, '').replace(/^README$/i, 'Overview');
}

function getSidebarPosition(filename) {
  // Extract number from filename for sidebar ordering
  const match = filename.match(/^(\d+\.?\d*)/);
  return match ? parseInt(match[1]) : 999;
}

async function createIntroFile() {
  const introContent = `---
title: Introduction
sidebar_position: 1
---

# EverArchive Canonical Library

Welcome to the EverArchive Canonical Library - the authoritative documentation for civilizational memory infrastructure.

## Navigation

- **[Tome I: The Vision](tome-i/manifesto)** - Core vision and manifesto
- **[Tome II: The Architecture](tome-ii/architecture)** - Technical specifications
- **[Tome III: The Operations](tome-iii/)** - Operational frameworks
- **[Tome IV: The Implementation](tome-iv/)** - Implementation guides
- **[Features](features/)** - Feature specifications
- **[Foundations](foundations/)** - Core concepts
- **[Software Tools](tools/)** - Tool documentation

## About EverArchive

EverArchive is non-profit infrastructure for preserving human creativity through the Deep Authorship model, capturing the complete creative process rather than just final outputs.
`;
  
  await fs.writeFile(path.join(DOCS_PATH, 'intro.md'), introContent);
}

if (require.main === module) {
  syncContent().catch(console.error);
}

module.exports = { syncContent };