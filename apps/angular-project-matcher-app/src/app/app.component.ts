import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuUiComponent } from '@project-matcher/menu-ui';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    MenuUiComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
