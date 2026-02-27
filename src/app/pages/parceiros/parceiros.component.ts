import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule, Menu, FooterComponent],
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  partners = [
    { name: 'Parceiro 1', logo: '/parceiros/logo1.png' },
    { name: 'Parceiro 2', logo: '/parceiros/logo2.png' },
    { name: 'Parceiro 3', logo: '/parceiros/logo3.png' },
    { name: 'Parceiro 4', logo: '/parceiros/logo4.png' },
    { name: 'Parceiro 5', logo: '/parceiros/logo5.png' },
    { name: 'Parceiro 6', logo: '/parceiros/logo6.png' },
    { name: 'Parceiro 7', logo: '/parceiros/logo7.png' },
    { name: 'Parceiro 8', logo: '/parceiros/logo8.png' }
  ];
}
