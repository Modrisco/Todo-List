from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('pk', 'id', 'task_title', 'create_date', 'expire_date',
                  'task_state', 'description', 'task_priority')
