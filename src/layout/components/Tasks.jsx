import Task from "./Task";

const Tasks = () => {
  const tasks = [
    {
      title: 'some task',
      id: 1,
      status: 'active',
    },
    {
      title: 'some task',
      id: 1,
      status: 'active',
    },
    {
      title: 'some task',
      id: 1,
      status: 'active',
    }
  ];
  return (
    <ul className="tasks__list">
      {tasks.map((task) => {
        return <Task key={task.id} {...task} />
      })}  
    </ul>
  );
};

export default Tasks;
