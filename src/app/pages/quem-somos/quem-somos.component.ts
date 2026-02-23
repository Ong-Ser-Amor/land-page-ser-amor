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
  selector: 'app-quem-somos',
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
    { src: '/carrossel-quem-somos/image1.svg', alt: 'Imagem 1' },
    { src: '/carrossel-quem-somos/image2.svg', alt: 'Imagem 2' },
    { src: '/carrossel-quem-somos/image3.svg', alt: 'Imagem 3' },
    { src: '/carrossel-quem-somos/image4.svg', alt: 'Imagem 4' },
    { src: '/carrossel-quem-somos/image5.svg', alt: 'Imagem 5' },
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
    } else {
      this.visibleCount = 3;
      this.slideBy = 2;
    }
    this.currentIndex = 0;
  }

  nextSlide() {
    const maxStart = Math.max(0, this.carouselImages.length - this.visibleCount);
    if (this.currentIndex >= maxStart) {
      this.currentIndex = 0; // wrap to start
    } else {
      this.currentIndex = Math.min(this.currentIndex + this.slideBy, maxStart);
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

  // Helper used in template to compute track translate percentage
  trackTranslatePercent() {
    return -(this.currentIndex * (100 / this.visibleCount));
  }
}
