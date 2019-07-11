from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from .models import Task
from .serializer import *


def index(request):
    return HttpResponse("Hello, world. You're at the tasks index.")

def detail(request, task_id):
    return HttpResponse("You are looking at task %s." % task_id)


@api_view(['GET', 'POST'])
def task_list(request):
    """
    :param request:
    :return:
    List of to-do tasks, or create a new task
    """
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        tasks = Task.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(tasks, 5)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = TaskSerializer(data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages,
                         'nextlink': '/api/tasks/?page=' + str(nextPage),
                         'prevlink': '/api/tasks/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        # print(serializer)
        # print(serializer.is_valid())
        # print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def tasks_detail(request, pk):
    """
    :param request:
    :param pk:
    :return:
    Retrieve, update or delete a task by id/pk
    """
    try:
        task = Task.objects.get(pk=pk)
    except Task.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TaskSerializer(task, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        print(request.data)
        serializer = TaskSerializer(task, data=request.data, context={'request': request})
        print(serializer.is_valid())
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
