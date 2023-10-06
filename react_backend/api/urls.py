from rest_framework.routers import DefaultRouter
from .views import ItemViewSet
from django.urls import path,include

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]