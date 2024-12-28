import { ToDoItem } from "../types/todoitem";


interface TodoSummaryProps {
    todos: ToDoItem[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
} : TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} To-Do Items Completed
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-red-500 hover:underline text-sm font-medium">
                    Delete All Completed To-Do Items
                </button>
            )}
        </div>
    );
}