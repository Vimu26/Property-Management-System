import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AddsComponentComponent } from './adds-component/adds-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    HeaderComponentComponent,
    AddsComponentComponent,
    FooterComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Web';
}
