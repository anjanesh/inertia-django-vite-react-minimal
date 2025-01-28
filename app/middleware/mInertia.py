from inertia import share
from django.conf import settings
from django.contrib.auth import get_user_model


class InertiaShareMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Share data that should be available to all components
        share(
            request,
            app_name=settings.APP_NAME,
            user=lambda: self._get_user_data(request),
            user_count=lambda: get_user_model().objects.count(),
            # Add more shared data as needed
        )

        return self.get_response(request)

    def _get_user_data(self, request):
        """Format user data for frontend components"""
        if request.user.is_authenticated:
            return {
                'id': request.user.id,
                'email': request.user.email,
                'name': request.user.get_full_name(),
                'is_staff': request.user.is_staff,
            }
        return None
