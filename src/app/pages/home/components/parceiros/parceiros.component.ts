import { Component } from '@angular/core';
import { SectionCarouselComponent } from '@app/shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-home-parceiros',
  standalone: true,
  imports: [SectionCarouselComponent],
  templateUrl: './parceiros.component.html'
})
export class ParceirosComponent {
  title = 'PARCEIROS';
  titleColor = '#DD0E79';
  description = `Mantemos uma rede extensa de parceiros institucionais, empresariais e comunitários que ampliam o alcance e a qualidade das nossas ações. Essas parcerias envolvem cooperação técnica, apoio financeiro, compartilhamento de infraestrutura e mobilização de recursos humanos voluntários. Atuamos de forma transparente e colaborativa para alinhar objetivos, metas e responsabilidades, promovendo sinergias que potencializam resultados sociais, fortalecem capacidades locais e permitem a escalabilidade de iniciativas que beneficiam diretamente famílias, escolas e comunidades.`;

  images = [
    { src: '/carrossel-quem-somos/image1.svg' },
    { src: '/carrossel-quem-somos/image2.svg' },
    { src: '/carrossel-quem-somos/image3.svg' },
    { src: '/carrossel-quem-somos/image4.svg' },
    { src: '/carrossel-quem-somos/image5.svg' }
  ];
}
