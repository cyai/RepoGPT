from RepoGPT.clone_repo import CloneRepo
from RepoGPT.load_files import LoadFiles
from RepoGPT.chat import Chat

import asyncio
import os


def clear_terminal():
    os.system("cls" if os.name == "nt" else "clear")


async def main():
    url = input("Enter the repo url: ")
    print("Cloning the repo...")
    _clone_repo = CloneRepo(url)
    repo_path = await _clone_repo.clone_repo()

    _load_files = LoadFiles(repo_path)
    documents = await _load_files.process_files()

    bot = Chat()

    print("Retrieving the QA...")
    retriever = await bot.retrievalQA(documents)

    clear_terminal()
    print("Ask your questions to the bot. Press Ctrl+C to exit.")
    print("-----------------------------------------------------")
    print("\n\n")

    try:
        while True:
            question = input("You : ")
            answer = await bot.chat(retriever, question)
            print(f"Bot: {answer['answer']}")
    except KeyboardInterrupt:
        print("Thank you for using RepoGPT. Bye!")


if __name__ == "__main__":
    # print(os.getenv("OPENAI_API_KEY"))
    asyncio.run(main())
