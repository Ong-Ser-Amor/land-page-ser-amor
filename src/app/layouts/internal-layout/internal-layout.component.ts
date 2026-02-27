import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '@app/shared/components/menu/menu';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-internal-layout',
  standalone: true,
  imports: [RouterOutlet, Menu, FooterComponent],
  templateUrl: './internal-layout.component.html',
  styleUrl: './internal-layout.component.css'
})
export class InternalLayoutComponent {}
