'use client';
import styles from '@/styles/input.module.scss';

type Props = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  
};

export default function Input({ value, onChange, placeholder, error }: Props) {
  return (
    <input
      type="tel"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={error ? `${styles.input} ${styles.error}` : styles.input}
    />
  );
}
