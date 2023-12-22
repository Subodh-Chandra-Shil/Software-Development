import React from "react";
import { Items } from "./Items";

export const Practice1 = () => {
    const foodItem = ["Bread", "Butter", "Milk", "Vegetables"];
    // const foodItem = [];

    const emptyMessage =
        foodItem.length === 0 ? (
            <h3 className="font-bold text-3xl">Don't have any items to show</h3>
        ) : null;

    return (
        <div className="m-10">
            <h1>Food Items</h1>

            {/* Conditional rendering */}
            {/* {emptyMessage} */}
            {foodItem.length === 0 && (
                <h3 className="font-bold text-3xl text-center">
                    Don't have any items to show
                </h3>
            )}

            <Items foodItem={foodItem} />
        </div>
    );
};
