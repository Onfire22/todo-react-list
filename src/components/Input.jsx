import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../store/tasksSlice";
import cn from 'classnames';

const Input = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const input = useRef(null);

  const arrowClasses = cn({
    'arrow-icon-up': !tasks.length,
    'arrow-icon-down': tasks.length > 0,
  });

  const inputHandler = (e) => {
    if (!text) {
      return;
    }
    if (e.key === 'Enter') {
      dispatch(addNewTask(text));
      setText('');
    }
  };

  const clickHandler = () => {
    if (!text) {
      return;
    }
    dispatch(addNewTask(text));
    setText('');
    input.current.focus();
  };

  return (
    <div className="input__wrapper">
      <svg className={arrowClasses} width="32" height="21" viewBox="0 0 32 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.76 0.906708L16 13.12L28.24 0.906708L32 4.66671L16 20.6667L0 4.66671L3.76 0.906708Z" fill="#D0D0D0"/>
      </svg>
      <input
        ref={input}
        className="input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={({ target }) => setText(target.value)}
        onKeyDown={inputHandler}
      />
      <button onClick={() => clickHandler()}>
        <svg 
          className="search" 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 20 20"
        >
        <path
          fill="#555"
          d="M19.3 0a.7.7 0 0 1 .7.7v8.278c0 3.699-3 6.698-6.699 6.698l-10.996-.001 3.131 3.13a.7.7 0 0 1-.99.99l-4.24-4.241a.7.7 0 0 1 0-.99l4.241-4.241a.7.7 0 1 1 .99.99l-2.965 2.963h10.83A5.299 5.299 0 0 0 18.6 8.978V.7a.7.7 0 0 1 .7-.7Z"
        />
        </svg>
      </button>
    </div>
  );
};

export default Input;
