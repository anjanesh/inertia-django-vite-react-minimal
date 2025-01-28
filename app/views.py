from django.http import HttpRequest
from inertia import render
from time import sleep

def index(request):
    return render(request, "Index", props={"name": "World"})


def about(request):
    sleep(2.5)
    return render(request, "About", props={"pageName": "About"})
