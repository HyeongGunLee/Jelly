from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("HI, I'm Jelly Home")

