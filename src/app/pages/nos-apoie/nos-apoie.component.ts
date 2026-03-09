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

  pixKey = '42.429.908/0001-65';
  isPixCopied = false;

  copyPixKey(): void {
    const textToCopy = this.pixKey;

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(textToCopy);
      this.showCopiedFeedback();
      return;
    }

    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    this.showCopiedFeedback();
  }

  private showCopiedFeedback(): void {
    this.isPixCopied = true;
    setTimeout(() => {
      this.isPixCopied = false;
    }, 2000);
  }
}
