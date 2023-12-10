import { useState } from "react";
import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        { path: "/home", element: <div>Home</div> },
        { path: "about", element: <div>About page</div> }
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
