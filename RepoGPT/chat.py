import os
import time
from git import Repo
from dotenv import load_dotenv


from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationSummaryMemory
from langchain.chains import ConversationalRetrievalChain

from langchain.vectorstores import Chroma
from langchain.embeddings.openai import OpenAIEmbeddings

load_dotenv()
import openai


class Chat:
    def __init__(self) -> None:
        self.api_key = os.getenv("OPENAI_API_KEY")
        self.embeddings = OpenAIEmbeddings(disallowed_special=(), openai_api_key=self.api_key)

    async def retrievalQA(self, texts: list):
        if os.path.exists(os.path.join(os.getcwd(), "RepoGPT/chroma_db")):
            db = Chroma(
                persist_directory=os.path.join(os.getcwd(), "RepoGPT/chroma_db"),
                embedding_function=self.embeddings,
            )

        else:
            db = Chroma.from_documents(
                texts,
                self.embeddings,
                persist_directory=os.path.join(os.getcwd(), "RepoGPT/chroma_db"),
            )

        retriever = db.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 8},
        )

        return retriever

    async def chat(self, retriever, question):
        llm = ChatOpenAI(model_name="gpt-3.5-turbo", openai_api_key=self.api_key)

        memory = ConversationSummaryMemory(
            llm=llm, memory_key="chat_history", return_messages=True
        )
        qa = ConversationalRetrievalChain.from_llm(
            llm, retriever=retriever, memory=memory
        )
        result = qa(question)
        return result
