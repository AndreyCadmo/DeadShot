import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

const basePath = "../../../assets/games";

type jogoType = {
  id: string;
  name: string;
  gameYearOld: string;
  gameCategory: string;
  gameDescription: string;
  images: imageType[];
};

type imageType = {
  alt: string;
  path: string;
};

const jogos: jogoType[] = [
  {
    id: "1",
    name: "Tiro 2077",
    gameCategory: "Ação, Aventura e Ficção Ciêntifica",
    gameDescription:
      "Tiro 2077 é ambientado em uma metrópole futurista controlada por corporações corruptas e facções rebeldes. Os jogadores assumem o papel de um mercenário em missões perigosas, enfrentando inimigos com armas avançadas. Com campanha narrativa e modos multiplayer, o jogo combina ação frenética, estratégia e exploração em ambientes urbanos vastos. Com gráficos impressionantes e trilha sonora eletrizante, oferece uma experiência imersiva no futuro distópico de 2077.",
    gameYearOld: "18",
    images: [
      {
        alt: "image 1 do jogo 1",
        path: `${basePath}/tiro2077/tiro2077_2.png`,
      },
      {
        alt: "image 2 do jogo 1",
        path: `${basePath}/tiro2077/tiro2077_3.png`,
      },
      {
        alt: "image 3 do jogo 1",
        path: `${basePath}/tiro2077/tiro2077_4.png`,
      },
      {
        alt: "image 4 do jogo 1",
        path: `${basePath}/tiro2077/tiro2077_5.png`,
      },
    ],
  },
  {
    id: "2",
    name: "Caçada Cruel",
    gameCategory: "Ação, Aventura e Terror",
    gameDescription:
      "Caçada Cruel é um jogo imersivo situado em um mundo distópico onde a sobrevivência é a única prioridade. Os jogadores assumem o papel de caçadores solitários, enfrentando gangues e mutantes em busca de recursos e objetivos desafiadores. Com gráficos impressionantes e uma trilha sonora envolvente, cada decisão molda o destino do protagonista nesta jornada implacável pela sobrevivência.",
    gameYearOld: "18",
    images: [
      {
        alt: "image 1 do jogo 1",
        path: `${basePath}/cacadaCruel/cacadaCruel_4.png`,
      },
      {
        alt: "image 2 do jogo 1",
        path: `${basePath}/cacadaCruel/cacadaCruel_3.png`,
      },
      {
        alt: "image 3 do jogo 1",
        path: `${basePath}/cacadaCruel/cacadaCruel_2.png`,
      },
      {
        alt: "image 4 do jogo 1",
        path: `${basePath}/cacadaCruel/cacadaCruel_5.png`,
      },
    ],
  },
  {
    id: "3",
    name: "Esquadrão de Elite",
    gameCategory: "Ação",
    gameDescription:
      'Esquadrão de Elite: é uma história envolvente sobre uma equipe de agentes especiais determinados a combater o crime em uma metrópole dominada pela corrupção. Liderados pelo Capitão Marcos, o Esquadrão enfrenta uma organização criminosa chamada "A Sombra", enquanto mergulha em uma teia de traições e conspirações que envolvem figuras poderosas da cidade. Com uma mistura de ação intensa, estratégia tática e escolhas morais difíceis, a narrativa coloca à prova a lealdade da equipe e a determinação em busca da justiça.',
    gameYearOld: "16",
    images: [
      {
        alt: "image 1 do jogo 1",
        path: `${basePath}/esquadraoElite/esquadraoElite_2.png`,
      },
      {
        alt: "image 2 do jogo 1",
        path: `${basePath}/esquadraoElite/esquadraoElite_3.png`,
      },
      {
        alt: "image 3 do jogo 1",
        path: `${basePath}/esquadraoElite/esquadraoElite_4.png`,
      },
      {
        alt: "image 4 do jogo 1",
        path: `${basePath}/esquadraoElite/esquadraoElite_5.png`,
      },
    ],
  },
  {
    id: "4",
    name: "Fúria Flonteiriça",
    gameCategory: "Ação e Aventura",
    gameDescription:
      "Fúria Fronteiriça coloca os jogadores em um mundo pós-apocalíptico, onde enfrentam facções rivais e ameaças desconhecidas em uma fronteira desolada. Com armas improvisadas e habilidades de combate, os jogadores exploram ambientes hostis em busca de recursos e missões vitais. Com uma narrativa envolvente, gráficos realistas e uma trilha sonora imersiva, o jogo oferece uma experiência emocionante e intensa de sobrevivência e confronto.",
    gameYearOld: "18",
    images: [
      {
        alt: "image 1 do jogo 1",
        path: `${basePath}/furiaFlonteirica/furiaFlonteirica_2.png`,
      },
      {
        alt: "image 2 do jogo 1",
        path: `${basePath}/furiaFlonteirica/furiaFlonteirica_3.png`,
      },
      {
        alt: "image 3 do jogo 1",
        path: `${basePath}/furiaFlonteirica/furiaFlonteirica_4.png`,
      },
      {
        alt: "image 4 do jogo 1",
        path: `${basePath}/furiaFlonteirica/furiaFlonteirica_5.png`,
      },
    ],
  },
  {
    id: "5",
    name: "Blitz Tática",
    gameCategory: "Ação e Aventura",
    gameDescription:
      "Blitz Tática é um jogo de estratégia tática que coloca os jogadores no comando de uma equipe de operadores de elite. Eles enfrentam missões críticas em diversos cenários, utilizando habilidades especializadas para superar desafios. Com uma narrativa envolvente, gráficos realistas e uma jogabilidade estratégica, os jogadores devem coordenar táticas e trabalhar em equipe para alcançar a vitória.",
    gameYearOld: "16",
    images: [
      {
        alt: "image 1 do jogo 1",
        path: `${basePath}/blitzTatica/blitzTatica_2.png`,
      },
      {
        alt: "image 2 do jogo 1",
        path: `${basePath}/blitzTatica/blitzTatica_3.png`,
      },
      {
        alt: "image 3 do jogo 1",
        path: `${basePath}/blitzTatica/blitzTatica_4.png`,
      },
      {
        alt: "image 4 do jogo 1",
        path: `${basePath}/blitzTatica/blitzTatica_5.png`,
      },
    ],
  },
];

@Component({
  selector: "app-jogo",
  standalone: true,
  imports: [],
  templateUrl: "./jogo.component.html",
  styleUrl: "./jogo.component.css",
})
export class JogoComponent implements OnInit {
  gameName = "";
  gameImage1 = "";
  gameImage2 = "";
  gameImage3 = "";
  gameImage4 = "";
  gameDescription = "";
  gameCategory = "";
  gameYearOld = "";

  id: string = "0";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id") || "1";

      const jogo = jogos.find((j) => j.id === this.id);

      this.gameName = jogo?.name || "";
      this.gameImage1 = jogo?.images[0].path || "";
      this.gameImage2 = jogo?.images[1].path || "";
      this.gameImage3 = jogo?.images[2].path || "";
      this.gameImage4 = jogo?.images[3].path || "";
      this.gameDescription = jogo?.gameDescription || "";
      this.gameCategory = jogo?.gameCategory || "";
      this.gameYearOld = jogo?.gameYearOld || "";
    });
  }
}
