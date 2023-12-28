import os
from git import Repo



class CloneRepo:
    def __init__(self, url) -> None:
        self.repo_dir = os.path.join(os.getcwd(), "RepoGPT/repo")
        self.repo_url = url

    async def clone_repo(self):
        # Clone the repo

        # write the code to check weather the repo is already cloned
        # repo_dir = os.path.join(os.getcwd(), "repo")
        if len(os.listdir(self.repo_dir)) != 0:
            # print(os.listdir("/Users/vardh/work/trying-smt/LLM-Over-Code/repo"))
            print("Repo already cloned\nSkipping Cloning...")
            return self.repo_dir
        else:
            repo = Repo.clone_from(
                self.repo_url, to_path=self.repo_dir
            )
            return self.repo_dir


