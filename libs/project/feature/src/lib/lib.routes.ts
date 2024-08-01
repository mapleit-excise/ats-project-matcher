import { Route } from '@angular/router';
import { ProjectFeatureComponent } from './project-feature/project-feature.component';
import { AddProjectComponent } from './add-project/add-project.component';

export const projectFeatureRoutes: Route[] = [
  { path: '', component: ProjectFeatureComponent },
  { path: 'add', component: AddProjectComponent },
];
