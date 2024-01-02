from flask import Flask, request, jsonify
from flask import copy_current_request_context

from RepoGPT.clone_repo import CloneRepo
from RepoGPT.load_files import LoadFiles
from RepoGPT.chat import Chat

import asyncio
import os

app = Flask(__name__)


def clear_terminal():
    os.system("cls" if os.name == "nt" else "clear")


@app.route("/api/chat", methods=["POST"])
def qa():
    url = request.json["url"]
    _clone_repo = CloneRepo(url)
    repo_path = asyncio.run(_clone_repo.clone_repo())

    _load_files = LoadFiles(repo_path)
    documents = asyncio.run(_load_files.process_files())

    question = request.json["question"]
    bot = Chat()

    retriver = asyncio.run(bot.retrievalQA(documents))

    response = asyncio.run(bot.chat(retriver, question))

    return jsonify({"answer": response["answer"]})


if __name__ == "__main__":
    app.run(debug=True)


# from RepoGPT.clone_repo import CloneRepo
# from RepoGPT.load_files import LoadFiles
# from RepoGPT.chat import Chat

# import asyncio
# import os


# def clear_terminal():
#     os.system("cls" if os.name == "nt" else "clear")


# async def main():
#     url = input("Enter the repo url: ")
#     print("Cloning the repo...")
#     _clone_repo = CloneRepo(url)
#     repo_path = await _clone_repo.clone_repo()

#     _load_files = LoadFiles(repo_path)
#     documents = await _load_files.process_files()

#     bot = Chat()

#     print("Retrieving the QA...")
#     retriever = await bot.retrievalQA(documents)

#     clear_terminal()
#     print("Ask your questions to the bot. Press Ctrl+C to exit.")
#     print("-----------------------------------------------------")
#     print("\n\n")

#     try:
#         while True:
#             question = input("You : ")
#             answer = await bot.chat(retriever, question)
#             print(f"Bot: {answer['answer']}")
#     except KeyboardInterrupt:
#         print("Thank you for using RepoGPT. Bye!")


# if __name__ == "__main__":
#     # print(os.getenv("OPENAI_API_KEY"))
#     asyncio.run(main())
