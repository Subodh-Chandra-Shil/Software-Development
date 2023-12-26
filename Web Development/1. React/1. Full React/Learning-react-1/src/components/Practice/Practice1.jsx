import React from "react";
import { Items } from "./Items";
import styles from "./Practice1.module.css";
import { FoodInput } from "./FoodInput";

export const Practice1 = ({ child }) => {
    const foodItem = ["Bread", "Butter", "Milk", "Vegetables"];
    // const foodItem = [];

    const emptyMessage =
        foodItem.length === 0 ? (
            <h3 className="font-bold text-3xl">Don't have any items to show</h3>
        ) : null;

    return (
        <div className="m-10">
            {child}

            <h1 className={`${styles?.header1}`}>Food Items</h1>

            {/* Conditional rendering */}
            {/* {emptyMessage} */}
            {foodItem.length === 0 && (
                <h3 className="font-bold text-3xl text-center">
                    Don't have any items to show
                </h3>
            )}
            
            <FoodInput />
            <Items foodItem={foodItem} />
        </div>
    );
};
