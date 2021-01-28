from django.conf import settings
from django.db import models


class Message(models.Model):
    "Generated Model"
    task = models.ForeignKey(
        "task.Task",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="message_task",
    )


class Task(models.Model):
    "Generated Model"
    subcategory = models.ForeignKey(
        "task_category.Subcategory",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="task_subcategory",
    )


class Rating(models.Model):
    "Generated Model"
    customer = models.ForeignKey(
        "task_profile.CustomerProfile",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="rating_customer",
    )


class TaskTransaction(models.Model):
    "Generated Model"
    timestamp_started = models.DateTimeField(
        null=True,
        blank=True,
    )


# Create your models here.
