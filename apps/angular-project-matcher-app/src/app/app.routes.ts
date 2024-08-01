import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'project',
    loadChildren: () =>
      import('@project-matcher/project-feature').then(
        (m) => m.projectFeatureRoutes
      ),
  },
];
