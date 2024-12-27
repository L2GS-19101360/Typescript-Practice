import { ToDoItem } from "../types/todoitem"

interface ToDoItemProps {
    todoitem: ToDoItem;
    onCompletedChange: (id: number, completed: boolean) => void;
}

export default function ToDoItemComponent({todoitem, onCompletedChange}: ToDoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" 
                checked={todoitem.completed}
                onChange={(e) => onCompletedChange(todoitem.id, e.target.checked)}
                className="scale-125" name="" id="" />
                <span className={todoitem.completed ? "line-through text-gray-400" : ""}>
                    {todoitem.title}
                </span>
            </label>
        </div>
    )
}