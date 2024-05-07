import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "../../components/card-game/card-game.component";
import { NoticeComponent } from "../../components/notice/notice.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

export type gamelist = {
  image: string;
  name: string;
  price: string;
  id: string;
};

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    CardGameComponent,
    NoticeComponent,
    ButtonsComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
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
      id: "tiro-2077",
    },
    {
      image: "../../../../../assets/games/cacadaCruel/cacadaCruel.png",
      name: "Caçada Cruel",
      price: "GRATUITO",
      id: "cacada-cruel",
    },
    {
      image: "../../../../../assets/games/esquadraoElite/esquadraoElite.png",
      name: "Esquadrão de Elite",
      price: "GRATUITO",
      id: "esquadrao-de-elite",
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
