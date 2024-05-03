import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddGameComponent } from "./add-game/add-game.component";

@Component({
  selector: "app-buttons",
  standalone: true,
  imports: [],
  styleUrl: "./buttons.component.css",
  templateUrl: "./buttons.component.html",
})
export class ButtonsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddGameComponent, {minWidth: "45vw"});
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
