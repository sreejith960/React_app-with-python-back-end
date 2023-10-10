from rest_framework.routers import DefaultRouter
from .views import ItemViewSet
from django.urls import path,include
# from api.urls import post_router

post_router = DefaultRouter()
post_router.register(r'api',ItemViewSet)

# urlpatterns = [
#     path('api/', include(router.urls)),
# ]



