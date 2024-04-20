from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import make_password, check_password
from .models import Coapp
from .models import Freelancer
from .models import Jobs
from django.core.mail import send_mail


@csrf_exempt
def login(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        email= input_data.get('email', '')
        password= input_data.get('password', '')
        try:
            user = Coapp.objects.get(email=email)
        except Coapp.DoesNotExist:
            message='Server error'
            statusCode=500
        try:
            if check_password(password, user.password):
                message='logged in'
                statusCode=200
            else:
                message='Invalid password'
                statusCode=500
            
        except Exception as e:
            message='Server error'
            statusCode=500

        response = {
            'body': user.username,
            'message': message,
            'statusCode': statusCode
        }
        return JsonResponse(response)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        username= input_data.get('username', '')
        email= input_data.get('email', '')
        password1= input_data.get('password1', '')
        password2= input_data.get('password2', '')
        hashed_password = make_password(password1)
        try:
            if password1==password2 :
                user = Coapp(username=username, email=email, password=hashed_password)
                user.save()
                message='signed in'
                statusCode=200

            else:
                message='password not matching'
                statusCode=200
        except Exception as e:
            message='Server error'
            statusCode=500

        response = {
            'message': message,
            'statusCode': statusCode
        }
        return JsonResponse(response)
    
@csrf_exempt
def getFreelancer(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        filter= input_data.get('search', '')
        rows = Freelancer.objects.all().values()
        rows_list=list(rows)

        if filter == '':
            pass
        else:
            rows_list = [d for d in rows_list if filter in d.get('skills', "")]

        response = {
            'body': rows_list,
            'message': 'logged in',
            'statusCode': 200
        }
        return JsonResponse(response)
    
@csrf_exempt
def putFreelancer(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        name= input_data.get('name', '')
        email= input_data.get('email', '')
        skills= input_data.get('skills', '')
        about= input_data.get('about', '')

        skills=skills.replace(' ', '')
        skills=skills.lower()
        try:
            f = Freelancer(name=name, email=email, skills=skills, about= about) 
            f.save()
            message='added'
            statusCode=200

        except Exception as e:
            message='Server error'
            statusCode=500

        response = {
            'message': message,
            'statusCode': statusCode
        }
        return JsonResponse(response)
    
@csrf_exempt
def getJob(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        filter=input_data.get('search', '')
        rows = Jobs.objects.all().values()
        rows_list = list(rows)
        print(rows_list)

        if filter=='':
            pass
        else:
            rows_list = [d for d in rows_list if filter in d.get('title', "")]
        


        response = {
            'body': rows_list,
            'message': 'logged in',
            'statusCode': 200
        }
        return JsonResponse(response)
    
@csrf_exempt
def putJob(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)
        name= input_data.get('name', '')
        email= input_data.get('email', '')
        title= input_data.get('title', '')
        desc= input_data.get('desc', '')

        title=title.lower()
        try:
            j = Jobs(name=name, email=email, title=title, description= desc) 
            j.save()
            message='added'
            statusCode=200

        except Exception as e:
            print(e)
            message='Server error'
            statusCode=500

        response = {
            'message': message,
            'statusCode': statusCode
        }
        return JsonResponse(response)
    
@csrf_exempt
def sendMail(request):
    if request.method == 'POST':
        input_data = json.loads(request.body)

        try:
            mode = input_data.get('mode','')
            username = input_data.get('username','')
            item = input_data.get('item','')
            item_email=item.get('email', '')
            item_name=item.get('name', '')

            if mode == 'hire':
                item_skills=item.get('skills', '')
                message = f'Hi {item_name}, You have got a request from {username} to work for your skills in {item_skills}.\nContact {item_email} for further details.'.format(item_name, username, item_skills, item_email)
            elif mode == 'job':
                item_title=item.get('title', '')
                message = f'Hi {item_name}, You got a request from {username} to work for your project {item_title}\nContact {item_email} for further details.'.format(item_name, username, item_title, item_email)
            else:
                print('some error') 
            
            subject = 'Mail from NeoHire'
            sender_email = 'jesteenfinu@gmail.com'
            send_mail(subject, message, sender_email, [item_email,])
                  
            message='mail sent'
            statusCode=200

        except Exception as e:
            print(e)
            message='Server error'
            statusCode=500

        response = {
            'message': message,
            'statusCode': statusCode
        }
        return JsonResponse(response)
    
