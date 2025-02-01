

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
      landingImage: "https://i.ibb.co/HLWChLwL/Ryan-Rodrigo-Costa-Desenvolvedor-Fullstack-Full-stack-pleno-Prompt-engineer-IA-especialista-profissi.png",
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
        src: "https://i.ibb.co/4YdvzWx/Captura-de-tela-2024-06-18-201723-2png.png",
        clickMessage: "Ler Mais",

        paragraph: "Meu primeiro projeto consumindo APIs externas e aplicando AJAX!",
        detailedInfo: {
          title: "PokeDev",
          link: "https://ryan-r-c.github.io/PokeDEV/",
          linkTitle: "Github Link",
          imgSrc: "https://i.ibb.co/4YdvzWx/Captura-de-tela-2024-06-18-201723-2png.png",
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
        src: "https://i.ibb.co/6FQW1Jh/Captura-de-tela-2024-06-18-201958.png",
        clickMessage: "Ler Mais",

        paragraph: "Consumo de API externa, página com conteúdo dinâmico e UI interessante...",
        detailedInfo: {
          title: "Infinity Scroll",
          link: "https://ryan-r-c.github.io/Infinity-Scroll/",
          linkTitle: "Link do Site",
          imgSrc: "https://i.ibb.co/6FQW1Jh/Captura-de-tela-2024-06-18-201958.png",
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
        src: "https://i.ibb.co/DtMTbgV/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31.png",
        clickMessage: "Ler Mais",

        paragraph: "Um app multiplataforma usando React Native e Expo!",
        detailedInfo: {
          title: "React Native News",
          link: "https://ryan-news-react-app.netlify.app/",
          linkTitle: "Versão Web",
          imgSrc: "https://i.ibb.co/DtMTbgV/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31.png",
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
          link: "https://github.com/Ryan-R-C/Plataformer-js-game",
          linkTitle: "GitHub Link",
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
            'ReactJs é a base do meu desenvolvimento Front End, sendo a biblioteca com a qual possuo maior afinidade, conhecimento e experiência. Ao longo da minha trajetória, atuei tanto na criação e modelagem de projetos inteiramente desenvolvidos por mim quanto na manutenção de sistemas originados por terceiros. A simplicidade e a otimização de sua sintaxe contribuem para um desenvolvimento ágil e eficiente.',
            'Iniciei meus estudos em ReactJs em 2020 e, desde então, venho aprofundando meu domínio na ferramenta, explorando arquiteturas limpas, como também bibliotecas complementares como Styled Components e Tailwind, entre outras.'
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
            'Node.js é uma tecnologia que permite a execução de JavaScript no servidor, viabilizando a criação de aplicações back-end com suporte a operações assíncronas e orientadas a eventos. Essa característica a torna ideal para o desenvolvimento de sistemas escaláveis e de alta performance.',
            'Durante minha trajetória, participei ativamente do desenvolvimento de soluções completas, abrangendo a criação de APIs RESTful, a integração com bancos de dados relacionais (MySQL, PostgreSQL) e não relacionais (MongoDB) e a implementação de arquiteturas orientadas a microserviços. Contribuí na definição dos frameworks e na modelagem dos bancos de dados, garantindo a robustez e a escalabilidade dos projetos.',
            "Desde 2020, quando iniciei meus estudos em Node.js, venho aplicando boas práticas de desenvolvimento com foco na implementação de arquiteturas limpas que incorporam os princípios SOLID, priorizando performance e manutenibilidade. Em diversos projetos, implementei ORMs como Sequelize, TypeORM e Prisma para otimizar a comunicação com a camada de persistência, contribuindo para uma manutenção mais eficiente e a evolução contínua das aplicações.",
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
            'Desde 2021, quando iniciei meu desenvolvimento com Docker, essa tecnologia tem sido fundamental para a criação de arquiteturas limpas e escaláveis, permitindo o uso de múltiplos containers em um único servidor. Essa abordagem facilita a migração entre ambientes heterogêneos, inclusive entre servidores com sistemas operacionais distintos.',
            'Ao longo de diversos projetos, implementei Docker para padronizar os ambientes de desenvolvimento e produção, simplificando a manutenção dos servidores dos clientes e assegurando maior consistência e escalabilidade nas aplicações.'
          ],
        direction: "row",
        mainColor: "rgb(0, 167, 255)",
        secondaryColor: "rgb(0, 18, 28)",
        iconImageSrc: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
      },


      {
        title: "Tecnologias Client-Side",
        text:
          [
            'Tenho experiência abrangente em diversas tecnologias client-side, adquiridas tanto em cursos quanto por meio da prática profissional. Abaixo, listo alguns exemplos:',
            'Frameworks e Bibliotecas: ',
            'React Native: Desenvolvimento de aplicativos móveis; Vue.js: Criação de interfaces web dinâmicas e reativas; AngularJS: Construção de aplicações web robustas e dinâmicas; Next.js: Desenvolvimento de aplicações React com renderização server-side; jQuery: Simplificação da manipulação do DOM e do gerenciamento de eventos para interfaces web dinâmicas.',
            '',
            'Design e Estilização: ',
            'Material Design: Implementação de diretrizes visuais para interfaces intuitivas; Tailwind CSS: Desenvolvimento ágil de layouts personalizados utilizando classes utilitárias; Bootstrap: Criação de interfaces responsivas de forma rápida e consistente.',
            '',
            'Linguagens de Programação: ',
            'JavaScript e TypeScript',
            '',
            'Plataformas: ',
            'WordPress: Desenvolvimento e customização de sites e blogs.',
            '',
            'Testes: ',
            'Jest: Execução de testes unitários para garantir a qualidade e a integridade do código; Selenium: Automação de testes integrados, simulando ambientes de produção.',
          ],
        direction: "row",
        mainColor: "rgb(26, 115, 130)",
        secondaryColor: "rgb(0, 6, 13) ",
        iconImageSrc: "https://i.ibb.co/LC90xdn/front-End-Icons.png"
      },


      {
        title: "Tecnologias Server-Side",
        text:
          [
            'Tenho experiência abrangente em diversas tecnologias server-side, adquiridas tanto em cursos quanto por meio da prática profissional. Abaixo, listo alguns exemplos:',  
            '',  
            'Frameworks:',
            'NestJS: Desenvolvimento de aplicações escaláveis e modulares com Node.js e TypeScript; Laravel: Criação de soluções robustas e elegantes em PHP; .NET: Desenvolvimento de aplicações de alto desempenho e seguras na plataforma Microsoft.',  
            '',  
            'Provedores de Hospedagem:',
            'AWS: Utilização de serviços de nuvem para garantir escalabilidade e alta disponibilidade; Heroku: Implantação simplificada de aplicações web com escalabilidade prática.',  
            '',  
            'Bancos de Dados:',
            'MySQL: Gerenciamento de bancos de dados relacionais para aplicações web; SQL Server: Implementação de soluções robustas e integradas com o ecossistema .NET; PostgreSQL: Banco de dados relacional open-source com foco em extensibilidade e conformidade com padrões; MongoDB: Utilização de banco de dados NoSQL orientado a documentos para soluções flexíveis e escaláveis.',  
            '',  
            'Linguagens de Programação:',
            'Node.js: Execução de JavaScript no servidor para aplicações em tempo real e escaláveis; Java: Desenvolvimento de sistemas corporativos de grande porte; C#: Criação de aplicações robustas na plataforma .NET; PHP: Desenvolvimento web com amplo ecossistema e frameworks diversos; Python: Aplicação em diversos cenários, desde desenvolvimento web até automação e análise de dados.',  
            '',  
            'Desenvolvimento Mobile:',
            'React Native: Desenvolvimento de aplicativos móveis com experiência nativa utilizando JavaScript.',  
            '',  
            'Ambiente Linux:',
            'Ubuntu: Administração e utilização em servidores e estações de trabalho, devido à sua estabilidade e facilidade de uso; Fedora e CentOS: Implementação de ambientes robustos e seguros para diversas necessidades corporativas.',
          ],
        direction: "row",
        mainColor: "rgb(89, 105, 198)",
        secondaryColor: "rgb(12, 13, 89)",
        iconImageSrc: "https://i.ibb.co/ZfxDBfw/backend-Icons3.png"


      }
    ],

    timelineinfo: {
      title: "Timeline",
      dates: ["2019-07-22", "2021-04-30", "2021-11-22", "2022-03-01","2024-08-01"],
      description: [
        "Meu Primeiro Hello World em Python",
        "Meu primeiro cliente como Freelancer",
        "Minha Admissão em minha empresa atual como Dev. Júnior",
        "Minha primeira promoção como líder de Squad.",
        "Minha admissão como desenvolvedor Full Stack pleno e o início de minha jornada profissional atuando como Prompt Engineer."
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
      landingImage: `https://i.ibb.co/HLWChLwL/Ryan-Rodrigo-Costa-Desenvolvedor-Fullstack-Full-stack-pleno-Prompt-engineer-IA-especialista-profissi.png`,
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
        src: `https://i.ibb.co/4YdvzWx/Captura-de-tela-2024-06-18-201723-2png.png`,
        clickMessage: `Read More`,

        paragraph: `My first project consuming external APIs and appling AJAX!`,
        detailedInfo: {
          title: `PokeDev`,
          link: `https://ryan-r-c.github.io/PokeDEV/`,
          linkTitle: `Github Link`,
          imgSrc: `https://i.ibb.co/4YdvzWx/Captura-de-tela-2024-06-18-201723-2png.png`,
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
        src: `https://i.ibb.co/6FQW1Jh/Captura-de-tela-2024-06-18-201958.png`,
        clickMessage: `Read More`,

        paragraph: `External API consumption, page with dynamic content and interesting UI...`,
        detailedInfo: {
          title: `Infinity Scroll`,
          link: `https://ryan-r-c.github.io/Infinity-Scroll/`,
          linkTitle: `Website Link`,
          imgSrc: `https://i.ibb.co/6FQW1Jh/Captura-de-tela-2024-06-18-201958.png`,
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
        src: `https://i.ibb.co/DtMTbgV/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31.png`,
        clickMessage: `Read More`,

        paragraph: `A cross-platform app using React Native and Expo!`,
        detailedInfo: {
          title: `React Native News`,
          link: `https://github.com/Ryan-R-C/Computer-React-Native-App`,
          linkTitle: `GitHub Link`,
          imgSrc: `https://i.ibb.co/DtMTbgV/68747470733a2f2f692e6962622e636f2f743862735173662f53637265656e73686f742d66726f6d2d323032322d30372d31.png`,
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
          link: `https://github.com/Ryan-R-C/Computer-React-Native-App`,
          linkTitle: `GitHub Link`,
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
          linkTitle: `Figma link`,
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
            'ReactJs is the foundation of my Front-End development, being the library with which I have the greatest affinity, knowledge, and experience.', 
            'Throughout my journey, I have worked on both the creation and modeling of projects entirely developed by me and the maintenance of systems originated by third parties. The simplicity and optimization of its syntax contribute to agile and efficient development.',  
            'I began my studies in ReactJs in 2020 and, since then, I have been deepening my expertise in the tool, exploring clean architectures, as well as complementary libraries like Styled Components and Tailwind, among others.'  
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
            'Node.js is a technology that allows JavaScript to run on the server, enabling the creation of back-end applications with support for asynchronous and event-driven operations. This characteristic makes it ideal for developing scalable and high-performance systems.',  
            'Throughout my journey, I have actively participated in the development of complete solutions, including the creation of RESTful APIs, integration with relational databases (MySQL, PostgreSQL) and non-relational databases (MongoDB), and the implementation of microservices architectures. I contributed to the definition of frameworks and database modeling, ensuring the robustness and scalability of the projects.',  
            'Since 2020, when I started studying Node.js, I have been applying best development practices focusing on the implementation of clean architectures incorporating SOLID principles, prioritizing performance and maintainability. In various projects, I have implemented ORMs like Sequelize, TypeORM, and Prisma to optimize communication with the persistence layer, contributing to more efficient maintenance and the continuous evolution of applications.'  

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
            'Since 2021, when I started developing with Docker, this technology has been essential for creating clean and scalable architectures, allowing the use of multiple containers on a single server. This approach facilitates migration between heterogeneous environments, including between servers with different operating systems.',  
            'Throughout various projects, I have implemented Docker to standardize development and production environments, simplifying the maintenance of client servers and ensuring greater consistency and scalability in applications.'  
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
            'I have extensive experience with various client-side technologies, acquired through both coursework and professional practice. Below are some examples:',  
            '',  
            'Frameworks and Libraries:',
            'React Native: Mobile application development; Vue.js: Creating dynamic and reactive web interfaces; AngularJS: Building robust and dynamic web applications; Next.js: Developing React applications with server-side rendering; jQuery: Simplifying DOM manipulation and event handling for dynamic web interfaces.',  
            '',  
            'Design and Styling:',
            'Material Design: Implementing visual guidelines for intuitive interfaces; Tailwind CSS: Rapidly developing custom layouts using utility classes; Bootstrap: Quickly and consistently creating responsive interfaces.',  
            '',  
            'Programming Languages:',
            'JavaScript and TypeScript',  
            '',  
            'Platforms:',
            'WordPress: Developing and customizing websites and blogs.',  
            '',  
            'Testing:',
            'Jest: Running unit tests to ensure code quality and integrity; Selenium: Automating integration tests by simulating production environments.',  

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
              'I have extensive experience with various server-side technologies,',  
              'acquired through both coursework and professional practice. Below are some examples:',  
              '',  
              'Frameworks:',  
              '   - NestJS: Development of scalable and modular applications using Node.js and TypeScript; Laravel: Building robust and elegant solutions in PHP; .NET: Developing high-performance and secure applications on the Microsoft platform.',  
              '',  
              'Hosting Providers:',  
              '   - AWS: Utilizing cloud services to ensure scalability and high availability; Heroku: Simplified deployment of web applications with practical scalability.',  
              '',  
              'Databases:',  
              '   - MySQL: Managing relational databases for web applications; SQL Server: Implementing robust solutions integrated with the .NET ecosystem; PostgreSQL: Open-source relational database with a focus on extensibility and standards compliance; MongoDB: Using a document-oriented NoSQL database for flexible and scalable solutions.',  
              '',  
              'Programming Languages:',  
              '   - Node.js: Running JavaScript on the server for real-time and scalable applications; Java: Developing large-scale enterprise systems; C#: Creating robust applications on the .NET platform; PHP: Web development with a vast ecosystem and various frameworks; Python: Applied in multiple scenarios, from web development to automation and data analysis.',  
              '',  
              'Mobile Development:',  
              '   - React Native: Developing mobile applications with a native experience using JavaScript.',  
              '',  
              'Linux Environment:',  
              '   - Ubuntu: Administration and usage in servers and workstations due to its stability and ease of use; Fedora and CentOS: Implementing robust and secure environments for various corporate needs.',  
          ],
        direction: `row`,
        mainColor: `rgb(89, 105, 198)`,
        secondaryColor: `rgb(12, 13, 89)`,
        iconImageSrc: `https://i.ibb.co/ZfxDBfw/backend-Icons3.png`


      }
    ],

    timelineinfo: {
      title: `Timeline`,
      dates: ["2019-07-22", "2021-04-30", "2021-11-22", "2022-03-01","2024-08-01"],
      description: [
        `My first Hello World in Python`,
        `My first client as a Freelancer`,
        `My Admission to my current company as a Junior Dev`,
        `My first promotion as Squad Leader.`,
        `My promotion as Tech Lead.`,
        "My admission as a Mid-level Full Stack Developer and the beginning of my professional journey as a Prompt Engineer.",
      ]
    }
  }
}

