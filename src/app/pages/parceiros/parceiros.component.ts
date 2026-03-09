import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionCarouselComponent } from '@app/shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule, SectionCarouselComponent],
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  title = 'PARCEIROS';
  titleColor = '#DD0E79';
  description = `Não fazemos nada sozinhos, e isso é nossa maior certeza. Além do corpo de coordenadores e voluntários comprometidos temos empresas que não soltam nossa mão e nos ajudam a fazer tudo isso acontecer. 

Seja com incentivo  financeiro, parcerias constante nos projetos sazonais, internet, alimentos ou vagas de emprego, são essas empresas que hoje, fazem esse projeto impactar a vida de tanta gente.`;

  images = [
    { src: '/parceiros/image1.jpeg' },
    { src: '/parceiros/image2.jpeg' },
    { src: '/parceiros/image3.jpeg' },
    { src: '/parceiros/image4.jpeg' },
    { src: '/parceiros/image5.jpeg' },
    { src: '/parceiros/image6.jpeg' },
    { src: '/parceiros/image7.jpeg' },
    { src: '/parceiros/image8.jpeg' },
    { src: '/parceiros/image9.jpeg' },
    { src: '/parceiros/image10.jpeg' },
    { src: '/parceiros/image11.jpg' } 
  ];

  isMobile = false;

  ngOnInit() {
    this.updateIsMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateIsMobile.bind(this));
    }
  }

  updateIsMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}
