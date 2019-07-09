from django.urls import path

from . import taskViews

urlpatterns = [
    # ex: /tasks/
    path('', taskViews.index, name='index'),
    # ex: /tasks/4
    path('<int:task_id>', taskViews.detail, name='detail')
]