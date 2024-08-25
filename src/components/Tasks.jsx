import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  return (
    <ul className="tasks__list">
      {tasks.length && tasks.map((task) => {
        return <Task key={task.id} {...task} />
      })}  
    </ul>
  );
};

export default Tasks;
