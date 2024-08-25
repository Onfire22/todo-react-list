const Task = ({ title, id, status }) => {
  return (
    <li className="task__item">
      <input type="checkbox" />
      <p>{title}</p>
    </li>
  );
};

export default Task;
