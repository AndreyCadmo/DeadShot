import { Component, Input } from "@angular/core";
import { gamelist } from "../../pages/home/home.component"
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card-game",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./card-game.component.html",
  styleUrl: "./card-game.component.css",
})
export class CardGameComponent {
  @Input({ required: false }) game!: gamelist;

  scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
