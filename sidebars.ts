import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Features Overview',
      items: [
        'features/features-overview',
        {
          type: 'category',
          label: 'Creative Control',
          items: [
            'features/creative-control/readme',
            'features/creative-control/proof-attribution/collaborative-attribution-tracking',
            'features/creative-control/proof-attribution/legal-evidence-infrastructure',
            'features/creative-control/privacy-control/zero-knowledge-creative-privacy',
            'features/creative-control/privacy-control/immutable-rights-registry',
            'features/creative-control/economic-returns/direct-author-royalties',
            'features/creative-control/economic-returns/instant-payment-settlement',
            'features/creative-control/legacy-governance/estate-planning-infrastructure',
          ],
        },
        {
          type: 'category',
          label: 'Preservation & Permanence',
          items: [
            'features/preservation-permanence/readme',
            'features/preservation-permanence/storage-architecture/blockchain-guaranteed-eternal-storage',
            'features/preservation-permanence/storage-architecture/triple-redundant-antifragile-architecture',
            'features/preservation-permanence/future-proofing/automatic-format-evolution-infrastructure',
            'features/preservation-permanence/verification-cost/one-time-payment-permanence',
          ],
        },
        {
          type: 'category',
          label: 'Research & Reproducibility',
          items: [
            'features/research-reproducibility/readme',
            'features/research-reproducibility/research-infrastructure/reproducibility-crisis-solution',
            'features/research-reproducibility/research-infrastructure/workflow-preservation-infrastructure',
            'features/research-reproducibility/institutional-integration/library-cost-reduction',
            'features/research-reproducibility/institutional-integration/standards-interoperability-without-lockin',
          ],
        },
        {
          type: 'category',
          label: 'Library & Book Ecosystem',
          items: [
            'features/library-book-ecosystem/readme',
            'features/library-book-ecosystem/user-experience/no-drm-frustration',
            'features/library-book-ecosystem/lending-infrastructure/time-locked-lending-infrastructure',
            'features/library-book-ecosystem/lending-infrastructure/automated-hold-waitlist-management',
          ],
        },
        {
          type: 'category',
          label: 'Economic Infrastructure',
          items: [
            'features/economic-infrastructure/readme',
            'features/economic-infrastructure/institutional-economics/endowment-model',
            'features/economic-infrastructure/network-sustainability/node-operator-network',
          ],
        },
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