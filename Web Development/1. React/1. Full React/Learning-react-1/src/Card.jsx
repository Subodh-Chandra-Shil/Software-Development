import React from "react";

export default function Card({ userName = "SDE", post = "Not assigned yet" }) {
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-1/2 m-auto mt-5">
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Earum dicta nemo quidem numquam architecto sed
                            eum voluptate, eligendi alias, doloremque, qui
                            perferendis mollitia reiciendis nihil.
                        </p>
                    </blockquote>
                    <figcaption>
                        <div className="text-white">{userName}</div>
                        <div className="text-white">{post}</div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}