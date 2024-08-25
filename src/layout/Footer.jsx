const Footer = () => {
  return (
    <footer className="todo__footer">
      <p className="todo__footer-count">3 items left</p>
      <div className="todo__footer-controls">
        <button className="todo__filter-control">All</button>
        <button className="todo__filter-control">Active</button>
        <button className="todo__filter-control">Completed</button>
      </div>
      <button className="todo__clear-control">Clear completed</button>
    </footer>
  );
};

export default Footer;
