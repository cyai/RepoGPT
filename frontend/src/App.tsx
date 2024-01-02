import React, { Component, FormEvent } from "react";
import Navbar from "./components/navbar";
import RepoURLBox from "./components/chatBox";

interface AppProps {}

interface AppState {
    repoUrl: string;
    apiResponse: string;
    question: string;
    loading: boolean;
    isValidUrl?: boolean;
    apiKey?: string;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        repoUrl: "",
        question: "",
        loading: false,
        apiResponse: "",
        isValidUrl: false,
        apiKey: "",
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = event.target.value;
        const isValidUrl = /^https?:\/\/github\.com\/[^\s/$.?#].[^\s]*$/.test(
            url
        );
        this.setState({ repoUrl: url, isValidUrl });
    };

    handleQuestion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const question = event.target.value;
        // console.log(question);
        this.setState({ question });
    };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ loading: true });

        try {
            let response = await fetch("http://127.0.0.1:5000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.state.apiKey,
                },
                body: JSON.stringify({
                    url: this.state.repoUrl,
                    question: this.state.question,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                this.setState({ apiResponse: data.answer, loading: false });
            } else {
                console.log("Error:", response.status);
                this.setState({ loading: false });
            }
        } catch (error) {
            console.error("Error:", error);
            this.setState({ loading: false });
        }
    };

    handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const apiKey = event.target.value;
        this.setState({ apiKey });
    };

    render() {
        return (
            <div className="App bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
                <Navbar />
                <div className="flex flex-col space-y-4 items-center justify-center h-full">
                    <RepoURLBox
                        repoUrl={this.state.repoUrl}
                        handleInputChange={this.handleInputChange}
                        isValidUrl={this.state.isValidUrl}
                        question={this.state.question}
                        handleQuestion={this.handleQuestion}
                        apiKey={this.state.apiKey}
                        handleApiKeyChange={this.handleApiKeyChange}
                    />
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center h-full p-4">
                        <form onSubmit={this.handleSubmit}>
                            {/* Your form fields here */}
                            <button
                                type="submit"
                                className="opacity-50 bg-transparent p-2 text-white font-bold py-2 px-4 border-2 border-gray-500 rounded-md flex items-center justify-center"
                            >
                                {this.state.loading ? "Loading..." : "Submit"}
                            </button>
                        </form>

                        {this.state.apiResponse && (
                            <div className="box-border w-1/2 border-2 border-gray-500 rounded-md h-60 flex justify-center items-center pt-4 mt-4">
                                <textarea
                                    className="block p-2 w-full h-60 opacity-50 bg-transparent text-white font-mono"
                                    value={this.state.apiResponse}
                                    readOnly
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
