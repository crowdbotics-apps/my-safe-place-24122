from django.conf import settings
from django.db import models


class TaskerAvailability(models.Model):
    "Generated Model"
    timeslots = models.ManyToManyField(
        "tasker_business.Timeslot",
        related_name="taskeravailability_timeslots",
    )


class BusinessPhoto(models.Model):
    "Generated Model"
    description = models.TextField()


class Timeslot(models.Model):
    "Generated Model"
    end_time = models.TimeField()


class TaskerSkill(models.Model):
    "Generated Model"
    subcategory = models.ForeignKey(
        "task_category.Subcategory",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="taskerskill_subcategory",
    )


# Create your models here.
