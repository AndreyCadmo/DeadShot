import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddGameComponent } from "./add-game/add-game.component";
import { GamesFreeComponent } from "./games-free/games-free.component";
import { EarlyAccessComponent } from "./early-access/early-access.component";

@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [],
  styleUrl: "./buttons.component.css",
  templateUrl: "./buttons.component.html",
})
export class ButtonsComponent {
  constructor(public dialog: MatDialog) {}

  openAddGame() {
    const dialogRef = this.dialog.open(AddGameComponent, { minWidth: "45vw" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFreeGames() {
    const dialogRef = this.dialog.open(GamesFreeComponent, { minWidth: "90vw", minHeight: "40vw"});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEarlyAccess() {
    const dialogRef = this.dialog.open(EarlyAccessComponent, { minWidth: "90vw", minHeight: "40vw"});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
