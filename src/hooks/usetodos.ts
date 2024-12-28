import { useEffect, useState } from "react";
import { ToDoItem } from "../types/todoitem";
import { data } from "../data/todoitems";


export default function useTodos() {
    const[todos, setTodos] = useState(() => {
        const savedTodos: ToDoItem[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : data;
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodo) => prevTodo.map(todo => (
          todo.id === id ? {...todo, completed} : todo
        )));
      }
    
      function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }
    
      function addToDo(title: string) {
        setTodos(prevTodos => [
          {
            id: Date.now(),
            title,
            completed: false
          },
          ...prevTodos
        ])
      }
    
      function deleteAllCompletedTodos() {
        setTodos((prevTodos) => prevTodos.filter((todos) => !todos.completed));
      }

      return{
        todos,
        setTodoCompleted,
        deleteTodo,
        deleteAllCompletedTodos,
        addToDo
      }
}