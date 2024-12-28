import { Trash2 } from "lucide-react";
import { ToDoItem } from "../types/todoitem"

interface ToDoItemProps {
    todoitem: ToDoItem;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToDoItemComponent({todoitem, onCompletedChange, onDelete}: ToDoItemProps) {

    return (
        <div className="flex items-center gap-1">
            <label className="grow flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" 
                checked={todoitem.completed}
                onChange={(e) => onCompletedChange(todoitem.id, e.target.checked)}
                className="scale-125" name="" id="" />
                <span className={todoitem.completed ? "line-through text-gray-400" : ""}>
                    {todoitem.title}
                </span>
            </label>
            <button onClick={() => onDelete(todoitem.id)} className="p-2">
                <Trash2 size={20} className="text-gray-500" />
            </button>
        </div>
    )
}