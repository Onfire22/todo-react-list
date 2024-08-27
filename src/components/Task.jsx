import { useDispatch } from "react-redux";
import { deleteTask, checkTask } from "../store/tasksSlice";

const Task = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className="task__item">
      <label>
        <input
          type="checkbox"
          className="visually-hidden"
          checked={completed}
          onChange={() => dispatch(checkTask(id))}
        />
        <span className="checkbox"></span>
      </label>
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
