import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header></app-header>
  <section class="router-content">
    <router-outlet/>
  </section>
   `,
  styles: [],
})
export class AppComponent {
  title = "DeadShot";
}
