import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  menuOpen = signal(false);
  private router = inject(Router);

  menuItems: MenuItem[] = [
    { label: 'Início', link: '/' },
    { label: 'Atividades', link: '/atividades' },
    { label: 'Projetos', link: '/projetos' },
    { label: 'Parceiros', link: '/parceiros' },
    { label: 'Como Apoiar', link: '/como-nos-apoiar' },
  ];

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onNavigate(link: string) {
    this.closeMenu();
    this.router.navigate([link]);
  }
}
