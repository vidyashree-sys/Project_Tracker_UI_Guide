import { create } from 'zustand';

export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';
export type Status = 'To Do' | 'In Progress' | 'In Review' | 'Done';

export interface Task {
  id: string;
  title: string;
  status: Status;
  priority: Priority;
  assignee: string;
  dueDate: string;
  activeUsers?: string[];
}

interface TaskState {
  tasks: Task[];
  filteredTasks: Task[];
  view: 'kanban' | 'list' | 'timeline';
  filters: { priority: Priority[] };
  setTasks: (tasks: Task[]) => void;
  setView: (view: 'kanban' | 'list' | 'timeline') => void;
  updateTask: (id: string, status: Status) => void;
  setFilters: (priorities: Priority[]) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  filteredTasks: [],
  view: 'kanban',
  filters: { priority: [] },
  setTasks: (tasks) => set({ tasks, filteredTasks: tasks }),
  setView: (view) => set({ view }),
  updateTask: (id, status) => set((state) => {
    const updated = state.tasks.map(t => t.id === id ? { ...t, status } : t);
    return { tasks: updated, filteredTasks: updated };
  }),
  setFilters: (priorities) => set((state) => ({
    filters: { priority: priorities },
    filteredTasks: priorities.length > 0 
      ? state.tasks.filter(t => priorities.includes(t.priority)) 
      : state.tasks
  })),
}));