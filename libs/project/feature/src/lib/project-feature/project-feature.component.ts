import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '@project-matcher/project-data-access';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'lib-project-feature',
  standalone: true,
  imports: [CommonModule, MatButton, MatCard, MatCardContent],
  templateUrl: './project-feature.component.html',
  styleUrl: './project-feature.component.scss',
})
export class ProjectFeatureComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  openDetailPage() {
    this.router.navigate(['detail'], { relativeTo: this.route });
  }
}
