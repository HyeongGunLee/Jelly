from django.template.response import TemplateResponse
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    context = {}
    html = TemplateResponse(request, 'base.html', context)
    return HttpResponse(html.render())

