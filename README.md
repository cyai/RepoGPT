# RepoGPT - QnA over any GitHub Repo

RepoGPT is a tool that uses GPT-3 to answer questions about any GitHub repository. It uses the power of LLMs and Langchain framework to answer to any questions about any GitHub repository.

### How do I use it?

-   **Clone the repo**
    ```bash
    git clone https://github.com/cyai/RepoGPT
    ```
-   **Install the dependencies**
    ```bash
    pip install -r requirements.txt
    ```
-   **Get your OpenAI API key**

    -   Go to [OpenAI](https://beta.openai.com/) and sign up for an account.
    -   Create a new API key and copy it.

-   \*\*Install the `node` packages

    ```bash
    cd frontend
    npm install
    ```

-   **Run the backend server**

    ```bash
    python server.py
    ```

-   **Run the frontend server**

    ```bash
    cd frontend
    npm start
    ```

-   **Head to <i>http://localhost:3000/</i> and put your OpenAI Api Key and the Github URL and ask your questions.**

---

---

Just a heads up, this is a pet project, so don't expect perfection. But I promise it's a neat little tool to have fun with.

**TO DO:**

> Convert it into a package and publish it on PyPi
