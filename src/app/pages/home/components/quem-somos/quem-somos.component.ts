import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home-quem-somos',
  standalone: true,
  imports: [CommonModule, NgFor, MatCardModule],
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit, OnDestroy {
  // Carousel state
  currentIndex = 0; // start index of visible window
  visibleCount = 3; // show 3 images at once
  slideBy = 2; // advance by 2 on navigation
  private resizeListener: () => void = () => {};

  carouselImages: CarouselImage[] = [
    { src: '/quem-somos/image1.jpeg', alt: 'Imagem 1' },
    { src: '/quem-somos/image2.jpeg', alt: 'Imagem 2' },
    { src: '/quem-somos/image3.jpeg', alt: 'Imagem 3' },
    { src: '/quem-somos/image4.jpeg', alt: 'Imagem 4' },
    { src: '/quem-somos/image5.jpeg', alt: 'Imagem 5' },
    { src: '/quem-somos/image6.jpeg', alt: 'Imagem 6' },
    { src: '/quem-somos/image7.jpeg', alt: 'Imagem 7' },
    { src: '/quem-somos/image8.jpeg', alt: 'Imagem 8' },
    { src: '/quem-somos/image9.jpeg', alt: 'Imagem 9' },
  ];

    currentFomeIndex = 0;
    visibleFomeCount = 3;
    slideFomeBy = 2;
    carouselFomeImages: CarouselImage[] = [
      { src: '/cozinha/image1.jpeg', alt: 'Criança comendo 1' },
      { src: '/cozinha/image2.jpeg', alt: 'Criança comendo 2' },
      { src: '/cozinha/image3.jpeg', alt: 'Criança comendo 3' },
      { src: '/cozinha/image4.jpeg', alt: 'Criança comendo 4' },
      { src: '/cozinha/image5.jpeg', alt: 'Criança comendo 5' },
      { src: '/cozinha/image6.jpeg', alt: 'Criança comendo 6' },
      { src: '/cozinha/image7.jpeg', alt: 'Criança comendo 7' },
      { src: '/cozinha/image8.jpeg', alt: 'Criança comendo 8' },
      { src: '/cozinha/image9.jpeg', alt: 'Criança comendo 9' },
      { src: '/cozinha/image10.jpeg', alt: 'Criança comendo 10' },
      { src: '/cozinha/image11.jpeg', alt: 'Criança comendo 11' },
      { src: '/cozinha/image12.jpeg', alt: 'Criança comendo 12' },
      { src: '/cozinha/image13.jpeg', alt: 'Criança comendo 13' },
      { src: '/cozinha/image14.jpeg', alt: 'Criança comendo 14' }
    ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCarouselSettings();
      this.resizeListener = () => this.updateCarouselSettings();
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  private updateCarouselSettings() {
    if (window.innerWidth <= 768) {
      this.visibleCount = 1;
      this.slideBy = 1;
        this.visibleFomeCount = 1;
        this.slideFomeBy = 1;
    } else {
      this.visibleCount = 3;
      this.slideBy = 2;
        this.visibleFomeCount = 3;
        this.slideFomeBy = 2;
    }
    this.currentIndex = 0;
      this.currentFomeIndex = 0;
  }

  nextSlide() {
    const maxStart = Math.max(0, this.carouselImages.length - this.visibleCount);
    if (this.currentIndex >= maxStart) {
      this.currentIndex = 0; // wrap to start
    } else {
      this.currentIndex = Math.min(this.currentIndex + this.slideBy, maxStart);
    }
  }

    nextSlideFome() {
      const maxStart = Math.max(0, this.carouselFomeImages.length - this.visibleFomeCount);
      if (this.currentFomeIndex >= maxStart) {
        this.currentFomeIndex = 0;
      } else {
        this.currentFomeIndex = Math.min(this.currentFomeIndex + this.slideFomeBy, maxStart);
      }
    }

  prevSlide() {
    const maxStart = Math.max(0, this.carouselImages.length - this.visibleCount);
    if (this.currentIndex === 0) {
      this.currentIndex = maxStart; // wrap to end
    } else {
      this.currentIndex = Math.max(this.currentIndex - this.slideBy, 0);
    }
  }

    prevSlideFome() {
      const maxStart = Math.max(0, this.carouselFomeImages.length - this.visibleFomeCount);
      if (this.currentFomeIndex === 0) {
        this.currentFomeIndex = maxStart;
      } else {
        this.currentFomeIndex = Math.max(this.currentFomeIndex - this.slideFomeBy, 0);
      }
    }
  trackTranslatePercentFome() {
    return -(this.currentFomeIndex * (100 / this.visibleFomeCount));
  }

  // Helper used in template to compute track translate percentage
  trackTranslatePercent() {
    return -(this.currentIndex * (100 / this.visibleCount));
  }
}
