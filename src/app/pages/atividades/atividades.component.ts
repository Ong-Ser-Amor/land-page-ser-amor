import { Component } from '@angular/core';
import { SectionCarouselComponent } from '@app/shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [SectionCarouselComponent],
  templateUrl: './atividades.component.html'
})
export class AtividadesComponent {
  title = 'ATIVIDADES';
  titleColor = '#D8CD16';
  description = `Realizamos um conjunto amplo e contínuo de atividades voltadas ao fortalecimento das pessoas e comunidades com as quais trabalhamos. Entre elas constam oficinas práticas de geração de renda, capacitação profissional, atividades educativas para crianças e jovens, ações de saúde preventiva e prevenção, rodas de diálogo e formação de lideranças locais. As ações são planejadas em parceria com moradores, voluntários e instituições, com foco na participação ativa da comunidade, na promoção da autonomia, na transferência de conhecimento e na criação de redes de apoio duradouras que permitam acompanhar resultados ao longo do tempo.`;

  images = [
    { src: '/carrossel-quem-somos/image1.svg' },
    { src: '/carrossel-quem-somos/image2.svg' },
    { src: '/carrossel-quem-somos/image3.svg' },
    { src: '/carrossel-quem-somos/image4.svg' },
    { src: '/carrossel-quem-somos/image5.svg' }
  ];
}
