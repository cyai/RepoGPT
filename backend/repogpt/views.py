from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RepoGPTSerializers
from .models import RepoGPT


# Create your views here.
class RepoGPTView(viewsets.ModelViewSet):
    serializer_class = RepoGPTSerializers
    queryset = RepoGPT.objects.all()
