import { useLayoutEffect } from 'react';
import styles from './vacancy-card.module.scss';

export const CandidateCard = () => {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.src = `http://localhost:8012/candidate-view-entry.iife.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.candidateCard}>
      <span>candidate-card</span>
      <candidate-view />
    </div>
  );
};
