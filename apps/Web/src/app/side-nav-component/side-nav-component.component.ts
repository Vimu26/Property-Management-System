import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav-component',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './side-nav-component.component.html',
  styleUrl: './side-nav-component.component.scss',
})
export class SideNavComponentComponent {}
