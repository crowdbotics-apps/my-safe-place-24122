from django.conf import settings
from django.db import models


class CustomerLocation(models.Model):
    "Generated Model"
    location = models.ForeignKey(
        "location.MapLocation",
        on_delete=models.CASCADE,
        related_name="customerlocation_location",
    )


class TaskerLocation(models.Model):
    "Generated Model"
    zip = models.CharField(
        null=True,
        blank=True,
        max_length=6,
    )


class MapLocation(models.Model):
    "Generated Model"
    longitude = models.DecimalField(
        max_digits=12,
        decimal_places=8,
    )


class TaskLocation(models.Model):
    "Generated Model"
    zip = models.CharField(
        max_length=6,
    )


# Create your models here.
