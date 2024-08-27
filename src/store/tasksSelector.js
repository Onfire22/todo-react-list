const tasksSelector = (state, type) => {
  switch (type) {
    case 'completed':
      return state.tasks.tasks.filter(task => task.completed);
    case 'active':
      return state.tasks.tasks.filter(task => !task.completed);
    case 'all':
    default:
      return state.tasks.tasks;
  }
};

export default tasksSelector;