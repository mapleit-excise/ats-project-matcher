import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-menu-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-ui.component.html',
  styleUrl: './menu-ui.component.scss',
})
export class MenuUiComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  menuProject() {
    this.router.navigate(['project'], { relativeTo: this.route });
  }
}
