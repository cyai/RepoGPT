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
-   **Set environmental variables**

    -   Create a `.env` file in the root directory
    -   Add the following variables to the file
        ```bash
        OPENAI_API_KEY=<your_openai_api_key>
        ```

-   **Run the script**
    ```bash
    python run.py
    ```
-   **Enter the Github Repo URL and start your conversation 😊**

Just a heads up, this is a pet project, so don't expect perfection. But I promise it's a neat little tool to have fun with.

### Example:

For the video: https://www.youtube.com/watch?v=8Vt16kTtgm4

**TO DO:**

> Convert it into a package and publish it on PyPi
