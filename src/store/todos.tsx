import { ReactNode, createContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  onHandleDelete: (id: string) => void;
};

export const TodosContext = createContext<TodosContextType | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(newTodo);
      return newTodo;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      const newTodo = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodo;
    });
  };

  const onHandleDelete = (id: string) => {
    setTodos((prev) => {
      const updatedTodo = prev.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  return (
    <TodosContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, onHandleDelete }}
    >
      {children}
    </TodosContext.Provider>
  );
};
