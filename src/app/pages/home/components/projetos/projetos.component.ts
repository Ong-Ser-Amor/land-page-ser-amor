import { Component } from '@angular/core';
import { SectionCarouselComponent } from '@app/shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-home-projetos',
  standalone: true,
  imports: [SectionCarouselComponent],
  templateUrl: './projetos.component.html'
})
export class ProjetosComponent {
  title = 'PROJETOS';
  titleColor = '#00BF63';
  description = `Nossos projetos são desenhados para gerar impacto mensurável nas áreas de educação, saúde, assistência social e inclusão digital. Trabalhamos com programas de longo prazo que contemplam diagnóstico comunitário, co-criação de soluções, implementação e monitoramento de resultados. Cada projeto busca articular atores locais e parceiros estratégicos, promover capacitação técnica, estimular a participação cidadã e criar caminhos para a sustentabilidade das iniciativas, garantindo que os benefícios cheguem às famílias e bairros que mais necessitam.`;

  images = [
    { src: '/carrossel-quem-somos/image1.svg' },
    { src: '/carrossel-quem-somos/image2.svg' },
    { src: '/carrossel-quem-somos/image3.svg' },
    { src: '/carrossel-quem-somos/image4.svg' },
    { src: '/carrossel-quem-somos/image5.svg' }
  ];
}
