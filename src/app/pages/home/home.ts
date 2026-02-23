import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { AtividadesComponent } from '../atividades/atividades.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { NosApoieComponent } from '../nos-apoie/nos-apoie.component';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  imports: [Menu, FooterComponent, NgFor, NgIf, MatButtonModule, MatCardModule, QuemSomosComponent, AtividadesComponent, ProjetosComponent, ParceirosComponent, NosApoieComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  currentSlideIndex = 0;

  carouselImages: CarouselImage[] = [
    { src: '/carrossel/imagem1.png', alt: 'Imagem 1' },
    { src: '/carrossel/imagem2.png', alt: 'Imagem 2' },
    { src: '/carrossel/imagem3.png', alt: 'Imagem 3' },
  ];

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }
}
