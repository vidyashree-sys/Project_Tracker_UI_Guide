import { useState } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import { Badge } from '../UI/Badge';
import { Avatar } from '../UI/Avatar';
import styles from './VirtualList.module.css';

const ROW_H = 52; // Height of each row
const VIEW_H = 600; // Visible area height

export const VirtualList = () => {
  const { filteredTasks: tasks } = useTaskStore();
  const [scrollTop, setScrollTop] = useState(0);

  // Virtualization Logic
  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_H) - 5);
  const visibleCount = Math.ceil(VIEW_H / ROW_H) + 10;
  const visibleTasks = tasks.slice(startIndex, startIndex + visibleCount);

  return (
    <div className={styles.container}>
      {/* Sticky Table Header */}
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Task Name</div>
        <div className={styles.headerCell}>Status</div>
        <div className={styles.headerCell}>Priority</div>
        <div className={styles.headerCell}>Assignee</div>
        <div className={styles.headerCell}>Due Date</div>
      </div>

      <div 
        className={styles.viewport} 
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        <div style={{ height: tasks.length * ROW_H, position: 'relative' }}>
          <div style={{ transform: `translateY(${startIndex * ROW_H}px)`, position: 'absolute', width: '100%' }}>
            {visibleTasks.map(t => (
              <div key={t.id} className={styles.row}>
                <div className={styles.cellTitle}>{t.title}</div>
                <div className={styles.cellStatus}>
                   <span className={styles.statusPill}>{t.status}</span>
                </div>
                <div className={styles.cellPriority}>
                  <Badge type={t.priority} />
                </div>
                <div className={styles.cellAssignee}>
                  <Avatar name={t.assignee} size={24} />
                </div>
                <div className={styles.cellDate}>{t.dueDate}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};