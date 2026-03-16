import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  @Output() navigateTo = new EventEmitter<string>();

  menuOpen = signal(false);

  menuItems: MenuItem[] = [
    { label: 'Início', link: 'top' },
    { label: 'Atividades', link: 'atividades' },
    { label: 'Projetos', link: 'projetos' },
    { label: 'Parceiros', link: 'parceiros' },
    { label: 'Nos Apoie', link: 'nos-apoie' },
  ];

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onNavigate(link: string) {
    this.closeMenu();
    this.navigateTo.emit(link);
  }
}
