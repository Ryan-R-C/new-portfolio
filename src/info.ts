 /*
  To do:
  - in progress
  V - done
  ? - have no ideia
  
  portolio
    quote
    mainContent
  
  about me
    quote
    mainContent

  timeline

  links to socialmedia

  */

  /*
  mainAboutText
  FullStack, trabalhando atualmente

  Pessoa dedicada

  Tenho experiência com
  
  minhas metas

  =================
  asideAboutText

  O que estudo
  
  minha motivação
  */


  /*
  aboutMeQuote
  -> 

  portFolioQuote
  ->
  
*/

export const storagedInfo =
{
  aboutMeQuote: { // V
    quote: "Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário.",
    author: "Elbert Hubbard, escritor."
  },


  portFolioQuote: { //v
    quote: "Vá sempre além do que é esperado.",
    author: "Larry Page, fundador do Google"
  },


  landing: { // -
    landingImage: "https://criticalhits.com.br/wp-content/uploads/2022/05/Goku-In-Dragon-Ball-Super--910x455.webp",
    linkedingLink: "https://www.linkedin.com/in/ryan-costa-7ba1b7216/",
    gitHubLink: "https://github.com/Ryan-R-C",
    emailLink: "ryan.r.c.339ac@gmail.com",

  },


  mainAboutText: { // V?
    title: 'Sobre mim',
    paragraphs: [
      "Eu sou Ryan Rodrigo Costa, Engenheiro de Software e Dev. Full Stack.",
      "Atualmente trabalho como líder do Squad Full Stack, avaliando, treinando e auxiliando os colaboradores júniors e claro desenvolvendo.",
      "Meu contato com programação começou com desenvolvimento em Python, em 2019, me apaixonei pelo desenvolvimento desde o primeiro 'Hello, World' e a cada dia que passa me apaixono mais ainda.",
      "Tenho experiência em projetos usando Python, Node e PHP como linguagens de programação. A maior parte dos meus projetos pessoais são open-source e disponíveis no GitHub.",
      "Tenho como metas me tornar sempre um desenvolvedor melhor chegando a minha senioridade, sempre me aperfeiçoando nas Soft e Hard Skills."
    ]
  },


  asideAboutText: { // V?
    title: 'Um pouco mais pessoal',
    paragraphs: [
      "Atualmente estudo Desenvolvimento Web, tanto Back End quanto Front End, cursando meu bacharelado em Engenharia de Software e, aos finais de semanam, estudo Smart Contracts. Minha meta é se aperfeiçoar na área de desenvolvimento Web.",
      "Tenho inglês avançado, tanto que faço cursos nessa lingua estrangeira, e arranho um pouco no espanhol.",
      "Minha principal motivação é minha esposa e conseguir uma qualidade de vida maior para nós.",
    ]
  },



  filtros: [ // -
    "HTML, CSS e JavaScript",
    // "Node",  
    // "Design", 
    "React",
    "React Native",
    "VueJs"
  ],



  portFolioInfo: [
    {
      filter: "HTML, CSS e JavaScript",
      title: "PokeDev",
      link: "https://ryan-r-c.github.io/PokeDEV/",
      src: "https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067",

      paragraph: "Meu primeiro projeto consumindo APIs externas e aplicando AJAX!",
      detailedInfo: {
        title: "PokeDev",
        link: "https://ryan-r-c.github.io/PokeDEV/",
        linkTitle: "Link do Github",
        imgSrc: "https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067",
        infos: [
          {
            title: "",
            text: [
              "Uma página da web que consome dados de uma API externa, pokeAPI, e mostra dados específicos do pokémon na tela. Um bom exemplo de código limpo e gerenciamento AJAX + DOM.",
              "Procurei deixar o código mais limpo possível e cheio de comentários para sanar possíveis dúvidas em relação à API.",
            ]
          },
          {
            title: "O que aprendi",
            text: [
              "Este projeto me deu a introdução a conceitos como HTTP, Promisses e assincronicidade em JavaScript.",
              "Como um professor querido costumava dizer, 'você apenas entenderá o valor de um framework quando entender o trabalho sem ele'. Olhando com minha experiência atual vejo o quanto frameworks como React facilitam o desenvolvimento e porque aplica-los",
            ]
          },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "HTML",
            "CSS",
            "JavaScript",
          ]
        }
      }
    },
    {
      filter: "HTML, CSS e JavaScript",
      title: "Infinity Scroll",
      link: "https://ryan-r-c.github.io/Infinity-Scroll/",
      src: "https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067",

      paragraph: "Consumo de API externa, página com conteúdo dinâmico e UI interessante...",
      detailedInfo: {
        title: "Infinity Scroll",
        link: "https://ryan-r-c.github.io/Infinity-Scroll/",
        linkTitle: "Link do Site",
        imgSrc: "https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067",
        infos: [
          {
            title: "",
            text: [ 
              "É um projeto que consome uma API externa, JSONPlaceholder, e os carrega conforme o usuário desce na página que aciona uma animação.",
              "E também filtra os dados conforme o usuário deseja. Boa IU e código limpo."
            ]
          },
          {
            title: "O que aprendi",
            text: [
              "Neste projeto apliquei conceitos de Clean Code como separação de funções por responsabilidade, encapsulamento e uso correto de condições",
              "Aprendi um pouco mais sobre JavaScript, tanto no filtro, usando condições de innerText quanto na questão de do Scroll, usando Event Listeners e manipulação de classes, usado no loading.",
            ]
          },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "HTML",
            "CSS",
            "JavaScript",
          ]
        }
      }
    },
    {
      filter: "HTML, CSS e JavaScript",
      title: "Meu site de Freelancer",
      link: "#",
      src: "https://i.ibb.co/TW2PgDq/a-Freela-Wide.jpg",
      paragraph: "Página Web estática usando HTML, CSS e JavaScript, responsíva e recheada de animações...",
      detailedInfo: {
        title: "Meu site de Freelancer",
        link: "https://ryan-r-c.github.io/Freelancer/",
        linkTitle: "Link do Site",
        imgSrc: "https://i.ibb.co/TW2PgDq/a-Freela-Wide.jpg",
        infos: [
          {
            title: "",
            text: [
              "Essa é minha página freelancer, neste projeto não só mostro minhas habilidades como Front End Dev usando JavaScript e animação CSS para fazer um site quase ao vivo, mas também um design de alto nível.",
              "Exercitei e aprendi animações usando CSS e JavaScript. Um exemplo de desafio em questão de Front End, veja, por exemplo, a primeiro componente logo quando se abre a página.",
              "O design do titulo principal e do subtitulo são feitos utilizando puramente CSS, background para o metálico e reflexo do titulo principal e o text-shadow para o subtitulo. O posição absoluta e relativa para o posicionameno dele.",
              "Tenho muito orgulho deste projeto!",
            ]
          },
          {
            title: "Olhando para trás",
            text: [
              "Com uma visão mais crítica, hoje, vejo que o design não representa tecnologia do formato que quis no momento que criei.",
              "'Parece um site de balada', disse um colega meu. A escolha de cores e formatos não foram as melhores para o conteúdo do site.",
              "Como profissional sempre devo olhar para todos meus projetos antigos com visão crítica e objetiva, entendo meus erros e acertos.",
            ]
          },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "HTML5",
            "CSS3",
            "JavaScript",
          ]
        }
      }
    },

    {
      filter: "HTML, CSS e JavaScript",
      title: "Barbearia do Parra",
      link: "#",
      src: "https://i.ibb.co/zfPykBY/barbershop-wide.png",

      paragraph: "Meu primeiro cliente como profissional Freelancer. Um ótimo exemplo de UI, UX e responsividade...",
      detailedInfo: {
        title: "Barbearia do Parra",
        link: "https://barbearia-do-parra.github.io/atendimento/",
        linkTitle: "Link do Site",
        imgSrc: "https://i.ibb.co/zfPykBY/barbershop-wide.png",
        infos: [
          {
            title: "",
            text: [
              "Sendo um projeto profissional, desde o início presei por um código limpo, utilizando metedologias como BEM, e tags semânticas no HTML, assim melhorando o SEO.",
              "Um projeto bem divertido de se densenvolver.",
              "Um dos meus maiores desafios nesse projeto foi o Slider inferior, feito completamente do zero, usando JavaScript. Poderia ter usado uma biblioteca como Bootstrap, mas a experiência e o aprendizado ao final do projeto não seriam os mesmos.",
            ]
          },
          // {
          //   title: "Text",
          //   text: [
          //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!",
          //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
          //   ]
          // },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "HTML5",
            "CSS3",
            "JavaScript",
          ]
        }
      }
    },


    {
      filter: "React",
      title: "Regenciador de Notas",
      link: "#",
      src: "https://camo.githubusercontent.com/573961d36ffff92b33451e25f825b984d64773734e9a3763e2e8ac808ddccf70/68747470733a2f2f692e6962622e636f2f6a6736536462792f72656163742d70726f6a2d6e6f7465322e6a7067",

      paragraph: "Um gerenciador de notas ou postits usando ReactJs, MomentJs e Local Storage...",
      detailedInfo: {
        title: "Regenciador de Notas",
        link: "https://ryan-react-note-manager.netlify.app/",
        linkTitle: "Link do Site",
        imgSrc: "https://camo.githubusercontent.com/573961d36ffff92b33451e25f825b984d64773734e9a3763e2e8ac808ddccf70/68747470733a2f2f692e6962622e636f2f6a6736536462792f72656163742d70726f6a2d6e6f7465322e6a7067",
        infos: [
          {
            title: "",
            text: [
              "Este projeto é um gerenciador de notas usando ReactJs como biblioteca principal.",
            ]
          },
          {
            title: "O que aprendi",
            text: [
              "Feito usando React Class Components, era a única forma de desenvolver em React que sabia na época. Essa arquitetura complexa não me permitiu, como dev. inexperiente, conceber todas as ideias que tinha para o sistema.",
              "Erros de estado, arquitetura complexa e minha inexperiencia na época, não me permitiram produzir algo com a qualidade que almejo.",
              "Faria diferente hoje, transformando a arquitetura em Function Components e presando por Clean Code, assim, sem dúvida alguma, conseguiria conceber algo com a qualidade que sempre prezo."
            ]
          },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "ReactJs",
            "MomentJs",
            "LocalStorage API",
          ]
        }
      }
    },


    {
      filter: "React Native",
      title: "React Native News",
      link: "https://ryan-news-react-app.netlify.app/",
      src: "https://camo.githubusercontent.com/645d08fdb5027ed9534beefb6f611d118884d8cde7271177c7b988ae4893e594/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31362d31382d33312d33382e706e67",

      paragraph: "Um app multiplataforma usando React Native e Expo!",
      detailedInfo: {
        title: "React Native News",
        link: "https://ryan-news-react-app.netlify.app/",
        linkTitle: "Versão Web",
        imgSrc: "https://camo.githubusercontent.com/645d08fdb5027ed9534beefb6f611d118884d8cde7271177c7b988ae4893e594/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31362d31382d33312d33382e706e67",
        infos: [
          {
            title: "",
            text: [
              "Este projeto é um app em React Native usando Expo que permite vários acessos à APIs do sistema sem precisar de vários pacotes.",
              "Há consumo e interação com API externa, News Catcher, que permite fazer pesquisas e filtrar as notícias pela língua.",
              "Usei vários recursos nativos como a língua, pegando a padrão do dispositivo do usuário e filtrando as notícias. Verficação de Sistema em que a aplicação está sendo executada, assim para um recurso nativo há um semelhante na versão web, usando outras dependências ou estratégias e assim por diante.",
              "Um projeto cativante e divertido de desenvolver."
            ]
          },  
        ],
        techs: {
          title: "Tecnologias Usadas",
          list: [
            "React Native",
            "Expo",
          ]
        }
      }
    },

     /*
    ================================================================
    VUE TIMETRACKER
    */

    {
      filter: "VueJs",
      title: "VueJs Time Tracker",
      link: "#",
      src: "https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png",

      paragraph: "Um gerenciador de tarefas e TimeTracker utilizando VueJs 3 e Bulma CSS",
      detailedInfo: {
        title: "VueJs Time Tracker",
        link: "https://github.com/Ryan-R-C/VueJsTimeTracker",
        linkTitle: "Link do Github",
        imgSrc: "https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png",
        infos: [
          {
            title: "",
            text: [
              "Este projeto está atualmente em desenvolvimento...",
              "Foi desenvolvido durante o curso da formação de VueJs da Alura. Minha plataforma de Estudos."
            ]
          },
          {
            title: "O que aprendi",
            text: [
              "Com a base sólida usando ReactJs, o desenvolvimento com Vue acabou sendo muito tranquilo, sem muitas dificuldades ou complicações. Com certeza um ótimo Frame Work para aplições Web!",
            ]
          },
        ],
        techs: {
          title: "Tecnologias usadas",
          list: [
            "VueJs 3",
            "Bulma CSS",
          ]
        }
      }
    },


  ],



  coursesInfo: [ // -
    {
      title: "React",
      text:
        [
          'ReactJs é minha forma principal de desenvolvimento Front End. ',
          'É a biblioteca que mais tenho afinidade, conhecimento e experiência. Desde projetos criados e modelados por mim e até mesmo manutenção feitos por terceiros. Por sua sintaxe simples e otimizada o desenvolvimento se torna mais simples e rápido.',
          'Possuo 1 ano de experiência com essa Lib. e em suas bibliotecas como Styled Components'
        ],
      direction: "row",
      mainColor: "#4169e1",
      secondaryColor: "rgb(11, 19, 45)",
      iconImageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },

    {
      title: "NodeJS",
      text:
        [
          'NodeJS, de forma resumida é a forma de escrever JavaScript para o Back End.',
          'Construindo aplicações, estruturando banco de dados e criando alicerces para o desenvolvimento futuro com a equipe, como documentar a estrutura do projeto, os frameworks e o modelo relacional das tabelas.',
          "Possuo 1 ano de experiência com Node, juntamente com conhecimento em banco de dados Relacionais e Não Relacionais como MySQL e Mongo e até mesmo em ORM's como Sequelize.",
        ],
      direction: "row",
      mainColor: "rgb(39, 85, 66)",
      secondaryColor: "rgb(95, 155, 129)",
      iconImageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
    },


    // {
    //   title: "EL lorem loreimos",
    //   text: 
    //   ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
    //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
    //   ],
    //   direction: "row",
    //   mainColor: "#3f1545",
    //   secondaryColor: "#240023",
    //   iconImageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/800px-Ethereum_logo_2014.svg.png"
    // },


    {
      title: "Docker",
      text:
        [
          'Docker possibilita uma arquitetura limpa e escalonável, com multiplos containers dentro de um servidor. Além disso torna muito mais simples uma migração entre diferentes servidores, até mesmo com Sistemaas Operacionais diferentes.',
          'Já apliquei Docker em vários projetos, tornando muito mais simples a manutenção nos servidores dos clientes. '
        ],
      direction: "row",
      mainColor: "rgb(0, 167, 255)",
      secondaryColor: "rgb(0, 18, 28)",
      iconImageSrc: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
    },


    {
      title: "Tecnologias Client-Side",
      text:
        ['Possuo conhecimentos em várias tecnologias client-side para desenvolvimento, algumas em cursos, outras em prática e a maior parte em ambos.',
          'Alguns exemplos: ',
          'Vue, Angular,  Next, Material Design, Bootstrap, JavaScript e TypeScript, até mesmo em Wordpress '
        ],
      direction: "row",
      mainColor: "rgb(26, 115, 130)",
      secondaryColor: "rgb(0, 6, 13) ",
      iconImageSrc: "https://i.ibb.co/LC90xdn/front-End-Icons.png"
    },


    {
      title: "Tecnologias Server-Side",
      text:
        ['Em relação a tecnlogias server-side que tenho prática e experiência:',
          'Banco de Dados: MySQL, PostgreSQL e MongoDB',
          'Linguagem de programação: além de NodeJs, PHP e Python.  ',
          'No que diz respeito a Sistemas Operacionais conheço Linux, foco principal em Ubuntu e seus derivados, mas também Fedora, como CentOS.'
        ],
      direction: "row",
      mainColor: "rgb(89, 105, 198)",
      secondaryColor: "rgb(12, 13, 89)",
      // iconImageSrc: "https://i.ibb.co/z6YDss1/backend-Icons.png"
      // iconImageSrc: "https://i.ibb.co/z6YDss1/backend-Icons.png"  
      iconImageSrc: "https://i.ibb.co/ZfxDBfw/backend-Icons3.png"
      // iconImageSrc: "https://i.ibb.co/8n3qhS0/backend-Icons2.png"


    }
  ],

  timelineinfo: {
    title: "Timeline",
    dates: ["2019-07-22", "2021-04-30", "2021-11-22", "2022-03-01",],
    description: [
    "Meu Primeiro Hello World em Python",
    "Meu primeiro cliente como Freelancer",
    "Minha Admissão em minha empresa atual como Dev. Júnior",
    "Minha primeira promoção como líder de Squad.",
  ]
  }
}