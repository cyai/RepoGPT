import React, { Component } from "react";
import Navbar from "./components/navbar";
import RepoURLBox from "./components/chatBox";

interface AppProps {}

interface AppState {
    repoUrl: string;
    isValidUrl: boolean;
    question: string;
}

class App extends React.Component<AppProps, AppState> {
    state = {
        repoUrl: "",
        isValidUrl: false,
        question: "",
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = event.target.value;
        const isValidUrl = /^https?:\/\/github\.com\/[^\s/$.?#].[^\s]*$/.test(
            url
        );
        this.setState({ repoUrl: url, isValidUrl });
    };

    handleSubmit = () => {
        if (this.state.isValidUrl) {
            // Perform submit action here
            console.log("Submit button clicked!");
        }
    };

    handelQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
        const question = event.target.value;
        this.setState({ question });
    };

    render() {
        return (
            <div className="App bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
                <Navbar />

                <div className="flex flex-col space-y-4 items-center justify-center h-full">
                    <RepoURLBox
                        repoUrl={this.state.repoUrl}
                        isValidUrl={this.state.isValidUrl}
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        question={this.state.question}
                        handelQuestion={this.handelQuestion}
                    />
                </div>
            </div>
        );
    }
}

export default App;
