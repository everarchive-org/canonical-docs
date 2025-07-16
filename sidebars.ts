import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tome I: The Vision',
      items: [
        'tome-i-the-vision/essence-and-vision',
        'tome-i-the-vision/the-everarchive-manifesto',
        'tome-i-the-vision/the-principles-of-deep-authorship',
        'tome-i-the-vision/current-state-roadmap-updated-july-2025',
      ],
    },
    {
      type: 'category',
      label: 'Tome II: The Architecture',
      items: [
        'tome-ii-the-architecture/canonical-architecture',
        'tome-ii-the-architecture/deep-authorship-package-technical-specification',
        'tome-ii-the-architecture/discovery-and-access-infrastructure',
        'tome-ii-the-architecture/creator-tools-framework',
      ],
    },
    {
      type: 'category',
      label: 'Tome III: The Operations',
      items: [
        'tome-iii-the-operations/governance-constitution',
        'tome-iii-the-operations/economic-framework',
        'tome-iii-the-operations/partnership-and-onboarding-protocol',
        'tome-iii-the-operations/community-stewardship-guide',
      ],
    },
    {
      type: 'category',
      label: 'Tome IV: The Implementation',
      items: [
        'tome-iv-the-implementation/project-and-product-roadmap',
        'tome-iv-the-implementation/communications-and-fundraising-kit',
        'tome-iv-the-implementation/research-and-gap-analysis-dossier',
        'tome-iv-the-implementation/market-analysis-and-positioning',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/features-overview',
      ],
    },
    {
      type: 'category',
      label: 'Foundations', 
      items: [
        'foundations/readme',
      ],
    },
  ],
};

export default sidebars;