import { useState } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import { Avatar } from '../UI/Avatar';
import { Badge } from '../UI/Badge';
import type { Status } from '../../store/useTaskStore';
import styles from './Kanban.module.css';

const COLUMNS: Status[] = ['To Do', 'In Progress', 'In Review', 'Done'];

export const Kanban = () => {
  const { filteredTasks, updateTask } = useTaskStore();
  const [draggedId, setDraggedId] = useState<string | null>(null);

  return (
    <div className={styles.board}>
      {COLUMNS.map(col => (
        <div 
          key={col} 
          className={styles.column}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => draggedId && updateTask(draggedId, col)}
        >
          <div className={styles.header}>{col}</div>
          {filteredTasks.filter(t => t.status === col).map(task => (
            <div 
              key={task.id} 
              draggable 
              onDragStart={() => setDraggedId(task.id)}
              className={styles.card}
            >
              <div className={styles.topRow}>
                <Badge type={task.priority} />
                <div className={styles.presence}>
                  {task.activeUsers?.map(u => <div key={u} className={styles.pulseDot} title={`${u} viewing`} />)}
                </div>
              </div>
              <p className={styles.title}>{task.title}</p>
              <div className={styles.footer}>
                <Avatar name={task.assignee} size={20} />
                <span className={styles.date}>{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};