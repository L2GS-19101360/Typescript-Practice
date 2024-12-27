import { useState } from "react";
import ToDoItemComponent from "./components/todoitemcomponent";
import { data } from "./data/todoitems";
import AddToDoForm from "./components/addtodoform";

function App() {

  const[todos, setTodos] = useState(data);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodo) => prevTodo.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )));
  }

  function addToDo(title: string) {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Typescript To-Do List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm onSubmit={addToDo}/>
        <div className="space-y-2">
          {todos.map(todoitem => (
            <ToDoItemComponent todoitem={todoitem}
            key={todoitem.id}
            onCompletedChange={setTodoCompleted}  />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App;
