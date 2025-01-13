import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-header-component',
  imports: [CommonModule, MaterialModule],
  standalone: true,
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss',
})
export class HeaderComponentComponent {
  isMenuOpen: boolean = false;
  notificationCount: number = 15;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
