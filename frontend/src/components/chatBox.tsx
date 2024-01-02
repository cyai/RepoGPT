import * as React from "react";
import { Component, ChangeEvent } from "react";

interface RepoURLBoxProps {
    repoUrl: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handelQuestion: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    // handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isValidUrl: boolean;
    question: string;
}

class RepoURLBox extends React.Component<RepoURLBoxProps> {
    render() {
        return (
            <>
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
                        value={this.props.question || ""}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                            this.props.handelQuestion(event)
                        }
                    ></textarea>
                </div>

                {/* {this.props.isValidUrl && (
                    <button
                        className="opacity-50 bg-transparent p-2 text-white font-bold py-2 px-4 border-2 border-gray-500 rounded-md"
                        onClick={(event) => this.props.handleSubmit(event)}
                    >
                        Submit
                    </button>
                )} */}
            </>
        );
    }
}

export default RepoURLBox;
