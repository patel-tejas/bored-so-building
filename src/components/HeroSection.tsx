"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Form from "./Form";

export function BackgroundBeamsDemo() {
    return (
        <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Github Roasty
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Enter a github username and get roasted !
                </p>
                <div className="relative z-10">
                    <Form />
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
