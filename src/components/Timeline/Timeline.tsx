import { useTaskStore } from '../../store/useTaskStore';
import styles from './Timeline.module.css';

export const Timeline = () => {
  const { filteredTasks } = useTaskStore();
  
  // Create a simple date scale for March 2026
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.dateHeader}>
        <div className={styles.labelSpacer}>Task Name</div>
        <div className={styles.daysRow}>
          {days.map(d => (
            <div key={d} className={styles.dayCol}>
              <span className={styles.dayNum}>{d}</span>
              <span className={styles.month}>Mar</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rowsContainer}>
        {filteredTasks.slice(0, 50).map((t, i) => (
          <div key={t.id} className={styles.row}>
            <div className={styles.taskLabel}>{t.title}</div>
            <div className={styles.track}>
              <div 
                className={styles.bar} 
                style={{ 
                  left: `${(i % 15) * 30}px`, 
                  width: '120px' 
                }}
              >
                {t.priority}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};