from django.db import models

# Create your models here.


class RepoGPT(models.Model):
    repo = models.URLField()
    question = models.TextField()
    response = models.TextField()

    def __str__(self) -> str:
        return self.question
