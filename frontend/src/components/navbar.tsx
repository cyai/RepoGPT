import * as React from "react";
import { Component } from "react";

interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
    // state = { :  }
    render() {
        return (
            <>
                <div className="max-w-2xl mx-auto">
                    <nav className="border-gray-200 px-2 mb-10">
                        <div className="container mx-auto flex flex-wrap items-center justify-center pt-2">
                            <a
                                href="https://github.com/cyai/RepoGPT"
                                target="_blank"
                                className="flex"
                            >
                                <span className="font-sans md:font-serif self-center whitespace-nowrap mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-400 md:text-5xl lg:text-6xl">
                                    RepoGPT
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;
