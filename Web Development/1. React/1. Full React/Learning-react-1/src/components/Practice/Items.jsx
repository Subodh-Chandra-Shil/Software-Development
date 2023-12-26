import React from "react";

export const Items = ({ foodItem }) => {
    
    const handleBuyButtonClick = (events, item) => {
        console.log(`The events are`);
        console.log(events);
        console.log(`${item} bought.`);
    };

    return (
        <>
            {foodItem.map((item) => (
                <div className="flex justify-between gap-3 p-2">
                    <li key={item}>{item}</li>
                    <button
                        className="bg-sky-500/100 rounded-md p-1 text-white"
                        onClick={(events) => handleBuyButtonClick(events, item)}
                    >
                        Buy
                    </button>
                </div>
            ))}
        </>
    );
};
