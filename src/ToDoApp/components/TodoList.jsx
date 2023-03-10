import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos
} from "../redux/todos/todosSlice.js";

export default function TodoList() {
  const dispatch = useDispatch();

  const filteredItems = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(destroy(id));
    }
  };

  return (
    <ul className="todo-list">
      {filteredItems.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
              checked={item.completed}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}
