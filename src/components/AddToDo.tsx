import { FormEvent, useContext, useState } from "react";
import { useTodos } from "../store/todos";

export const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();
  const handleFormSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name=""
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
