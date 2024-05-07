import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { JogoComponent } from "./pages/jogo/jogo.component";
import { MostPlayedComponent } from "./pages/most-played/most-played.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "mais-jogados", component: MostPlayedComponent },
  { path: "jogo/:id", component: JogoComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
