import { ToDoItem } from "../types/todoitem";
import ToDoItemComponent from "./todoitemcomponent";

interface ToDoListProps {
    todos: ToDoItem[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToDoList({
    todos,
    onCompletedChange,
    onDelete
} : ToDoListProps) {
    const todosSorted = todos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <>
        <div className="space-y-2">
          {todosSorted.map(todoitem => (
            <ToDoItemComponent todoitem={todoitem}
            key={todoitem.id}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}  />
          ))}
        </div>
        {todos.length === 0 && (
            <p className="text-center text-sm text-gray-500">
                No To-Do Items. Create New To-Do Item
            </p>
        )}
        </>
    );
}