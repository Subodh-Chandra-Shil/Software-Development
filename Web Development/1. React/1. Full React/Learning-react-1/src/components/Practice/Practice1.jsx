import { Items } from "./Items";
import styles from "./Practice1.module.css";
import { FoodInput } from "./FoodInput";
import { useState } from "react";

export const Practice1 = ({ child }) => {
    // const foodItem = ["Bread", "Butter", "Milk", "Vegetables"];
    // const foodItem = [];

    const [foodItem, setFoodItems] = useState([]);
    const [activeItems, setActiveItems] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            let newFoodItem = event.target.value;
            let newItems = [...foodItem, newFoodItem];
            event.target.value = "";
            setFoodItems(newItems);
            console.log(`Food value entered is: ${newFoodItem}`);
        }

        console.log(`${event.key} pressed`);
    };

    const handleBuyButton = (events, item) => {
        console.log(`The events are`);
        console.log(events);
        console.log(`${events.target.value} bought.`);
        setActiveItems("bg-lime-500");

        // adding new items to active items on buy click
        const newItems = [...activeItems, item];
        setActiveItems(newItems);
    };

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

            <FoodInput handleKeyDown={handleKeyDown} />

            {foodItem.map((item) => (
                <Items
                    key={item}
                    item={item}
                    handleBuyButton={(e) => handleBuyButton(e, item)}
                    isItemActive={activeItems.includes(item)}
                    bgActiveColor={activeItems}
                />
            ))}
        </div>
    );
};
