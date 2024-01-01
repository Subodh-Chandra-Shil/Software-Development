import React from "react";

export const Display = ({ displayValue }) => {
    return (
        <>
            <input
                type="text"
                className="bg-green-200 rounded-lg pl-2 mb-4"
                value={displayValue}
                placeholder="0"
                readOnly
            />
        </>
    );
};
