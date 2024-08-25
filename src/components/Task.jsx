import { useDispatch } from "react-redux";
import { deleteTask } from "../store/tasksSlice";

const Task = ({ title, id, status }) => {
  const dispatch = useDispatch();
  return (
    <li className="task__item">
      <input type="checkbox" />
      <p>{title}</p>
      <button 
        className="todo__filter-control"
        onClick={() => dispatch(deleteTask(id))}
      >
        Remove Task
      </button>
    </li>
  );
};

export default Task;
