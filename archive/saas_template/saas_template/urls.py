from django.contrib import admin
from django.urls import path

from apps.core.views import frontpage, privacy

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', frontpage, name='frontpage'),
    path('privacy/', privacy, name='privacy'),
]
