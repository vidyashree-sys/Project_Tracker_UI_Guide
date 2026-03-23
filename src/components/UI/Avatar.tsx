import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  name: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = 24 }) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <div 
      className={styles.avatar} 
      style={{ width: size, height: size, fontSize: size / 2 }}
      title={name}
    >
      {initial}
    </div>
  );
};