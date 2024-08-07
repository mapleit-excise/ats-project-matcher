import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-project-detail',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  backPage() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
