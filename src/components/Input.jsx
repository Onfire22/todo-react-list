import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/tasksSlice";

const Input = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    if (e.key === 'Enter') {
      dispatch(addNewTask(text));
      setText('');
    }
  };

  return (
    <div className="input__wrapper">
      <input
        className="input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={inputHandler}
      />
    </div>
  );
};

export default Input;
