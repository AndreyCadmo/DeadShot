import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

const basePath = "../../../assets/games";

type jogoType = {
  id: string;
  name: string;
  gameYearOld: string;
  gameCategory: string;
  gameDescription: string;
  gameHistory: string;
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
    gameCategory: "Ação, Aventura, Ficção Ciêntifica e Multiplayer",
    gameDescription:
      "Tiro 2077 é ambientado em uma metrópole futurista controlada por corporações corruptas e facções rebeldes. Os jogadores assumem o papel de um mercenário em missões perigosas, enfrentando inimigos com armas avançadas. Com campanha narrativa e modos multiplayer, o jogo combina ação frenética, estratégia e exploração em ambientes urbanos vastos. Com gráficos impressionantes e trilha sonora eletrizante, oferece uma experiência imersiva no futuro distópico de 2077.",
    gameYearOld: "18",
    gameHistory:
      "A trama se desenrola em uma metrópole distópica no ano de 2077, onde o poder é dominado por corporações corruptas e facções rebeldes lutam contra a opressão. Os jogadores assumem o papel de um mercenário habilidoso, um profissional endurecido pelo ambiente hostil da cidade. Contratado para missões perigosas e clandestinas, o protagonista navega pelos becos sombrios e arranha-céus decadentes, sempre à procura de sua próxima oportunidade de lucro. No mundo, os jogadores assumem o papel de um mercenário habilidoso, contratado para missões perigosas em uma cidade à beira do colapso. Com uma variedade de armas avançadas e tecnológicas à disposição, os jogadores devem enfrentar inúmeros inimigos, desde soldados altamente treinados até máquinas de combate automatizadas.",
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
    gameHistory:
      "é uma imersão visceral em um mundo distópico, onde a sobrevivência é uma batalha constante. Os jogadores são lançados em um cenário sombrio, onde a lei da selva prevalece e a única regra é a da sobrevivência do mais apto. Neste jogo tenso e repleto de ação, os jogadores encarnam um caçador solitário, lutando para sobreviver em um ambiente hostil dominado por gangues cruéis e mutantes sedentos por sangue. Equipados com um arsenal diversificado e habilidades únicas, os jogadores devem explorar os cenários intricados em busca de recursos escassos e objetivos desafiadores. A atmosfera opressiva de Caçada Cruel é acentuada por gráficos deslumbrantes e uma trilha sonora envolvente, enquanto os jogadores enfrentam uma série de desafios mortais, desde emboscadas surpresa até confrontos épicos contra chefes poderosos. Com uma narrativa envolvente e reviravoltas inesperadas, cada decisão dos jogadores molda o desenrolar da história e o destino do protagonista.",
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
    gameHistory: "Prepare-se para liderar o Esquadrão de Elite em uma missão desesperada para salvar o mundo da iminente ameaça da organização terrorista conhecida como Tempestade Negra. Embarque nesta jornada repleta de ação e adrenalina, onde cada decisão pode significar a diferença entre a vitória e a derrota. Em Esquadrão de Elite, você assume o papel de um comandante habilidoso encarregado de montar e liderar uma equipe de operativos de elite. Equipados com o que há de melhor em armas e tecnologia, sua equipe é a última linha de defesa contra os planos malignos da Tempestade Negra de desencadear o caos global.",
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
    gameHistory: "Mergulha os jogadores em um cenário de caos e conflito em uma fronteira desolada e perigosa. Neste jogo de ação e sobrevivência, os jogadores encaram o desafio de sobreviver em um mundo onde a lei foi substituída pelo instinto de sobrevivência. No coração de uma terra devastada pela guerra, os jogadores assumem o papel de combatentes resistentes, lutando contra facções rivais, milícias mercenárias e ameaças desconhecidas que assolam a fronteira. Equipados com armas improvisadas e habilidades de combate, os jogadores exploram ambientes hostis em busca de recursos escassos e missões vitais para sua sobrevivência e a de suas comunidades. A narrativa cativante de Fúria Fronteiriça leva os jogadores por uma jornada emocionante, repleta de reviravoltas e dilemas morais, onde cada escolha pode determinar o destino dos personagens e das comunidades que encontram. Com gráficos realistas e uma trilha sonora imersiva, o jogo cria uma atmosfera intensa e visceral, capturando a essência de um mundo à beira do colapso.",
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
    gameCategory: "Ação, Aventura e Multiplayer",
    gameDescription:
      "Blitz Tática é um jogo de estratégia tática que coloca os jogadores no comando de uma equipe de operadores de elite. Eles enfrentam missões críticas em diversos cenários, utilizando habilidades especializadas para superar desafios. Com uma narrativa envolvente, gráficos realistas e uma jogabilidade estratégica, os jogadores devem coordenar táticas e trabalhar em equipe para alcançar a vitória.",
    gameYearOld: "16",
    gameHistory: "mergulha os jogadores em um campo de batalha tático de alta octanagem, onde cada movimento pode ser a diferença entre a vitória e a derrota. Neste jogo estratégico e intenso, os jogadores assumem o comando de uma equipe de operadores de elite, encarregados de missões críticas em ambientes variados e desafiadores. Com uma variedade de classes e habilidades especializadas à disposição, os jogadores devem coordenar táticas e estratégias para superar adversários em combates intensos e imprevisíveis. Desde operações de infiltração furtiva até confrontos diretos, cada missão apresenta desafios únicos que exigem criatividade, cooperação e precisão tática. A narrativa envolvente de Blitz Tática leva os jogadores por uma série de missões emocionantes, enquanto enfrentam ameaças globais e conspirações sinistras. Com gráficos realistas e efeitos sonoros imersivos, o jogo cria uma atmosfera de tensão e adrenalina, onde cada decisão pode ter consequências de longo alcance.",
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
  gameHistory = "";
  gameAbout = "";

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
      this.gameHistory = jogo?.gameHistory || "";
    });
  }
}
