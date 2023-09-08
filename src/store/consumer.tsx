import { useContext } from "react";
import { TodosContextType, TodosContext } from "./todos";

export const useTodo = (): TodosContextType => {
  const todosConsumer = useContext(TodosContext);
  if (!todosConsumer) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return todosConsumer;
};
