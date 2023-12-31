from django.contrib import admin

# manually added
from .models import RepoGPT


class RepoGPTAdmin(admin.ModelAdmin):
    list_display = ("repo", "question", "response")


# Register your models here.
admin.site.register(RepoGPT, RepoGPTAdmin)
