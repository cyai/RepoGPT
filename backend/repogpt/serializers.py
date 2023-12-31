from rest_framework import serializers
from .models import RepoGPT


class RepoGPTSerializers(serializers.ModelSerializer):
    class Meta:
        model = RepoGPT
        fields = ("id", "repo", "question", "response")

