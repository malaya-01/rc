import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="todo-item flex flex-row justify-between items-center gap-4 py-1">
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => onToggle(todo.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            {/* <span className={todo.isCompleted ? 'completed flex-1 text-left overflow-x-clip' : 'flex-1 text-left overflow-x-clip'}>{todo.task}</span> */}
            <textarea
                row={5}
                onChange={(e) => { }}
                className="flex-1 resize-none border rounded p-1"
            >{todo.task}</textarea>
            <button
                onClick={() => onDelete(todo.id)} row={0}
                className="font-bold bg-red-600 rounded-md p-1 text-white hover:bg-red-700"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
