import React, { useState } from "react";

export default function Background_color_changer() {
    const colors = [
        "bg-red-100",
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-lime-100"
    ];

    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const [color, setColor] = useState("bg-orange-50");

    return (
        <div className={`w-full h-screen duration-200 ${color}`}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button
                        onClick={() => setColor(getRandomColor())}
                        className="outline-none px-4 py-1 rounded-full shadow-lg"
                    >
                        Change Background Color
                    </button>
                </div>
            </div>
        </div>
    );
}
