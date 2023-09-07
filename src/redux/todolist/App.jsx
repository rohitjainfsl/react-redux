import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, addTask, deleteTask, editTask } from "./slice";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPenToSquare,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./todolist.css";

function App() {
  library.add(faPenToSquare, faTrash, faCheck);

  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.todo;
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask());
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={init.input}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {init.tasks.map((task, index) => {
          return (
            <li key={index}>
              <span className="task">{task}</span>
              <div className="action">
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={() => dispatch(editTask(index))} />
                <FontAwesomeIcon icon="fa-solid fa-trash" onClick={() => dispatch(deleteTask(index))} />
                <FontAwesomeIcon icon="fa-solid fa-check" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
