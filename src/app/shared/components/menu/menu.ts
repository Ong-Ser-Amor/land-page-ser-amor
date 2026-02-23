import { ChangeDetectionStrategy, Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  imports: [RouterLink, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu implements OnInit {
  menuOpen = signal(false);
  activeSection = signal<string>('top');

  menuItems: MenuItem[] = [
    { label: 'Início', link: 'top' },
    { label: 'Atividades', link: 'atividades' },
    { label: 'Projetos', link: 'projetos' },
    { label: 'Parceiros', link: 'parceiros' },
    { label: 'Nos Apoie', link: 'nos-apoie' },
  ];

  ngOnInit() {
    this.detectActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.detectActiveSection();
  }

  private detectActiveSection() {
    const sections = this.menuItems.map(item => item.link);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
      if (sectionId === 'top') continue;
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          this.activeSection.set(sectionId);
          return;
        }
      }
    }
    this.activeSection.set('top');
  }

  isActive(link: string): boolean {
    return this.activeSection() === link;
  }

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  onNavigate(link: string) {
    this.closeMenu();
    try {
      const header = document.querySelector('.header');
      const headerOffset = header ? (header as HTMLElement).getBoundingClientRect().height : 0;

      const smoothScrollTo = (targetY: number, duration = 700) => {
        const startY = window.pageYOffset;
        const change = targetY - startY;
        const startTime = performance.now();

        const easeInOutQuad = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const step = (now: number) => {
          const elapsed = Math.min(1, (now - startTime) / duration);
          const value = startY + change * easeInOutQuad(elapsed);
          window.scrollTo(0, Math.round(value));
          if (elapsed < 1) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      };

      if (!link || link === 'top') {
        smoothScrollTo(0);
        return;
      }

      const el = document.getElementById(link);
      if (el) {
        const rect = el.getBoundingClientRect();
        const target = window.pageYOffset + rect.top - headerOffset - 12; // small gap
        smoothScrollTo(target, 800);
      } else {
        smoothScrollTo(0);
      }
    } catch (e) {
      console.warn('Scroll failed', e);
    }
  }
}
    try {
      const header = document.querySelector('.header');
      const headerOffset = header ? (header as HTMLElement).getBoundingClientRect().height : 0;

      const smoothScrollTo = (targetY: number, duration = 700) => {
        const startY = window.pageYOffset;
        const change = targetY - startY;
        const startTime = performance.now();

        const easeInOutQuad = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const step = (now: number) => {
          const elapsed = Math.min(1, (now - startTime) / duration);
          const value = startY + change * easeInOutQuad(elapsed);
          window.scrollTo(0, Math.round(value));
          if (elapsed < 1) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      };

      if (!link || link === 'top') {
        smoothScrollTo(0);
        return;
      }

      const el = document.getElementById(link);
      if (el) {
        const rect = el.getBoundingClientRect();
        const target = window.pageYOffset + rect.top - headerOffset - 12; // small gap
        smoothScrollTo(target, 800);
      } else {
        smoothScrollTo(0);
      }
    } catch (e) {
      console.warn('Scroll failed', e);
    }
  }
}
