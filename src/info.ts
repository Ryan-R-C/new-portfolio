

export const storagedInfo = {
  BR: {
    pageButtons: {
      aboutMe: "Sobre Mim",
      myProjects: "Meus Projetos",
      closeModal: "Fechar"
    },

    headerLinks: {
      landing: "Início",
      aboutMe: "Sobre",
      portfolio: "Portfólio",
      timeLine: "Timeline",
      courses: "Skills"
    },

    aboutMeQuote: {
      quote: "Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário.",
      author: "Elbert Hubbard, escritor."
    },


    portFolioQuote: {
      quote: "Vá sempre além do que é esperado.",
      author: "Larry Page, fundador do Google"
    },


    landing: { // -
      landingImage: "https://i.ibb.co/jDN2wwy/ryan-rodrigo-costa-freelancer-profissional-desenvolvedor-junior-full-stack-fullstack-junior-pleno.jpg",
      linkedingLink: "https://www.linkedin.com/in/ryan-costa-7ba1b7216/",
      gitHubLink: "https://github.com/Ryan-R-C",
      emailLink: "ryan.r.c.339ac@gmail.com",

    },


    mainAboutText: {
      title: 'Sobre mim',
      paragraphs: [
        "Eu sou Ryan Rodrigo Costa, Engenheiro de Software e Dev. Full Stack.",
        "Atualmente trabalho como Desenvolvedor Full Stack e UI Designer, trabalhando desde o protótipo, passando pelo Front-End e Back-End até a entrega final para o cliente.",
        "Meu contato com programação começou com desenvolvimento em Python, em 2019, me apaixonei pelo desenvolvimento desde o primeiro 'Hello, World' e a cada dia que passa me apaixono mais ainda.",
        "Tenho como metas me tornar sempre um desenvolvedor melhor chegando a minha senioridade, sempre me aperfeiçoando nas Soft e Hard Skills."
      ]
    },


    asideAboutText: {
      title: 'Um pouco mais pessoal',
      paragraphs: [
        "Atualmente estudo Desenvolvimento Web, tanto Back End quanto Front End, cursando meu bacharelado em Engenharia de Software e, aos finais de semanam, estudo UI Design. Minha meta é se aperfeiçoar na área de desenvolvimento Web.",
        "Tenho inglês avançado, conseguindo ler, escrever e falar sem muitas dificuldades.",
      ]
    },



    filtros: [ // -
      "HTML, CSS e JavaScript",
      "React Native",
      "VueJs",
      "Game",
      "Design",
    ],



    portFolioInfo: [
      {
        filter: "HTML, CSS e JavaScript",
        title: "PokeDev",
        link: "https://ryan-r-c.github.io/PokeDEV/",
        src: "https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067",
        clickMessage: "Ler Mais",

        paragraph: "Meu primeiro projeto consumindo APIs externas e aplicando AJAX!",
        detailedInfo: {
          title: "PokeDev",
          link: "https://ryan-r-c.github.io/PokeDEV/",
          linkTitle: "Github Link",
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
                "Como um professor querido costumava dizer, 'você apenas entenderá o valor de um Framework quando entender o trabalho sem ele'. Olhando com minha experiência atual vejo o quanto Frameworks como React facilitam o desenvolvimento e porque aplica-los",
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
        clickMessage: "Ler Mais",

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
        clickMessage: "Ler Mais",

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
        clickMessage: "Ler Mais",

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
        filter: "React Native",
        title: "React Native News",
        link: "https://ryan-news-react-app.netlify.app/",
        src: "https://camo.githubusercontent.com/645d08fdb5027ed9534beefb6f611d118884d8cde7271177c7b988ae4893e594/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31362d31382d33312d33382e706e67",
        clickMessage: "Ler Mais",

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
      {
        filter: "VueJs",
        title: "VueJs Time Tracker",
        link: "#",
        src: "https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png",
        clickMessage: "Ler Mais",

        paragraph: "Um gerenciador de tarefas e TimeTracker utilizando VueJs 3 e Bulma CSS",
        detailedInfo: {
          title: "VueJs Time Tracker",
          link: "https://vue-js-time-tracker.netlify.app",
          linkTitle: "Link do Site",
          imgSrc: "https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png",
          infos: [
            {
              title: "",
              text: [

                "Um Time Tracker com modo escuro e gerenciamento de notas. Usando manipulação de estados inteligentes e código limpo.",
                "Foi desenvolvido durante o curso da formação de VueJs da Alura. Minha plataforma de Estudos."
              ]
            },
            {
              title: "O que aprendi",
              text: [
                "Com a base sólida usando ReactJs, o desenvolvimento com Vue acabou sendo muito tranquilo, sem muitas dificuldades ou complicações. Com certeza um ótimo Framework para aplições Web!",
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
      {
        filter: "Game",
        title: "Game de Plataforma",
        link: "#",
        src: "https://i.ibb.co/bgjkSw7/Screenshot-from-2022-09-26-16-09-48.jpg",
        clickMessage: "Ler Mais",

        paragraph: "Um pequeno game de plataforma utilizando HTML, CSS e JavaScript puros!",
        detailedInfo: {
          title: "Game de Plataforma",
          link: "https://ryan-r-c.github.io/Plataformer-js-game/src/index.html",
          linkTitle: "Link do Site",
          imgSrc: "https://i.ibb.co/bgjkSw7/Screenshot-from-2022-09-26-16-09-48.jpg",
          infos: [
            {
              title: "O que aprendi",
              text: [

                "Um projeto muito interessante e divertido, sem nenhum Framework tive de desenvolver todas os ações com Canvas.",
                "Criei as entidades que são exibidas em formato de objeto para alcançar um código limpo e reutilizavel."
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
        filter: "Design",
        title: "Evóikio - Aplicativo de imóveis",
        link: "#",
        src: "https://i.ibb.co/rMHPYYv/213.png",
        clickMessage: "Ler Mais",

        paragraph: "Um pequeno projeto de Design - Aplicativo mobile de imóveis utilizando Figma.",
        detailedInfo: {
          title: "Evóikio - Aplicativo de imóveis",
          link: "https://www.figma.com/file/Y8U4wxI6CvaAF3RtdSdvPQ/Trabalho-Prototipo?node-id=0%3A1&t=yXCW0RUqnSAPgpgB-1",
          linkTitle: "Link do Figma",
          imgSrc: "https://i.ibb.co/rMHPYYv/213.png",
          infos: [
            {
              title: "História do projeto e o que aprendi",
              text: [

                `Este foi um projeto iniciado como trabalho da matéria de Design de Sistemas da minha Faculdade de Engenharia de Software.`,
                `Os requisitos eram simples, uma prototipação de baixa e média fidelidade de um aplicativo de compra e vende de imóveis.`,
                `Acabei gostando muito da proposta e desenvolvi,  um protótipo de alta fidelidade, identidade visual e uma logo, garatindo nota máxima na atividade.`,
                `Após esse periodo, no final do ano de 2023 iniciei um novo curso de UI Design e finalmente consegui ver o que me incomodava dentro do resultado final. Então voltei para ele mais uma vez, espaçamentos, fontes, cores e até componentes inteiros, mas mantendo a essência da identidade visual.`,
                `Um projeto com resultado muito agradável e com certeza uma forma bem nítida de visualizar minha evolução profissional.`
              ]
            },
          ],
          techs: {
            title: "Tecnologias usadas",
            list: [
              "Figma",
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
            'Construindo aplicações, estruturando banco de dados e criando alicerces para o desenvolvimento futuro com a equipe, como documentar a estrutura do projeto, os Frameworks e o modelo relacional das tabelas.',
            "Possuo 1 ano de experiência com Node, juntamente com conhecimento em banco de dados Relacionais e Não Relacionais como MySQL e Mongo e até mesmo em ORM's como Sequelize.",
          ],
        direction: "row",
        mainColor: "#689F63",
        secondaryColor: "rgb(205, 255, 205)",
        iconImageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
      },
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
            'Linguagem de programação: NodeJs, PHP e Python.  ',
            'Para mobile: React Native.  ',
            'Em Linux, foco principal em Ubuntu e seus derivados, mas também Fedora, como CentOS.'
          ],
        direction: "row",
        mainColor: "rgb(89, 105, 198)",
        secondaryColor: "rgb(12, 13, 89)",
        iconImageSrc: "https://i.ibb.co/ZfxDBfw/backend-Icons3.png"


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
  },

  US: {

    pageButtons: {
      aboutMe: "About me",
      myProjects: "My Projects",
      closeModal: "Close"
    },

    headerLinks: {
      landing: `Landing`,
      aboutMe: `About me`,
      portfolio: `Portfolio`,
      timeLine: `Timeline`,
      courses: `Skills`
    },

    aboutMeQuote: {
      quote: `One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.`,
      author: `Elbert Hubbard, writer.`
    },


    portFolioQuote: {
      quote: `Always deliver more than expected.`,
      author: `Larry Page, founder do Google`
    },


    landing: { // -
      landingImage: `https://i.ibb.co/jDN2wwy/ryan-rodrigo-costa-freelancer-profissional-desenvolvedor-junior-full-stack-fullstack-junior-pleno.jpg`,
      linkedingLink: `https://www.linkedin.com/in/ryan-costa-7ba1b7216/`,
      gitHubLink: `https://github.com/Ryan-R-C`,
      emailLink: `ryan.r.c.339ac@gmail.com`,

    },


    mainAboutText: {
      title: 'About me',
      paragraphs: [
        `I am Ryan Rodrigo Costa, Software Engineer and Full Stack Dev.`
        ,

        `I am currently working as Full Stack Dev. and UI Designer, developing from the prototype, passing through Front-End and Back-End, to the final delivery.`
        ,
        `My first contact with programming goes back to 2019, with Pyton. I fell in love with development from the first 'Hello, World' and each day I fall in love even more.`
        ,
        `My goals are to become a better developer reaching my seniority, always improving myself in Soft and Hard Skills.`

      ]
    },


    asideAboutText: {
      title: 'A little more personal',
      paragraphs: [
        `I am currently learning Web Development, both Back End and Front End, and studying my bachelor's degree in Software Engineering and, on weekends, I study UI Design.`
        ,
        `I have advanced English, being able to read, write and speak without any difficulty.`,
      ]
    },



    filtros: [ // -
      `HTML, CSS and JavaScript`,
      `React Native`,
      `VueJs`,
      `Game`,
      `Design`,
    ],



    portFolioInfo: [
      {
        filter: `HTML, CSS and JavaScript`,
        title: `PokeDev`,
        link: `https://ryan-r-c.github.io/PokeDEV/`,
        src: `https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067`,
        clickMessage: `Read More`,

        paragraph: `My first project consuming external APIs and appling AJAX!`,
        detailedInfo: {
          title: `PokeDev`,
          link: `https://ryan-r-c.github.io/PokeDEV/`,
          linkTitle: `Github Link`,
          imgSrc: `https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067`,
          infos: [
            {
              title: ``,
              text: [
                `A web pages that consumes data from a external API, pokeApi, and show each pokemon type and name. A good example of clean code and AJAX + DOM management.`,
                `I tried to create the code as clean as possible and full of comments to solve possible doubts regarding the API.`

              ]
            },
            {
              title: `What I learned`,
              text: [
                `This project gave me an introduction to concepts like HTTP, Promises and asynchronicity in JavaScript.`,
                `As a beloved professor used to say, 'you will only understand the value of a Framework when you understand how to work without it'. Looking at my current experience, I see how much Frameworks like React facilitate development and why apply them.`
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `HTML`,
              `CSS`,
              `JavaScript`,
            ]
          }
        }
      },
      {
        filter: `HTML, CSS and JavaScript`,
        title: `Infinity Scroll`,
        link: `https://ryan-r-c.github.io/Infinity-Scroll/`,
        src: `https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067`,
        clickMessage: `Read More`,

        paragraph: `External API consumption, page with dynamic content and interesting UI...`,
        detailedInfo: {
          title: `Infinity Scroll`,
          link: `https://ryan-r-c.github.io/Infinity-Scroll/`,
          linkTitle: `Website Link`,
          imgSrc: `https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067`,
          infos: [
            {
              title: ``,
              text: [
                `It is a project that consumes an external API, JSONPlaceholder, and loads them as the user scrolls down the page that triggers an loa animation.`,
                `And it also filters the data as the user wants. Good UI and clean code.`
              ]
            },
            {
              title: `What I learned`,
              text: [
                `In this project I applied Clean Code concepts such as separation of duties by responsibility, encapsulation and correct use of conditions`,
                `I learned a little more about me JavaScript, both in the filter, using conditions of innerText and for the Scroll, using Event Listeners and handling classes.`,
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `HTML`,
              `CSS`,
              `JavaScript`,
            ]
          }
        }
      },
      {
        filter: `HTML, CSS and JavaScript`,
        title: `My Freelancer Website`,
        link: `#`,
        src: `https://i.ibb.co/TW2PgDq/a-Freela-Wide.jpg`,
        paragraph: `Static web page using HTML, CSS and JavaScript, responsive and full of animations...`,
        clickMessage: `Read More`,

        detailedInfo: {
          title: `My Freelancer Website`,
          link: `https://ryan-r-c.github.io/Freelancer/`,
          linkTitle: `Website Link`,
          imgSrc: `https://i.ibb.co/TW2PgDq/a-Freela-Wide.jpg`,
          infos: [
            {
              title: ``,
              text: [
                `This is my freelancer webpage, in this project I not only show my skills as a Front End Dev using JavaScript and CSS animation to make an vivid website, but also a high level design.`,
                `I exercised and learned animations using CSS and JavaScript. An example of a challenge in terms of Front End, see, for example, the first component right when the page opens.`,
                `The design of the main title and the subtitle are done using pure CSS, background for the metallic and reflection of the main title and the text-shadow for the subtitle. The absolute and relative position for its positioning.`,
                `I'm very proud of this project!`,
              ]
            },
            {
              title: `Looking back`,
              text: [
                `With a different critical view, today, I see that design does not represent technology as I wanted at the time I created it.`,
                `'It looks like a club site', said a colleague of mine. The choice of colors and formats were not the best for the site's content.`,
                `As a professional I always have to look at all my old projects with a critical and objective view, I understand my mistakes and successes.`,
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `HTML5`,
              `CSS3`,
              `JavaScript`,
            ]
          }
        }
      },

      {
        filter: `HTML, CSS and JavaScript`,
        title: `Parra's barbershop`,
        link: `#`,
        src: `https://i.ibb.co/zfPykBY/barbershop-wide.png`,
        clickMessage: `Read More`,

        paragraph: `My first client as a freelance professional. A great example of UI, UX and responsiveness...`,
        detailedInfo: {
          title: `Parra's barbershop`,
          link: `https://barbearia-do-parra.github.io/atendimento/`,
          linkTitle: `Website Link`,
          imgSrc: `https://i.ibb.co/zfPykBY/barbershop-wide.png`,
          infos: [
            {
              title: ``,
              text: [
                `Being a professional project, from the Landing I've been striving for a clean code, using methodologies such as BEM, and semantic tags in HTML, thus improving SEO.`,
                `A very fun project to develop.`,
                `One of my biggest challenges on this project was the lower Slider, made completely from scratch using JavaScript. I could have used a library like Bootstrap, but the experience and learning at the end of the project would not have been the same.`,
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `HTML5`,
              `CSS3`,
              `JavaScript`,
            ]
          }
        }
      },
      {
        filter: `React Native`,
        title: `React Native News`,
        link: `https://ryan-news-react-app.netlify.app/`,
        src: `https://camo.githubusercontent.com/645d08fdb5027ed9534beefb6f611d118884d8cde7271177c7b988ae4893e594/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31362d31382d33312d33382e706e67`,
        clickMessage: `Read More`,

        paragraph: `A cross-platform app using React Native and Expo!`,
        detailedInfo: {
          title: `React Native News`,
          link: `https://ryan-news-react-app.netlify.app/`,
          linkTitle: `Web Version`,
          imgSrc: `https://camo.githubusercontent.com/645d08fdb5027ed9534beefb6f611d118884d8cde7271177c7b988ae4893e594/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31362d31382d33312d33382e706e67`,
          infos: [
            {
              title: ``,
              text: [
                `This project is a React Native app using Expo that allows multiple accesses to device's APIs without needing multiple packages.`,
                `There is consumption and interaction with an external API, News Catcher, which allows you to search and filter news by language.`,
                `I used several native resources like the language, taking the standard of the user's device and filtering the news. System check in which the application is running, so for a native resource there is a similar one in the web version, using other dependencies or strategies and so on.`,
                `An engaging and fun project to develop.`
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `React Native`,
              `Expo`,
            ]
          }
        }
      },
      {
        filter: `VueJs`,
        title: `VueJs Time Tracker`,
        link: `#`,
        src: `https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png`,
        clickMessage: `Read More`,

        paragraph: `A task manager and TimeTracker using VueJs 3 and Bulma CSS`,
        detailedInfo: {
          title: `VueJs Time Tracker`,
          link: `https://vue-js-time-tracker.netlify.app`,
          linkTitle: `Website Link`,
          imgSrc: `https://i.ibb.co/QpvVxt8/Screenshot-from-2022-07-17-13-22-22.png`,
          infos: [
            {
              title: ``,
              text: [
                `A Time Tracker with dark mode and note management. Using smart state handling and clean code.`,
                `It was developed during the course of Alura's Vue Js training, my course platform.`
              ]
            },
            {
              title: `What I learned`,
              text: [
                `With a solid foundation using ReactJs, development with Vue turned out to be very smooth, without many difficulties or complications. Definitely a great Framework for Web applications!`
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `VueJs 3`,
              `Bulma CSS`,
            ]
          }
        }
      },
      {
        filter: `Game`,
        title: `Platform Game`,
        link: `#`,
        src: `https://i.ibb.co/bgjkSw7/Screenshot-from-2022-09-26-16-09-48.jpg`,
        clickMessage: `Read More`,

        paragraph: `A small platform game using pure HTML, CSS and JavaScript!`,
        detailedInfo: {
          title: `Platform Game`,
          link: `https://ryan-r-c.github.io/Plataformer-js-game/src/index.html`,
          linkTitle: `Website Link`,
          imgSrc: `https://i.ibb.co/bgjkSw7/Screenshot-from-2022-09-26-16-09-48.jpg`,
          infos: [
            {
              title: `What I learned`,
              text: [
                `A very interesting and fun project, without any Framework I had to develop all actions with Canvas.`,
                `I created entities that are displayed in object format to achieve clean and reusable code.`
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `HTML5`,
              `CSS3`,
              `JavaScript`,
            ]
          }
        }
      },
      {
        filter: `Design`,
        title: `Evóikio - Real estate app`,
        link: `#`,
        src: `https://i.ibb.co/rMHPYYv/213.png`,
        clickMessage: `Read More`,

        paragraph: `A small design project - Real estate mobile application using Figma.`,
        detailedInfo: {
          title: `Evóikio - Real estate app`,
          link: `https://www.figma.com/file/Y8U4wxI6CvaAF3RtdSdvPQ/Trabalho-Prototipo?node-id=0%3A1&t=yXCW0RUqnSAPgpgB-1`,
          linkTitle: `Link do Figma`,
          imgSrc: `https://i.ibb.co/rMHPYYv/213.png`,
          infos: [
            {
              title: `Project's history and What I learned`,
              text: [
                `This was a project started as a college project for the Systems Design course at my College of Software Engineering.`,
                `The requirements were simple, a low and medium fidelity prototype of a real estate buying and selling application.`,
                `I ended up really liking the proposal and developed a high fidelity prototype, visual identity and a logo, guaranteeing the highest score in the activity.`,
                `After that period, at the end of 2023 I started a new UI Design course and finally managed to see what bothered me within the final result. So I went back to it one more time, spacing, fonts, colors and even whole components, but keeping the essence of the visual identity.`,
                `A project with a very pleasant result and certainly a very clear way of visualizing my professional evolution.`
              ]
            },
          ],
          techs: {
            title: `Techs used`,
            list: [
              `Figma`,
            ]
          }
        }
      },

    ],



    coursesInfo: [ // -
      {
        title: `React`,
        text:
          [
            `ReactJs is my main form of Front End development.`,
            `It is the library that I have the most affinity, knowledge and experience with. From projects created and modeled by me and even maintenance done by third parties. Due to its simple and optimized syntax, development becomes simpler and faster.`,
            `I have 2 years of experience with React and with its libraries such as Styled Components`
          ],
        direction: `row`,
        mainColor: `#4169e1`,
        secondaryColor: `rgb(11, 19, 45)`,
        iconImageSrc: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png`
      },

      {
        title: `NodeJS`,
        text:
          [
            `NodeJS, in a nutshell, is the way to create JavaScript code for the Back End.`,
            `Building applications, structuring the database and creating foundations for future development with the team, such as documenting the project structure, the Frameworks and the relational model of the tables.`,
            `I have 2 years of experience with Node, along with knowledge in Relational and Non-Relational databases like MySQL and Mongo and even in ORM's like Sequelize.`,
          ],
        direction: `row`,
        mainColor: `#689F63`,
        secondaryColor: `rgb(205, 255, 205)`,
        iconImageSrc: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png`
      },
      {
        title: `Docker`,
        text:
          [
            `Docker enables a clean and scalable architecture, with multiple containers inside a server. In addition, it makes migration between different servers much simpler, even with different Operating Systems.`,
            `I've already applied Docker to several projects, making maintenance on client servers much simpler. `
          ],
        direction: `row`,
        mainColor: `rgb(0, 167, 255)`,
        secondaryColor: `rgb(0, 18, 28)`,
        iconImageSrc: `https://cdn-icons-png.flaticon.com/512/919/919853.png`
      },


      {
        title: `Client-Side Technologies`,
        text:
          [
            `I have knowledge in several client-side technologies for development, some in courses, others in practice and most of them in both.`,
            `Some examples: `,
            `Vue, Angular, Next, Material Design, Bootstrap, JavaScript and TypeScript, even Wordpress.`
          ],
        direction: `row`,
        mainColor: `rgb(26, 115, 130)`,
        secondaryColor: `rgb(0, 6, 13) `,
        iconImageSrc: `https://i.ibb.co/LC90xdn/front-End-Icons.png`
      },


      {
        title: `Server-Side Technologies`,
        text:
          [
            `Regarding server-side technologies that I have practice and experience with:`,
            `Database: MySQL, PostgreSQL and MongoDB`,
            `Programming language: NodeJs, PHP and Python.`,
            `For mobile: React Native.`,
            `On Linux, main focus on Ubuntu and its flavors, but also Fedora, like CentOS.`
          ],
        direction: `row`,
        mainColor: `rgb(89, 105, 198)`,
        secondaryColor: `rgb(12, 13, 89)`,
        iconImageSrc: `https://i.ibb.co/ZfxDBfw/backend-Icons3.png`


      }
    ],

    timelineinfo: {
      title: `Timeline`,
      dates: [
        `2019-07-22`, `2021-04-30`, `2021-11-22`, `2022-03-01`
      ],
      description: [
        `My first Hello World in Python`,
        `My first client as a Freelancer`,
        `My Admission to my current company as a Junior Dev`,
        `My first promotion as Squad Leader.`,
      ]
    }
  }
}

