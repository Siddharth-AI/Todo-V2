import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type ToDosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
};

export const todosContext = createContext<ToDosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAddToDo = (task: string): void => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  return (
    <todosContext.Provider value={{ todos, handleAddToDo }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useToDos used outside of provider");
  }
  return todosConsumer;
};
