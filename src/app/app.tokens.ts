import { InjectionToken } from '@angular/core';

export const APP_SKILLS_BASE_URL = new InjectionToken<string>('URL for get skills json', {
  providedIn: 'root',
  factory: () => 'https://www.jsonkeeper.com/b/ZIC59',
});

export const APP_PATHS_DEVELOPMENT_BASE_URL = new InjectionToken<string>(
  "URL for get paths dev's",
  {
    providedIn: 'root',
    factory: () => 'https://www.jsonkeeper.com/b/MEFMQ',
  },
);

export const APP_CONTACTS_BASE_URL = new InjectionToken<string>('URL fot get contacts', {
  providedIn: 'root',
  factory: () => '',
});
