from flask import Flask, request, jsonify
from flask_cors import CORS

from RepoGPT.clone_repo import CloneRepo
from RepoGPT.load_files import LoadFiles
from RepoGPT.chat import Chat

import asyncio
import os

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/api/chat", methods=["POST"])
def qa():
    openai_api_key = request.headers.get("Authorization")

    url = request.json["url"]
    _clone_repo = CloneRepo(url)
    repo_path = asyncio.run(_clone_repo.clone_repo())

    _load_files = LoadFiles(repo_path)
    documents = asyncio.run(_load_files.process_files())

    question = request.json["question"]
    bot = Chat(openai_api_key)

    retriver = asyncio.run(bot.retrievalQA(documents))

    response = asyncio.run(bot.chat(retriver, question))

    if response == "Invalid API Key":
        return (
            jsonify(
                {
                    "error": "Invalid OpenAI API Key. Please check your key and try again."
                }
            ),
            400,
        )

    return jsonify({"answer": response["answer"]})


if __name__ == "__main__":
    app.run(debug=True)
