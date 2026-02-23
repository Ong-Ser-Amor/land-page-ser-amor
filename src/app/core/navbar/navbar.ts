import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  template: `<mat-toolbar color="primary"><span class="brand">Ser Amor</span><span style="flex:1 1 auto"></span><mat-icon>menu</mat-icon></mat-toolbar>`,
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar { }
