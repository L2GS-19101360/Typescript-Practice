import ToDoItemComponent from "./components/todoitemcomponent";
import { data } from "./data/todoitems";

function App() {

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Typescript To-Do List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {data.map(todoitem => (
            <ToDoItemComponent todoitem={todoitem} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App;
