from django.shortcuts import render
from rest_framework import viewsets
from .models import python_React
from .serializers import ItemSerializer




class ItemViewSet(viewsets.ModelViewSet):
    queryset = python_React.objects.all()
    serializer_class = ItemSerializer

# def task(request):
#     print("aaaaaaaaaa")
#     if request.POST:
#         user = request.POST.get('user')
#         task = request.POST.get('task')
#         task_det = Item(
#             user = user,
#             task = task
#         )
#         task_det.save()


