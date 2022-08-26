from django.shortcuts import render
from django.contrib import messages
from .forms import AddingQuestion
from .models import Questions
from django.db import connection


def my_truth_question2(level, truth):
    with connection.cursor() as cur:
         cur.execute('select question from questions where truth_dare = "'+truth+'" and level = "' + level + '" order by rand() limit 1')
         row = cur.fetchone()
    return row

# Create your views here.
def home_view(request):
    return render(request, 'gameapp/WelcomePage.html')

def question_view(request):
    return render(request, 'gameapp/QuestionPage.html')

def add_question_view(request):
    return render(request, 'gameapp/AddQuestion.html')

def add_question(request):
    form = AddingQuestion(request.POST)
    if form.is_valid():
        form.save()
    context= {'form': form }
    messages.info(request,'Congratulations!! Question has been added successfully...')
    return render(request, 'gameapp/AddedQuestion.html', context)

def truth_dare_view(request):
    if request.method == 'POST':
        level = request.POST['level']
        truth = request.POST['truth_dare']
        query = my_truth_question2(level, truth)
        messages.info(request, query[0])
        dataValues = {'level':level,'type':truth }
        return render(request, 'gameapp/question.html',dataValues) 
