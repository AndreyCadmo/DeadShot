import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardGameComponent } from "../../components/card-game/card-game.component";
import { NoticeComponent } from "../../components/notice/notice.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { LoadingComponent } from "../../components/loading/loading.component";

export type gamelist = {
  image: string;
  name: string;
  price: string;
  id: string;
};

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, CardGameComponent, NoticeComponent, ButtonsComponent, LoadingComponent],
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

  teste: string = "N/A";

  funcTeste = (param: string) => {
    this.teste = param;
  }

  // abrirForm = () => {
  //   const divForm = document.getElementById("form");
  //   const divWeb = document.getElementById("router");
  //   console.log("Função Chamada");
  //   if (divForm?.style.display == "none" && divWeb?.style.display == "flex") {
  //     divForm.style.display = "flex";
  //     divWeb.style.display = "none";
  //     console.log("FORM ATIVO");
  //   } else if (
  //     divForm?.style.display == "flex" &&
  //     divWeb?.style.display == "none"
  //   ) {
  //     divForm.style.display = "none";
  //     divWeb.style.display = "flex";
  //     console.log("FORM DESATIVADO");
  //   }
  // };
}
