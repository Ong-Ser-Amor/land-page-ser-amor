import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, Menu, FooterComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  projects2025 = [
    { title: 'Projeto Alpha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Projeto Beta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Projeto Gamma', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];

  projects2024 = [
    { title: 'Projeto Delta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Projeto Epsilon', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Projeto Zeta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ];
}
