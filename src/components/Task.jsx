import { useDispatch } from "react-redux";
import cn from 'classnames';
import { deleteTask, checkTask } from "../store/tasksSlice";

const Task = ({ title, id, completed }) => {
  const dispatch = useDispatch();

  const textClasses = cn('task__text', {
    'completed-task': completed,
    'active-task': !completed,
  });

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
      <p className={textClasses}>{title}</p>
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
