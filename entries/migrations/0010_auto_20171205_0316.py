# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-05 03:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entries', '0009_auto_20171205_0300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='colour',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='entry',
            name='cashflow_type',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='entry',
            name='frequency',
            field=models.CharField(max_length=20),
        ),
    ]