import React, { useState, useCallback, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export default function Password_generator() {
    const [length, setLength] = useState(8);
    const [isNumberAllowed, setNumberAllowed] = useState(false);
    const [isSpecialCharAllowed, setIsSpecialCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (isNumberAllowed) str += "0123456789";
        if (isSpecialCharAllowed) str += "!@#$%^&*()_+";

        for (let i = 0; i < length; ++i) {
            let charPick = Math.floor(Math.random() * str.length);
            pass += str.charAt(charPick);
        }

        setPassword(pass);
    }, [length, isNumberAllowed, isSpecialCharAllowed]);

    const notify = () =>
        toast.success("Password Copied!!", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });

    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
        notify();
    };

    useEffect(() => {
        generatePassword();
    }, [length, isNumberAllowed, isSpecialCharAllowed]);

    return (
        <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 shadow-xl shadow-red-500/50">
            <h1 className="text-white text-3xl text-center my-3">
                Password Generator
            </h1>

            <div className="flex shadow rounded-lg overflow-hidden mb-4">

                {/* Input field */}
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />

                {/* button */}
                <button
                    className="outline-none text-black px-3 py-0.5 shrink-0 bg-[#F8FFE8] bg-gradient-to-r from-red-100 to-orange-300"
                    onClick={copyPasswordToClipboard}
                >
                    Copy
                </button>
            </div>

            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={8}
                        max={50}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => setLength(e.target.value)}
                        name=""
                        id=""
                    />

                    <label htmlFor="length">Length {length}</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={isNumberAllowed}
                        onChange={() => {
                            setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="number">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={isSpecialCharAllowed}
                        onChange={() => {
                            setIsSpecialCharAllowed((prev) => !prev);
                        }}
                    />
                    <label htmlFor="charInput">Characters</label>
                </div>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}
