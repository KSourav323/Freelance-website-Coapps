from django.db import models

class Coapp(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

class Freelancer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    skills = models.CharField(max_length=100)
    about = models.CharField(max_length=200)

class Jobs(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
