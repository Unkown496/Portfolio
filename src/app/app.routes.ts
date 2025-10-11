import { Routes } from '@angular/router';

import { ProjectsPage } from './projects-page/projects-page';
import { IndexPage } from './index-page/index-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
  },
  {
    path: 'projects',
    component: ProjectsPage,
  },
];
