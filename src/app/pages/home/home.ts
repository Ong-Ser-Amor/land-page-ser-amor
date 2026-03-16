import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { AtividadesComponent } from '../atividades/atividades.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { NosApoieComponent } from '../nos-apoie/nos-apoie.component';
import { DOCUMENT, isPlatformBrowser, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Meta, Title } from '@angular/platform-browser';
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
export class Home implements OnInit, AfterViewInit, OnDestroy {
  emConstrucao = false;
  currentSlideIndex = 0;
  private autoSlideInterval: any = null;
  private readonly isBrowser: boolean;
  private readonly canonicalUrl = 'https://ongseramor.org/';

  carouselImages: CarouselImage[] = [
    { src: '/carrossel/imagem1.png', alt: 'Imagem 1' },
    { src: '/carrossel/imagem2.png', alt: 'Imagem 2' },
    { src: '/carrossel/imagem3.png', alt: 'Imagem 3' },
    { src: '/carrossel/imagem4.jpeg', alt: 'Imagem 4' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.applySeoTags();
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

    this.scrollToSection('nos-apoie');
  }

  onKnowMoreClick() {
    this.scrollToSection('historia');
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

  private scrollToSection(sectionId: string) {
    if (!this.isBrowser) {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const duration = 1200;
    const startTime = performance.now();

    const easeInOutCubic = (time: number) =>
      time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }

  private applySeoTags() {
    this.document.documentElement.lang = 'pt-BR';

    this.title.setTitle('Ser Amor | Reforço Escolar, Esporte e Apoio Psicológico');
    this.meta.updateTag({
      name: 'description',
      content: 'A ONG Ser Amor transforma vidas através da educação, oferecendo reforço escolar, informática, esporte e apoio psicológico para crianças e adolescentes.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'ONG Ser Amor, ONG em Itapevi, reforço escolar, projeto social, apoio psicológico, esporte para crianças'
    });
    this.meta.updateTag({ name: 'author', content: 'ONG Ser Amor' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: 'ONG Ser Amor - Transformando vidas através da educação' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Reforço escolar, informática, esporte e apoio psicológico para crianças e adolescentes.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: this.canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: 'https://ongseramor.org/logo.png' });

    let canonicalLink = this.document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', this.canonicalUrl);
  }
}
