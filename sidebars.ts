import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/features-overview',
        {
          type: 'category',
          label: 'Creative Control',
          items: [
            'features/creative-control/readme',
            'features/creative-control/proof-attribution/collaborative-attribution-tracking',
            'features/creative-control/privacy-control/zero-knowledge-creative-privacy',
            'features/creative-control/economic-returns/direct-author-royalties',
          ],
        },
        {
          type: 'category',
          label: 'Preservation & Permanence', 
          items: [
            'features/preservation-permanence/readme',
            'features/preservation-permanence/storage-architecture/blockchain-guaranteed-eternal-storage',
            'features/preservation-permanence/future-proofing/automatic-format-evolution-infrastructure',
          ],
        },
        {
          type: 'category',
          label: 'Research & Reproducibility',
          items: [
            'features/research-reproducibility/readme',
            'features/research-reproducibility/research-infrastructure/reproducibility-crisis-solution',
            'features/research-reproducibility/institutional-integration/library-cost-reduction',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/antifragility-design-philosophy',
        'foundations/civilizational-memory-infrastructure',
        'foundations/creator-sovereignty',
        'foundations/deep-authorship-3-layer-model',
      ],
    },
  ],
};

export default sidebars;