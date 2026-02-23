import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

interface CarouselImage {
  src: string;
  alt?: string;
}

@Component({
  selector: 'app-section-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-carousel.component.html',
  styleUrls: ['./section-carousel.component.css']
})
export class SectionCarouselComponent implements OnInit, OnDestroy {
  @Input() title = '';
  @Input() titleColor = '#000';
  @Input() description = '';
  @Input() sectionId?: string;
  @Input() images: CarouselImage[] = [];

  // Carousel behaviour
  currentIndex = 0; // start index of visible window
  visibleCount = 3;
  slideBy = 2;
  private resizeListener: () => void = () => {};

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
    const maxStart = Math.max(0, this.images.length - this.visibleCount);
    if (this.currentIndex >= maxStart) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = Math.min(this.currentIndex + this.slideBy, maxStart);
    }
  }

  prevSlide() {
    const maxStart = Math.max(0, this.images.length - this.visibleCount);
    if (this.currentIndex === 0) {
      this.currentIndex = maxStart;
    } else {
      this.currentIndex = Math.max(this.currentIndex - this.slideBy, 0);
    }
  }

  trackTranslatePercent() {
    return -(this.currentIndex * (100 / this.visibleCount));
  }
}
