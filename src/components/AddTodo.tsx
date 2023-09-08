import { FormEvent, useState } from "react";
import { useTodo } from "../store/consumer";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodo();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      handleAddTodo(todo);
      setTodo("");
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
