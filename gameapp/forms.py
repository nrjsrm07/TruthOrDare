from django import forms
from .models import Questions

class AddingQuestion(forms.ModelForm):
	class Meta:
		model= Questions
		fields= ["truth_dare", "level", "question"]
  