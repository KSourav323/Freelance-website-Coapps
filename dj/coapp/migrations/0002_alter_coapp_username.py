# Generated by Django 5.0.4 on 2024-04-20 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coapp',
            name='username',
            field=models.CharField(max_length=100),
        ),
    ]
