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
  
  // Handle special cases
  if (basename.toLowerCase() === 'readme') {
    return 'Overview';
  }
  
  // Remove number prefixes like "1.1 - " or "01-"
  let title = basename.replace(/^\d+\.?\d*\s*-\s*/, '');
  
  // Convert kebab-case and snake_case to Title Case
  title = title
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\bAnd\b/g, 'and')
    .replace(/\bThe\b/g, 'the')
    .replace(/\bOf\b/g, 'of')
    .replace(/\bFor\b/g, 'for')
    .replace(/\bIn\b/g, 'in')
    .replace(/\bTo\b/g, 'to')
    .replace(/\bA\b/g, 'a')
    .replace(/\bAn\b/g, 'an');
  
  // Handle specific acronyms and technical terms
  title = title
    .replace(/\bDap\b/g, 'DAP')
    .replace(/\bApi\b/g, 'API')
    .replace(/\bUi\b/g, 'UI')
    .replace(/\bUx\b/g, 'UX')
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bQr\b/g, 'QR')
    .replace(/\bCli\b/g, 'CLI')
    .replace(/\bSdk\b/g, 'SDK')
    .replace(/\bHttp\b/g, 'HTTP')
    .replace(/\bJson\b/g, 'JSON')
    .replace(/\bXml\b/g, 'XML')
    .replace(/\bCss\b/g, 'CSS')
    .replace(/\bHtml\b/g, 'HTML')
    .replace(/\bJs\b/g, 'JavaScript')
    .replace(/\bTs\b/g, 'TypeScript')
    .replace(/\bQc\b/g, 'QC')
    .replace(/\bDao\b/g, 'DAO')
    .replace(/\bNft\b/g, 'NFT')
    .replace(/\bIpfs\b/g, 'IPFS')
    .replace(/\bP2p\b/g, 'P2P')
    .replace(/\bZk\b/g, 'Zero-Knowledge')
    .replace(/\bDrm\b/g, 'DRM')
    .replace(/\bGdpr\b/g, 'GDPR')
    .replace(/\bCcpa\b/g, 'CCPA')
    .replace(/\bIls\b/g, 'ILS')
    .replace(/\bPov\b/g, 'POV')
    .replace(/\bRoi\b/g, 'ROI')
    .replace(/\bMlk\b/g, 'MLK')
    .replace(/\bR1\b/g, 'R1')
    .replace(/\bEverarchive\b/g, 'EverArchive')
    .replace(/\bNeo Kyoto\b/g, 'Neo-Kyoto')
    .replace(/\bVcs\b/g, 'VCs')
    .replace(/\bIii\b/g, 'III')
    .replace(/\bIi\b/g, 'II')
    .replace(/\bIv\b/g, 'IV');
  
  // Capitalize first letter
  title = title.charAt(0).toUpperCase() + title.slice(1);
  
  return title;
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