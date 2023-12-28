from RepoGPT.clone_repo import CloneRepo
from RepoGPT.load_files import LoadFiles
from RepoGPT.chat import Chat

import asyncio


async def main():
    print("Cloning the repo...")
    _clone_repo = CloneRepo()
    repo_path = await _clone_repo.clone_repo()

    _load_files = LoadFiles(repo_path)
    documents = await _load_files.process_files()

    
    bot = Chat()
    

    print("Retrieving the QA...")
    retriever = await bot.retrievalQA(documents)

    print("Chatting...")
    answer = await bot.chat(retriever, "What is opencv?")

    print(answer)

if __name__ == "__main__":
    # print(os.getenv("OPENAI_API_KEY"))
    asyncio.run(main())
