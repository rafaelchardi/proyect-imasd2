import { computed, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services';
import { isEmpty } from '../functions';

export const contentRoles: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const currentUser = computed(() => authService.currentUser());

  if (!isEmpty(router.getCurrentNavigation()?.extras?.state?.['roles'])) {
    const roles = router.getCurrentNavigation()?.extras?.state?.['roles'];
    if (!isEmpty(roles)) {
      if (currentUser()?.roles?.some((role) => roles.includes(role))) return true;
       else return false;
    }
  }
  return true;
};
