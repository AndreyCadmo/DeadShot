import { Component, Input } from "@angular/core";
import { gamelist } from "../../pages/home/home.component"

@Component({
  selector: "app-card-game",
  standalone: true,
  imports: [],
  templateUrl: "./card-game.component.html",
  styleUrl: "./card-game.component.css",
})
export class CardGameComponent {
  @Input({ required: false }) game!: gamelist;
}
