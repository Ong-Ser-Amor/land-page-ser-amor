import { Component } from '@angular/core';
import { SectionCarouselComponent } from '../../shared/components/section-carousel/section-carousel.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [SectionCarouselComponent],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
  title = 'PROJETOS';
  titleColor = '#00BF63';
  description = `Além das aulas e ações de apoio psicossocial para a criança, adolescentes e suas famílias, atuamos também com vários outros projetos que completam nosso ciclo de acolhimento tendo como base o tripé que norteia  nosso trabalho.

O projeto  “Prato verde” atende semanalmente 60 famílias atípicas alternando as semanas com as famílias típicas acolhidas pela ong, com uma feira solidária  de legumes, verduras e frutas frescas oriundas das roças da região. Alimentos que não atendem os padrões de aparência que o mercado convencional prioriza como pepinos tortos, batata maior ou menor que o padrão ou verduras com folhas maiores ou menores e etc. Além do combate ao desperdício, combatemos a insegurança alimentar em Itapevi.

Páscoa solidária: Essa ação consiste na produção manual de milhares de ovos de Páscoa e entrega com direito a coelho da Páscoa em todas as comunidades de Itapevi. Essa ação completou 10 anos e tem como objetivo muito mais que proporcionar uma Páscoa doce, mas sim mostrar para a comunidade que alguém se importa com ela.

Natal solidário: Todos os natais de Itapevi são cheio de acolhida e felicidade proporcionada pela Ser Amor. As crianças de 5 comunidades e da sede escrevem cartinhas ao papai noel pedindo 3 opções de presente e nosso trabalho é conseguir padrinhos para cada uma delas. Em média atendemos 1000 crianças todos os anos e a entrega do presente é feita pelo próprio  papai noel com direito a uma super ceia saborosa e muito  amor doado.

Festa das crianças: Nossa festa mais tradicional e esperada por todas as comunidades que atendemos. Muita diversão, comida boa e voluntários engajados. Ninguém sai sem presente. 

Feirão de empregos semanal: Todas as semanas realizamos feirões  de emprego em um bairro da cidade com empresas parceiras da região. Além disso, temos  um grupo on line com mais de 700 pessoas que divulgam vagas de emprego todos os dias com o objetivo de empregar o máximo de pessoas possível. Entendemos que o assistencialismos é ferramenta mas o emprego é dignidade!

Corte solidário: Todos os meses nosso time de alto  estima vão a um bairro da cidade levar carinho em forma de cuidado. Cortamos o cabelo da molecada, trança de cabelo, designe de sobrancelhas e unhas, pintura de rosto e comida gostosa. O objetivo desse projeto é levar alto estima e trazer economicidade para a mãe que pode investir em outra necessidade do lar o valor que gastaria no corte de cabelo.

Varal solidário: Todos os sábados e em todas as ações externas da ong levamos muita roupa já triada e preparada para a doação. Estendemos em varais e o acolhido escolhe e pega o que lhe for útil. Essas roupas são peças que recebemos todos os dias na sede da ong e garantimos que elas cheguem a quem precisa.

Acolhimento nas casas lares: Esse é o primeiro projeto da OSC Ser Amor. Há 11 anos fazemos todos os aniversários e eventos coletivos nas casas de acolhimento da cidade de Itapevi. Festa de aniversário, festa de 15 anos, natal e Páscoa solidária. Com essas crianças aprendemos que mesmo quando se perde tudo, não podemos perder a esperança de dias melhores. As festas são oportunidade de entregarmos amor e acolhida.

Jantar solidário: toda semana, um dia a noite, saímos com marmitas de comida quente e saborosa para entrega para moradores de rua alternados com comunidades em extrema vulnerabilidade  em Itapevi. O objetivo dessa ação é além de saciar a fome,  mostrar ao novos voluntários  que não precisa ir para outro país para conhecer pessoas que ainda vivem em insegurança alimentar e pobreza extrema e precisa do nosso engajamento voluntário para diagnosticar o problema e atuar para mudar a realidade dessas famílias.`;

  images = [
    { src: '/projetos/image1.jpeg' },
    { src: '/projetos/image2.jpeg' },
    { src: '/projetos/image3.jpeg' },
    { src: '/projetos/image4.jpeg' },
    { src: '/projetos/image5.jpeg' },
    { src: '/projetos/image6.jpeg' },
    { src: '/projetos/image7.jpeg' },
    { src: '/projetos/image8.jpeg' },
    { src: '/projetos/image9.jpeg' },
    { src: '/projetos/image10.jpeg' },
    { src: '/projetos/image11.jpeg' },
    { src: '/projetos/image12.jpeg' },
    { src: '/projetos/image13.jpeg' },
    { src: '/projetos/image14.jpeg' }, 
  ];
}
