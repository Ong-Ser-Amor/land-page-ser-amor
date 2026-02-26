import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { AtividadesComponent } from '../atividades/atividades.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { NosApoieComponent } from '../nos-apoie/nos-apoie.component';
import { isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { track } from '@vercel/analytics';

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
export class Home implements AfterViewInit, OnDestroy {
  emConstrucao = false;
  currentSlideIndex = 0;
  private autoSlideInterval: any = null;
  private readonly isBrowser: boolean;

  carouselImages: CarouselImage[] = [
    { src: '/carrossel/imagem1.png', alt: 'Imagem 1' },
    { src: '/carrossel/imagem2.png', alt: 'Imagem 2' },
    { src: '/carrossel/imagem3.png', alt: 'Imagem 3' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser && !this.emConstrucao) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide(isManual = true) {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
    this.cdr.markForCheck();
    
    if (isManual) {
      this.restartAutoSlide();
    }
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.cdr.markForCheck();
    this.restartAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
    this.cdr.markForCheck();
    this.restartAutoSlide();
  }

  pauseAutoSlide() {
    if (this.isBrowser) {
      this.stopAutoSlide();
    }
  }

  resumeAutoSlide() {
    if (this.isBrowser && !this.emConstrucao) {
      this.startAutoSlide();
    }
  }

  onDonateClick() {
    track('Donate Button Clicked', {
      location: 'home_hero',
      buttonText: 'Doe Agora'
    });
  }

  private startAutoSlide() {
    if (!this.isBrowser || this.autoSlideInterval || this.carouselImages.length <= 1) {
      return;
    }

    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(false);
    }, 3000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  private restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
