import React from "react";

export const Items = ({ item, handleBuyButton, isItemActive }) => {
    return (
        <div
            className={`rounded-md border border-red-200 m-2 flex justify-between gap-3 p-2 ${
                isItemActive && "bg-lime-500 text-white"
            }`}
        >
            <li>{item}</li>

            <button
                className="bg-sky-500/100 rounded-md p-1 text-white"
                // onClick={(events) => handleBuyButtonClick(events, item)}
                onClick={handleBuyButton}
            >
                Buy
            </button>
        </div>
    );
};
