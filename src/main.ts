import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from 'app/app.config';

import { AppRoot as App } from 'app/root/root';

bootstrapApplication(App, appConfig).catch(console.error);
