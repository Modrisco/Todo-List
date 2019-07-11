import datetime
import pytz

from django.db import models
from django.utils import timezone

# Create your models here.
lowLevel = 1
midLevel = 2
highLevel = 3


class Task(models.Model):
    task_title = models.CharField("title", max_length=255)
    create_date = models.DateTimeField('date created', auto_now_add=True)
    expire_date = models.DateTimeField('date expired')
    task_state = models.BooleanField("has finished", default=False, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    task_priority = models.IntegerField("priority")

    def __str__(self):
        return self.task_title

    def taskPriority(self):
        return self.task_priority

    def leftTime(self):
        return self.expire_date - timezone.now()
