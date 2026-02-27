import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nos-apoie',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './nos-apoie.component.html',
  styleUrls: ['./nos-apoie.component.css']
})
export class NosApoieComponent {
  supportWays = [
    { 
      title: 'Doação Financeira', 
      icon: 'payments', 
      description: 'Sua contribuição mensal ou pontual ajuda a manter nossas atividades e projetos funcionando.',
      action: 'Doar agora'
    },
    { 
      title: 'Voluntariado', 
      icon: 'volunteer_activism', 
      description: 'Doe seu tempo e talento para ajudar no desenvolvimento das nossas crianças e adolescentes.',
      action: 'Ser voluntário'
    },
    { 
      title: 'Doação de Materiais', 
      icon: 'inventory_2', 
      description: 'Aceitamos doações de alimentos, materiais escolares, roupas e equipamentos esportivos.',
      action: 'Ver lista'
    }
  ];

  pixKey = '00.000.000/0001-00';
}
