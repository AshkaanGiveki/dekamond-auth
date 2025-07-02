'use client';
import styles from '@/styles/button.module.scss';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
