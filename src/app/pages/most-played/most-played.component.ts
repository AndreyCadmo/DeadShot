import { Component } from '@angular/core';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { CommonModule } from '@angular/common';

export type gamelist = {
  image: string;
  name: string;
  price: string;
  id: string;
};

@Component({
  selector: "app-most-played",
  standalone: true,
  imports: [CardGameComponent, CommonModule],
  templateUrl: "./most-played.component.html",
  styleUrl: "./most-played.component.css",
})
export class MostPlayedComponent {
  cards: gamelist[] = [
    {
      image: "../../../../../assets/games/cacadaCruel/cacadaCruel.png",
      name: "Caçada Cruel",
      price: "GRATUITO",
      id: "cacada-cruel",
    },
    {
      image:
        "../../../../../assets/games/furiaFlonteirica/furiaFlonteirica.png",
      name: "Fúria Flonteiriça",
      price: "GRATUITO",
      id: "furia-flonteirica",
    },
    {
      image: "../../../../../assets/games/blitzTatica/blitzTatica.png",
      name: "Blitz Tática",
      price: "GRATUITO",
      id: "blitz-tatica",
    },
  ];
}
