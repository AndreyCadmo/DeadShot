import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "../../components/card-game/card-game.component";

export type gamelist = {
  image: string;
  name: string;
  price: string;
};

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, CardGameComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  imageUrl = "../../../../../assets/notice/noticeOne.png";

  mudarImage =  (image: string) => {
    if(this.imageUrl != null){
      this.imageUrl = image;
    }
  };

  cards: gamelist[] = [
    {
      image: "../../../../../assets/games/tiro2077.png",
      name: "Tiro 2077",
      price: "GRATUITO",
    },
    {
      image: "../../../../../assets/games/cacadaCruel.png",
      name: "Caçada Cruel",
      price: "GRATUITO",
    },
    {
      image: "../../../../../assets/games/esquadraoElite.png",
      name: "Esquadrão de Elite",
      price: "GRATUITO",
    },
    {
      image: "../../../../../assets/games/furiaFlonteirica.png",
      name: "Fúria Flonteiriça",
      price: "GRATUITO",
    },
    {
      image: "../../../../../assets/games/blitzTatica.png",
      name: "Blitz Tática",
      price: "GRATUITO",
    },
  ];
}
