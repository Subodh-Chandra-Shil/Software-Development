import React from "react";

export const Items = ({ foodItem }) => {
    return (
        <>
            {foodItem.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </>
    );
};
