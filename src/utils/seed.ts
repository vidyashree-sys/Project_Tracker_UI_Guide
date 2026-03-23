export const generateSeedData = () => {
  const priorities: any[] = ['Low', 'Medium', 'High', 'Critical'];
  const statuses: any[] = ['To Do', 'In Progress', 'In Review', 'Done'];
  
  return Array.from({ length: 500 }, (_, i) => ({
    id: `task-${i}`,
    title: `Technical Module ${i + 1}`,
    status: statuses[Math.floor(Math.random() * 4)],
    priority: priorities[Math.floor(Math.random() * 4)],
    assignee: 'User ' + (i % 5),
    dueDate: new Date(Date.now() + (Math.random() * 10 * 86400000)).toLocaleDateString(),
    collaborators: []
  }));
};