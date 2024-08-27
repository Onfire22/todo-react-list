import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../store/filtersSlice";
import tasksSelector from "../store/tasksSelector";
import { deleteCompletedTasks } from "../store/tasksSlice";

const Footer = () => {
  const filter = useSelector(state => state.filter);
  const tasks = useSelector(state => tasksSelector(state, filter));
  const dispatch = useDispatch();
  
  return (
    <footer className="todo__footer">
      <p className="todo__footer-count">{(tasks.filter(task => !task.completed)).length} items left</p>
      <div className="todo__footer-controls">
        <button
          onClick={() => dispatch(getFilter('all'))}
          className="todo__filter-control"
          style={{outline: filter === 'all' && '1px solid rgba(175, 47, 47, 0.15)'}}
        >
          All
        </button>
        <button
          onClick={() => dispatch(getFilter('active'))}
          className="todo__filter-control"
          style={{outline: filter === 'active' && '1px solid rgba(175, 47, 47, 0.15)'}}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(getFilter('completed'))}
          className="todo__filter-control"
          style={{outline: filter === 'completed' && '1px solid rgba(175, 47, 47, 0.15)'}}
        >
          Completed
        </button>
      </div>
      <button onClick={() => dispatch(deleteCompletedTasks())} className="todo__clear-control">Clear completed</button>
    </footer>
  );
};

export default Footer;
