from django.conf import settings
from django.db import models


class PaymentMethod(models.Model):
    "Generated Model"
    wallet = models.ForeignKey(
        "wallet.CustomerWallet",
        on_delete=models.CASCADE,
        related_name="paymentmethod_wallet",
    )
    account_token = models.CharField(
        max_length=255,
    )
    payment_account = models.CharField(
        max_length=10,
    )
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )


class PaymentTransaction(models.Model):
    "Generated Model"
    payment_method = models.ForeignKey(
        "wallet.PaymentMethod",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="paymenttransaction_payment_method",
    )


class TaskerWallet(models.Model):
    "Generated Model"
    last_transaction = models.DateTimeField()


class TaskerPaymentAccount(models.Model):
    "Generated Model"
    timestamp_created = models.DateTimeField(
        auto_now_add=True,
    )


class CustomerWallet(models.Model):
    "Generated Model"
    customer = models.OneToOneField(
        "task_profile.CustomerProfile",
        on_delete=models.CASCADE,
        related_name="customerwallet_customer",
    )
    balance = models.FloatField()
    expiration_date = models.DateTimeField()
    last_transaction = models.DateTimeField()


# Create your models here.
