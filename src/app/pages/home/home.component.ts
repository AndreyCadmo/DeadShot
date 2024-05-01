import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "../../components/card-game/card-game.component";

export type gamelist = {
  image: string;
  name: string;
  price: string;
  id: string;
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

  mudarImage = (image: string) => {
    if (this.imageUrl != null) {
      this.imageUrl = image;
    }
  };

  cards: gamelist[] = [
    {
      image: "../../../../../assets/games/tiro2077/tiro2077.png",
      name: "Tiro 2077",
      price: "GRATUITO",
      id: "1",
    },
    {
      image: "../../../../../assets/games/cacadaCruel/cacadaCruel.png",
      name: "Caçada Cruel",
      price: "GRATUITO",
      id: "2",
    },
    {
      image: "../../../../../assets/games/esquadraoElite/esquadraoElite.png",
      name: "Esquadrão de Elite",
      price: "GRATUITO",
      id: "3",
    },
    {
      image:
        "../../../../../assets/games/furiaFlonteirica/furiaFlonteirica.png",
      name: "Fúria Flonteiriça",
      price: "GRATUITO",
      id: "4",
    },
    {
      image: "../../../../../assets/games/blitzTatica/blitzTatica.png",
      name: "Blitz Tática",
      price: "GRATUITO",
      id: "5",
    },
  ];
}
