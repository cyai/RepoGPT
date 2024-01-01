import * as React from "react";
import { Component } from "react";

interface RepoURLBoxProps {
    repoUrl: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
    isValidUrl: boolean;
    question: string;
    handelQuestion: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// interface RepoURLBoxState {
//     repoUrl: string;
//     isValidUrl: boolean;
// }

class RepoURLBox extends React.Component<RepoURLBoxProps> {
    // state = {
    //     repoUrl: "",
    //     isValidUrl: false,
    // };

    render() {
        return (
            <>
                {/* <div className="flex flex-col space-y-4"> */}
                <div className="box-border h-12 w-1/2 border-2 border-gray-500 rounded-md">
                    <input
                        className="h-10 w-full opacity-50 bg-transparent p-2 text-white font-mono align-middle"
                        type="text"
                        placeholder="Enter a GitHub repo URL..."
                        value={this.props.repoUrl || ""}
                        onChange={(event) =>
                            this.props.handleInputChange(event)
                        }
                    />
                </div>

                <div className="box-border w-1/2 border-2 border-gray-500 rounded-md h-60">
                    <textarea
                        id="message"
                        className="block p-2 w-full h-60 opacity-50 bg-transparent text-white font-mono align-middle"
                        placeholder="Enter a question..."
                    ></textarea>
                </div>
                {/* </div> */}
                {/* <div>
                    {!this.props.isValidUrl && (
                        <p className="text-red-500">
                            Please enter a valid GitHub repo URL.
                        </p>
                    )}
                </div> */}
                {this.props.isValidUrl && (
                    <button
                        className="opacity-50 bg-transparent p-2 text-white font-bold py-2 px-4 border-2 border-gray-500 rounded-md"
                        onClick={this.props.handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </>
        );
    }
}

export default RepoURLBox;
