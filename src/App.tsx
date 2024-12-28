import { useEffect, useState } from "react";
import { data } from "./data/todoitems";
import AddToDoForm from "./components/addtodoform";
import ToDoList from "./components/todolist";
import TodoSummary from "./components/todosummary";
import { ToDoItem } from "./types/todoitem";
import useTodos from "./hooks/usetodos";

function App() {
  const {
    todos,
      setTodoCompleted,
      deleteTodo,
      deleteAllCompletedTodos,
      addToDo
  } = useTodos();
  

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Typescript To-Do List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm onSubmit={addToDo}/>
        <ToDoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
      </div>
    </main>
  )
}

export default App;
