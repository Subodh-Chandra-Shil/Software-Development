import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

export const WelcomeMessage = () => {
    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return (
        <div>
            {todoItems.length === 0 && (
                <h2 className="text-decoration-underline">
                    Welcome, plan your day now!!
                </h2>
            )}
        </div>
    );
};
