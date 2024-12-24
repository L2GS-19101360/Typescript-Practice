import { ToDoItem } from "../types/todoitem"

interface ToDoItemProps {
    todoitem: ToDoItem;
}

export default function ToDoItemComponent({todoitem}: ToDoItemProps) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox" className="scale-125" name="" id="" />
                <span className={todoitem.completed ? "line-through text-gray-400" : ""}>
                    {todoitem.title}
                </span>
            </label>
        </div>
    )
}