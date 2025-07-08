import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tome I: The Vision',
      items: [
        '01-tome-i-the-vision/01-essence-and-vision',
        '01-tome-i-the-vision/02-the-everarchive-manifesto',
        '01-tome-i-the-vision/03-the-principles-of-deep-authorship',
        '01-tome-i-the-vision/04-current-state-roadmap-july-2025',
        '01-tome-i-the-vision/05-research-assets-index-july-2025',
      ],
    },
    {
      type: 'category',
      label: 'Tome II: The Architecture',
      items: [
        '02-tome-ii-the-architecture/01-canonical-architecture',
        '02-tome-ii-the-architecture/02-deep-authorship-package-technical-specification',
        '02-tome-ii-the-architecture/03-deep-authorship-object-format-summary-for-research',
        '02-tome-ii-the-architecture/04-discovery-and-access-infrastructure',
        '02-tome-ii-the-architecture/05-creator-tools-framework',
        {
          type: 'category',
          label: 'User Journeys & Lifecycle Models',
          items: [
            '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/00-overview-of-user-journeys',
            {
              type: 'category',
              label: 'Creator Journeys',
              items: [
                '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/01-creator-journeys/01-the-illustrators-journey-sunrise-over-neo-kyoto',
                '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/01-creator-journeys/02-the-musicians-journey-echo-in-the-static',
                '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/01-creator-journeys/03-the-developers-journey-project-chimera',
              ],
            },
            {
              type: 'category',
              label: 'Legacy & Institutional Journeys',
              items: [
                '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/02-legacy-and-institutional-journeys/01-the-da-vinci-journey-the-renaissance-master',
                '02-tome-ii-the-architecture/05-user-journeys-and-lifecycle-models/02-legacy-and-institutional-journeys/02-the-frida-kahlo-journey-the-modernist-painter',
              ],
            },
          ],
        },
        '02-tome-ii-the-architecture/06-standards-interoperability-strategy-for-dap-ecosystem',
        '02-tome-ii-the-architecture/07-data-layer-technical-specification',
      ],
    },
    {
      type: 'category',
      label: 'Tome III: The Operations',
      items: [
        '03-tome-iii-the-operations/01-governance-constitution',
        '03-tome-iii-the-operations/02-economic-framework',
        '03-tome-iii-the-operations/03-partnership-and-onboarding-protocol',
        '03-tome-iii-the-operations/04-community-stewardship-guide',
        '03-tome-iii-the-operations/05-resilience-and-recovery-plan',
        '03-tome-iii-the-operations/06-technical-evolution-framework',
        '03-tome-iii-the-operations/07-cultural-translation-guide',
        '03-tome-iii-the-operations/08-team-and-advisory-structure',
        '03-tome-iii-the-operations/09-legal-compliance-framework',
      ],
    },
    {
      type: 'category',
      label: 'Tome IV: The Implementation',
      items: [
        '04-tome-iv-the-implementation/01-project-and-product-roadmap',
        '04-tome-iv-the-implementation/02-communications-and-fundraising-kit',
        '04-tome-iv-the-implementation/03-research-and-gap-analysis-dossier',
        '04-tome-iv-the-implementation/04-market-analysis-and-positioning',
        '04-tome-iv-the-implementation/05-financial-projections-and-models',
        '04-tome-iv-the-implementation/06-strategic-implementation-guide',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/features-overview',
        {
          type: 'category',
          label: 'Creative Control',
          items: [
            {
              type: 'category',
              label: 'Proof & Attribution',
              items: [
                'features/01-creative-control/01-proof-attribution/01-biometric-proof-creative-origin',
                'features/01-creative-control/01-proof-attribution/02-legal-evidence-infrastructure',
                'features/01-creative-control/01-proof-attribution/03-authorship-verification',
                'features/01-creative-control/01-proof-attribution/04-collaborative-attribution-tracking',
              ],
            },
            {
              type: 'category',
              label: 'Privacy Control',
              items: [
                'features/01-creative-control/02-privacy-control/01-immutable-rights-registry',
                'features/01-creative-control/02-privacy-control/02-zero-knowledge-creative-privacy',
                'features/01-creative-control/02-privacy-control/03-key-recovery-success',
                'features/01-creative-control/02-privacy-control/04-platform-independent-work-portability',
                'features/01-creative-control/02-privacy-control/05-granular-process-revelation-control',
              ],
            },
            {
              type: 'category',
              label: 'Economic Returns',
              items: [
                'features/01-creative-control/03-economic-returns/01-direct-author-royalties',
                'features/01-creative-control/03-economic-returns/02-instant-payment-settlement',
                'features/01-creative-control/03-economic-returns/03-secondary-royalties-resales',
              ],
            },
            {
              type: 'category',
              label: 'Legacy Governance',
              items: [
                'features/01-creative-control/04-legacy-governance/01-estate-planning-infrastructure',
                'features/01-creative-control/04-legacy-governance/02-nonprofit-dao-governance',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Preservation & Permanence',
          items: [
            {
              type: 'category',
              label: 'Storage Architecture',
              items: [
                'features/02-preservation-permanence/01-storage-architecture/01-blockchain-guaranteed-eternal-storage',
                'features/02-preservation-permanence/01-storage-architecture/02-triple-redundant-antifragile-architecture',
                'features/02-preservation-permanence/01-storage-architecture/03-community-guaranteed-preservation-network',
                'features/02-preservation-permanence/01-storage-architecture/04-permanent-book-preservation',
              ],
            },
            {
              type: 'category',
              label: 'Future Proofing',
              items: [
                'features/02-preservation-permanence/02-future-proofing/01-post-quantum-encryption-future-proofing',
                'features/02-preservation-permanence/02-future-proofing/02-automatic-format-evolution-infrastructure',
                'features/02-preservation-permanence/02-future-proofing/03-civilization-bootstrap-recovery',
                'features/02-preservation-permanence/02-future-proofing/04-multi-century-format-research',
                'features/02-preservation-permanence/02-future-proofing/05-post-quantum-migration-planning',
              ],
            },
            {
              type: 'category',
              label: 'Verification & Cost',
              items: [
                'features/02-preservation-permanence/03-verification-cost/01-tamper-evident-verification-chain',
                'features/02-preservation-permanence/03-verification-cost/02-one-time-payment-permanence',
                'features/02-preservation-permanence/03-verification-cost/03-100x-cheaper-than-cloud-storage',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/readme',
        'foundations/01-deep-authorship-3-layer-model',
        'foundations/02-deep-authorship-package-dap-format',
        'foundations/03-storage-trinity-architecture',
        'foundations/04-schema-projector-framework',
        'foundations/05-creator-sovereignty',
        'foundations/06-infrastructure-not-platform',
        'foundations/07-process-over-product',
        'foundations/08-zero-knowledge-encryption-for-core-layer',
        'foundations/09-permanent-preservation-guarantee',
        'foundations/10-open-source-and-non-proprietary',
        'foundations/11-memory-vs-backup-paradigm',
        'foundations/12-civilizational-memory-infrastructure',
        'foundations/13-antifragility-design-philosophy',
        'foundations/14-progressive-trust-and-sovereignty',
        'foundations/15-digital-fragility-crisis-analysis',
        'foundations/16-canonical-library-features-discovery',
      ],
    },
    {
      type: 'category',
      label: 'Software Tools',
      items: [
        'software-tools/readme',
        'software-tools/01-content-projector',
        'software-tools/02-voice-capture',
        'software-tools/03-biometric-scanner',
        'software-tools/04-photoshop-plugin',
        'software-tools/05-ableton-plugin',
        'software-tools/06-developer-tools',
        'software-tools/07-mobile-app',
        'software-tools/08-text-editor',
        'software-tools/09-academic-suite',
        'software-tools/10-blockchain-interface',
        'software-tools/11-lab-notebook',
        'software-tools/12-podcast-studio',
        'software-tools/13-evernode-storage-manager',
        'software-tools/14-evercli-command-line-interface',
        'software-tools/15-everportal-web-portal',
        'software-tools/16-everscan',
        'software-tools/17-everscribe',
        'software-tools/18-eververse-spatial-explorer',
        'software-tools/19-everchrono-temporal-process-explorer',
      ],
    },
  ],
};

export default sidebars;
