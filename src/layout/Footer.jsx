import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../store/filtersSlice";
import tasksSelector from "../store/tasksSelector";

const Footer = () => {
  const filter = useSelector(state => state.filter);
  const tasks = useSelector(state => tasksSelector(state, filter));
  const dispatch = useDispatch();
  
  return (
    <footer className="todo__footer">
      <p className="todo__footer-count">{tasks.length} items left</p>
      <div className="todo__footer-controls">
        <button
          onClick={() => dispatch(getFilter('all'))}
          className="todo__filter-control"
        >
          All
        </button>
        <button
          onClick={() => dispatch(getFilter('active'))}
          className="todo__filter-control"
        >
          Active
        </button>
        <button
          onClick={() => dispatch(getFilter('completed'))}
          className="todo__filter-control"
        >
          Completed
        </button>
      </div>
      <button className="todo__clear-control">Clear completed</button>
    </footer>
  );
};

export default Footer;
