from django.conf import settings
from django.db import models


class TaskerProfile(models.Model):
    "Generated Model"
    work_area_radius = models.FloatField(
        null=True,
        blank=True,
    )


class InviteCode(models.Model):
    "Generated Model"
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )


class Notification(models.Model):
    "Generated Model"
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )


class CustomerProfile(models.Model):
    "Generated Model"
    last_login = models.DateTimeField(
        null=True,
        blank=True,
    )


# Create your models here.
