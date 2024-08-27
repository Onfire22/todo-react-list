import { useSelector } from "react-redux";
import Task from "./Task";
import tasksSelector from "../store/tasksSelector";

const Tasks = () => {
  const filter = useSelector(state => state.filter);
  const tasks = useSelector(state => tasksSelector(state, filter));
  
  return (
    <>
      {!!tasks.length && <ul className="tasks__list">
        {tasks.map((task) => {
          return <Task key={task.id} {...task} />
        })}
      </ul>}
    </>
  );
};

export default Tasks;
