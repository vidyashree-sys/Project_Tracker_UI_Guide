import { useEffect } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import type { Priority } from '../../store/useTaskStore';
import styles from './FilterBar.module.css';

const PRIORITIES: Priority[] = ['Low', 'Medium', 'High', 'Critical'];

export const FilterBar = () => {
  const { filters, setFilters } = useTaskStore();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (filters.priority.length > 0) {
      params.set('priority', filters.priority.join(','));
    } else {
      params.delete('priority');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [filters.priority]);

  const toggle = (p: Priority) => {
    const next = filters.priority.includes(p)
      ? filters.priority.filter(x => x !== p)
      : [...filters.priority, p];
    setFilters(next);
  };

  return (
    <div className={styles.bar}>
      <span className={styles.label}>Filters:</span>
      {PRIORITIES.map(p => (
        <button 
          key={p} 
          className={filters.priority.includes(p) ? styles.active : styles.inactive}
          onClick={() => toggle(p)}
        >
          {p}
        </button>
      ))}
      {filters.priority.length > 0 && (
        <button className={styles.clear} onClick={() => setFilters([])}>Reset</button>
      )}
    </div>
  );
};