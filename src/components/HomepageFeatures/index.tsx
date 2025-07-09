import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Deep Authorship Model',
    description: (
      <>
        Capture the complete creative process, not just final outputs. Preserve the journey, 
        decisions, iterations, and insights that lead to creation - building humanity's 
        most comprehensive creative memory.
      </>
    ),
  },
  {
    title: 'Permanent Preservation',
    description: (
      <>
        Infrastructure designed for centuries, not quarters. Triple-redundant architecture, 
        post-quantum encryption, and decentralized storage ensure your work survives 
        technological and civilizational changes.
      </>
    ),
  },
  {
    title: 'Creator Sovereignty',
    description: (
      <>
        You own your work completely. Zero-knowledge privacy, granular access controls, 
        and platform-independent formats mean no corporation or government can alter, 
        censor, or monetize your creativity without permission.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
