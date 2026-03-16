import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';
import { AtividadesComponent } from '../atividades/atividades.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { NosApoieComponent } from '../nos-apoie/nos-apoie.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { track } from '@vercel/analytics';

interface CarouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  imports: [Menu, FooterComponent, QuemSomosComponent, AtividadesComponent, ProjetosComponent, ParceirosComponent, NosApoieComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  emConstrucao = false;
  currentSlideIndex = 0;
  enableCarouselAnimation = false;
  private autoSlideInterval: any = null;
  private pendingScrollRetry: number | null = null;
  private scrollAnimationFrame: number | null = null;
  private readonly isBrowser: boolean;
  private readonly canonicalUrl = 'https://ongseramor.org/';

  carouselImages: CarouselImage[] = [
    { src: '/carrossel/imagem1.webp', alt: 'Imagem 1' },
    { src: '/carrossel/imagem2.webp', alt: 'Imagem 2' },
    { src: '/carrossel/imagem3.webp', alt: 'Imagem 3' },
    { src: '/carrossel/imagem4.webp', alt: 'Imagem 4' },
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

    if (this.pendingScrollRetry !== null) {
      window.clearTimeout(this.pendingScrollRetry);
      this.pendingScrollRetry = null;
    }

    if (this.scrollAnimationFrame !== null) {
      window.cancelAnimationFrame(this.scrollAnimationFrame);
      this.scrollAnimationFrame = null;
    }
  }

  get currentHeroImage() {
    return this.carouselImages[this.currentSlideIndex];
  }

  nextSlide(isManual = true) {
    this.enableCarouselAnimation = true;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselImages.length;
    this.cdr.markForCheck();
    
    if (isManual) {
      this.restartAutoSlide();
    }
  }

  prevSlide() {
    this.enableCarouselAnimation = true;
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.cdr.markForCheck();
    this.restartAutoSlide();
  }

  goToSlide(index: number) {
    this.enableCarouselAnimation = true;
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

    this.navigateToSection('nos-apoie');
  }

  onKnowMoreClick() {
    this.navigateToSection('historia');
  }

  onMenuNavigate(sectionId: string) {
    this.navigateToSection(sectionId);
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

  private navigateToSection(sectionId: string) {
    if (!this.isBrowser) {
      return;
    }

    if (this.pendingScrollRetry !== null) {
      window.clearTimeout(this.pendingScrollRetry);
      this.pendingScrollRetry = null;
    }

    if (this.scrollAnimationFrame !== null) {
      window.cancelAnimationFrame(this.scrollAnimationFrame);
      this.scrollAnimationFrame = null;
    }

    if (!sectionId || sectionId === 'top') {
      this.animateScrollTo(0);
      return;
    }

    this.scrollToSection(sectionId, 0);
  }

  private scrollToSection(sectionId: string, retryCount: number) {
    const target = this.document.getElementById(sectionId);

    if (!target) {
      if (retryCount < 12) {
        this.pendingScrollRetry = window.setTimeout(() => {
          this.scrollToSection(sectionId, retryCount + 1);
        }, 100);
      }
      return;
    }

    this.pendingScrollRetry = null;

    const header = this.document.querySelector('.header');
    const headerOffset = header ? (header as HTMLElement).getBoundingClientRect().height : 0;
    const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset - 12);

    this.animateScrollTo(targetY);
  }

  private animateScrollTo(targetY: number) {
    if (!this.isBrowser) {
      return;
    }

    if (this.scrollAnimationFrame !== null) {
      window.cancelAnimationFrame(this.scrollAnimationFrame);
      this.scrollAnimationFrame = null;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;

    if (Math.abs(distance) < 2) {
      window.scrollTo(0, targetY);
      return;
    }

    // Duração dinâmica para sensação natural de rolagem (sem salto abrupto).
    const duration = Math.min(1500, Math.max(550, Math.abs(distance) * 0.65));
    const startTime = performance.now();

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        this.scrollAnimationFrame = window.requestAnimationFrame(step);
      } else {
        this.scrollAnimationFrame = null;
      }
    };

    this.scrollAnimationFrame = window.requestAnimationFrame(step);
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
