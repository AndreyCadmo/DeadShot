import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { CardGameComponent } from "../../card-game/card-game.component";
import { CommonModule } from "@angular/common";

export type gamelist = {
  image: string;
  name: string;
  price: string;
  id: string;
};

@Component({
  selector: "app-games-free",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatAutocompleteModule,
    ReactiveFormsModule,
    CardGameComponent,
    CommonModule,
  ],
  templateUrl: "./games-free.component.html",
  styleUrl: "./games-free.component.css",
})
export class GamesFreeComponent {
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
