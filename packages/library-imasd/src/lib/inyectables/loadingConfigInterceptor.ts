import { InjectionToken } from "@angular/core";

export interface LoadingConfigInterceptor {
    delay: number;
  }
export const LOADING_CONFIG_INTECEPTOR = new InjectionToken<LoadingConfigInterceptor>(
    'loadingConfigInterceptor',
    {
      providedIn: 'root',
      factory: () => {
        return { delay: 500 } as LoadingConfigInterceptor;
      },
    }
  );