import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@project-matcher/project-data-access';

@Component({
  selector: 'lib-project-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-feature.component.html',
  styleUrl: './project-feature.component.scss',
})
export class ProjectFeatureComponent {}
