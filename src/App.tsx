import React, { useEffect } from 'react';
import { useTaskStore } from './store/useTaskStore';
import { Kanban } from './components/Board/Kanban';
import { VirtualList } from './components/List/VirtualList';
import { Timeline } from './components/Timeline/Timeline';
import { FilterBar } from './components/UI/FilterBar';
import styles from './App.module.css';

const App: React.FC = () => {
  const { view, setView, setTasks } = useTaskStore();

  useEffect(() => {
    // Generate 500 tasks
    const data = Array.from({ length: 500 }, (_, i) => ({
      id: `task-${i}`,
      title: `System Module ${i + 1}`,
      status: (['To Do', 'In Progress', 'In Review', 'Done'][i % 4]) as any,
      priority: (['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)]) as any,
      assignee: `Dev ${i % 5}`,
      dueDate: 'Mar 25',
      activeUsers: i < 3 ? ['User B'] : []
    }));
    setTasks(data);

    // Sync URL
    const params = new URLSearchParams(window.location.search);
    const v = params.get('view') as any;
    if (v) setView(v);
  }, [setTasks, setView]);

  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <div className={styles.logo}>ProjectOS</div>
        <div className={styles.tabs}>
          <button onClick={() => setView('kanban')} className={view === 'kanban' ? styles.active : ''}>Kanban</button>
          <button onClick={() => setView('list')} className={view === 'list' ? styles.active : ''}>List</button>
          <button onClick={() => setView('timeline')} className={view === 'timeline' ? styles.active : ''}>Timeline</button>
        </div>
      </nav>
      <FilterBar />
      <main className={styles.content}>
        {view === 'kanban' && <Kanban />}
        {view === 'list' && <VirtualList />}
        {view === 'timeline' && <Timeline />}
      </main>
    </div>
  );
};

export default App;