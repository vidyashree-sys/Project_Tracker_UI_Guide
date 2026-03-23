import React from 'react';
import styles from './Badge.module.css';
// Using 'import type' ensures the compiler treats this as a TS interface only
import type { Priority } from '../../store/useTaskStore';

interface BadgeProps {
  type: Priority;
}

export const Badge: React.FC<BadgeProps> = ({ type }) => {
  // We use toLowerCase to match the CSS class names
  const styleClass = styles[type.toLowerCase() as keyof typeof styles];
  
  return (
    <span className={`${styles.badge} ${styleClass}`}>
      {type}
    </span>
  );
};