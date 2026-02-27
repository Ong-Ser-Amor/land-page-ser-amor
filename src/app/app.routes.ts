import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { NosApoieComponent } from './pages/nos-apoie/nos-apoie.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'como-nos-apoiar', component: NosApoieComponent },
  { path: '**', redirectTo: '' }
];
