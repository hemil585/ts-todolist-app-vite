import { useSearchParams } from "react-router-dom";
import { useTodo } from "../store/consumer";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, onHandleDelete } = useTodo();
  let filterData = todos;

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="main-task">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name=""
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {todo.completed && (
              <button onClick={() => onHandleDelete(todo.id)}>Delete</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
