import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, Menu, FooterComponent],
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent {
  mainActivities = [
    { title: 'Futebol', icon: 'sports_soccer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { title: 'Informática', icon: 'computer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' },
    { title: 'Reforço', icon: 'school', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' }
  ];

  requirements = [
    'Ter entre 7 a 12 anos',
    'Cursando ensino fundamental',
    'Participar de 70% das aulas'
  ];

  otherActivities = [
    { title: 'Atividade 1' },
    { title: 'Atividade 2' },
    { title: 'Atividade 3' }
  ];
}
