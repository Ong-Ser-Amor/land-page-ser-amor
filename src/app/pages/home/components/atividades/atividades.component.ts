import { Component } from '@angular/core';
import { SectionCarouselComponent } from '@app/shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-home-atividades',
  standalone: true,
  imports: [SectionCarouselComponent],
  templateUrl: './atividades.component.html'
})
export class AtividadesComponent {
  title = 'ATIVIDADES';
  titleColor = '#D8CD16';
  description = `Para cumprir o tripé que norteia nosso trabalho, oferecemos aulas de jiu-jitsu, capoeira, futebol, balé, reforço escolar, informática básica e avançada e arteterapia. Também oferecemos apoio psicológico, com terapia individual e encontros em grupo com temas determinados. Além disso, promovemos rodas de leitura na biblioteca e atividades de recreação criativa com o suporte da nossa brinquedoteca.`;

  images = [
    { src: '/atividades/image1.jpeg' },
    { src: '/atividades/image2.jpeg' },
    { src: '/atividades/image3.jpeg' },
    { src: '/atividades/image4.jpeg' },
    { src: '/atividades/image5.jpeg' },
    { src: '/atividades/image6.jpeg' },
    { src: '/atividades/image7.jpeg' },
    { src: '/atividades/image8.jpeg' }
  ];
}
