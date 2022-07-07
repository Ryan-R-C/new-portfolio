import React, { useEffect, useState } from 'react';

import { Container, LandingContainer } from './styles';
import FeaturedBlockQuote from '../../components/FeaturedBlockQuote';
import Portfolio from '../Portfolio';
import AboutMe from '../../components/Landing/AboutMe';
import ImageContainer from '../../components/Landing/ImageContainer';
import About from '../../components/About';
import Header from '../../components/Header/';
import Timeline from '..//Timeline';
import Courses from '../Courses';



export default function LandingPage() {
  const [info, setInfo] = useState<any>([])
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

  useEffect(
    () => {
      let newInfo =
      {
        aboutMeQuote: {
          quote: "Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário.",
          author: "Elbert Hubbard, escritor."
        },

        portFolioQuote: {
          quote: "Vá sempre além do que é esperado.",
          author: "Larry Page, fundador do Google"
        },

        landing: {
          landingImage: "https://criticalhits.com.br/wp-content/uploads/2022/05/Goku-In-Dragon-Ball-Super--910x455.webp",
          linkedingLink: "https://www.linkedin.com/in/ryan-costa-7ba1b7216/",
          gitHubLink: "https://github.com/Ryan-R-C",
          emailLink: "ryan.r.c.339ac@gmail.com",

        },


        mainAboutText: {
          title: 'Sobre mim',
          paragraphs: [
            "Eu sou Ryan Rodrigo Costa, Engenheiro de Software e Dev. Full Stack.",
            "Meu contato com Software começou com desenvolvimento em Python, em 2019, me apaixonei pelo desenvolvimento desde o primeiro 'Hello, World' e a cada dia que passa me apaixono mais ainda.",
            "Tenho experiência em projetos usando Python, Node e PHP como linguagens de programação. A maior parte dos meus projetos pessoais são open-source e disponíveis no GitHub.",
            "Tenho como metas me tornar sempre um desenvolvedor melhor até chegar a minha senioridade, sempre me aperfeiçoando nas Soft e Hard Skills"
          ]
        },
        asideAboutText: {
          title: 'Um pouco mais pessoal',
          paragraphs: [
            "Atualmente estudo Desenvolvimento Web, tanto Back End quanto Front End, cursando meu bacharelado em Engenharia de Software e, aos finais de semanam, estudo Smart Contracts. Minha meta é se aperfeiçoar na área de desenvolvimento Web.",
            "Tenho inglês avançado, tanto que faço cursos nessa lingua estrangeira, e arranho um pouco no espanhol",
            "Minha principal motivação é minha esposa e conseguir uma qualidade de vida maior para nós.",
          ]
        },

        filtros: [
          "React",
          "Node",
          "Design"
        ],
        portFolioInfo: [
          {
            filter: "HTML",
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
            filter: "Node",
            title: "Infinity Scroll",
            link: "https://ryan-r-c.github.io/Infinity-Scroll/",
            src: "https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067",

            paragraph: "Consumo de API externa, página com conteúdo dinâmico e UI interessante...",
            detailedInfo: {
              title: "Infinity Scroll",
              link: "https://ryan-r-c.github.io/Infinity-Scroll/",
              linkTitle: "Link do Github",
              imgSrc: "https://camo.githubusercontent.com/1576d0b33b884648fa3f43dc965f28f6bb2fbdc8adf45ee5c60a58169e835bf8/68747470733a2f2f692e6962622e636f2f3536716e3859312f612d696e66696e6974792d5363726f6f6c2d776964652e6a7067",
              infos: [
                {
                  title: "",
                  text: [
                    /*
                    =================================================================================================================================
                    CONTINUA
                    
                    */ 
                    "É um projeto que consome uma API externa, JSONPlaceholder, e os carrega conforme o usuário desce na página que aciona uma animação. E também filtra os dados conforme o usuário deseja. Boa IU e código limpo.",
                  ]
                },
                {
                  title: "Text",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
                  ]
                },
              ],
              techs: {
                title: "Techs used",
                list: [
                  "LOREM",
                  "Superman",
                  "Linux",
                  "Enter the sandman"
                ]
              }
            }
          },

          {
            filter: "React",
            title: "PokeDev",
            link: "https://ryan-r-c.github.io/PokeDEV/",
            src: "https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067",

            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
            detailedInfo: {
              title: "El Lorem",
              link: "https://ryan-r-c.github.io/PokeDEV/",
              linkTitle: "Link do Github",
              imgSrc: "https://camo.githubusercontent.com/206f5ae4ea180f491d091d68b03594b1aa939fb138842414cb3c681ff52a8b55/68747470733a2f2f692e6962622e636f2f7a5a327859374d2f706f6b656465762e6a7067",
              infos: [
                {
                  title: "",
                  text: [
                    "Uma página da web que consome dados de uma API externa, pokeAPI, e mostra dados específicos do pokémon na tela. Um bom exemplo de código limpo e gerenciamento AJAX + DOM, todo o código é comentário.",
                    /*
                    =================================================================================================================================
                    CONTINUA
                    
                    */ 
                  ]
                },
                {
                  title: "Text",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
                  ]
                },
              ],
              techs: {
                title: "Techs used",
                list: [
                  "LOREM",
                  "Superman",
                  "Linux",
                  "Enter the sandman"
                ]
              }
            }
          },

          {
            filter: "Design",
            title: "Kali Linux",
            link: "#",
            src: "https://www.getstreamline.com/hs-fs/hubfs/website%20build%20gif%201.gif?width=297&name=website%20build%20gif%201.gif",

            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
            detailedInfo: {
              title: "El Lorem",
              link: "#",
              linkTitle: "Link do Github",
              imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
              infos: [
                {
                  title: "",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                  ]
                },
                {
                  title: "Text",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
                  ]
                },
              ],
              techs: {
                title: "Techs used",
                list: [
                  "LOREM",
                  "Superman",
                  "Linux",
                  "Enter the sandman"
                ]
              }
            }
          },

          {
            filter: "Node",
            title: "I have no Idea",
            link: "#",
            src: "https://i.pinimg.com/originals/f6/2e/c3/f62ec33251d6e4f1555cdfbd53acadbe.gif",

            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
            detailedInfo: {
              title: "El Lorem",
              link: "#",
              linkTitle: "Link do Github",
              imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
              infos: [
                {
                  title: "",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                  ]
                },
                {
                  title: "Text",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore!",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
                  ]
                },
              ],
              techs: {
                title: "Techs used",
                list: [
                  "LOREM",
                  "Superman",
                  "Linux",
                  "Enter the sandman"
                ]
              }
            }
          },

          {
            filter: "Node",
            title: "I have no Idea",
            link: "#",
            src: "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.png",

            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
            detailedInfo: {
              title: "El Lorem",
              link: "#",
              linkTitle: "Link do Github",
              imgSrc: "https://catracalivre.com.br/wp-content/uploads/2016/11/giphy-e-um-dos-sites-mais-acessados-do-mundo-olha-so.gif",
              infos: [
                {
                  title: "",
                  text: [
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                  ]
                },
                {
                  title: "Text",
                  text: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur iste eligendi aperiam eum dicta sint dolorem blanditiis quo dignissimos!",
                  ]
                },
              ],
              techs: {
                title: "Techs used",
                list: [
                  "LOREM",
                  "Superman",
                  "Linux",
                  "Enter the sandman"
                ]
              }
            }
          },
        ],

        coursesInfo: [
          {
            title: "React",
            text:
              ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
              ],
            direction: "row",
            mainColor: "#4169e1",
            secondaryColor: "rgb(11, 19, 45)",
            iconImageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          },

          {
            title: "NodeJS",
            text:
              ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
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
              ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
              ],
            direction: "row",
            mainColor: "rgb(0, 167, 255)",
            secondaryColor: "rgb(0, 18, 28)",
            iconImageSrc: "https://cdn-icons-png.flaticon.com/512/919/919853.png"
          },


          {
            title: "Tecnologias Client-Side",
            text:
              ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
              ],
            direction: "row",
            mainColor: "rgb(26, 115, 130)",
            secondaryColor: "rgb(0, 6, 13) ",
            iconImageSrc: "https://i.ibb.co/LC90xdn/front-End-Icons.png"
          },


          {
            title: "Tecnologias Server-Side",
            text:
              ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam nisi cupiditate soluta aut vitae nam modi molestiae at.'
              ],
            direction: "row",
            mainColor: "rgb(89, 105, 198)",
            secondaryColor: "rgb(12, 13, 89)",
            // iconImageSrc: "https://i.ibb.co/z6YDss1/backend-Icons.png"
            // iconImageSrc: "https://i.ibb.co/z6YDss1/backend-Icons.png"  
            iconImageSrc: "https://i.ibb.co/F7yHNLX/backend-Icons.png"
            // iconImageSrc: "https://i.ibb.co/8n3qhS0/backend-Icons2.png"


          }
        ],
        timelineinfo: {
          dates: [''],
          description: ['']
        }
      }

      setInfo(newInfo)
    }, []
  )

  return (
    <>

      <Header />
      <LandingContainer id="Landing">
        <AboutMe />
        <ImageContainer
          landingImageSrc={info?.landing?.landingImage}
          linkedingLink={info?.landing?.linkedingLink}
          gitHubLink={info?.landing?.gitHubLink}
          emailLink={info?.landing?.emailLink}
        />
      </LandingContainer>

      <Container id="AboutMe">
        <FeaturedBlockQuote
          quote={info?.aboutMeQuote?.quote}
          author={info?.aboutMeQuote?.author}
        />
        <About
          mainAboutTitle={info?.mainAboutText?.title}
          mainAboutText={info?.mainAboutText?.paragraphs}
          asideAboutTitle={info?.asideAboutText?.title}
          asideAboutText={info?.asideAboutText?.paragraphs}
        />
      </Container>

      <Container id="Portfolio">
        <FeaturedBlockQuote
          quote={info?.portFolioQuote?.quote}
          author={info?.portFolioQuote?.author}
        />
        <Portfolio
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container id="Timeline">
        <Timeline
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container id="Courses">
        <Courses
          props={info.coursesInfo}
        >
        </Courses>
      </Container>

    </>
  );
}

/*
import { Container, LandingContainer } from './styles';
import FeaturedBlockQuote from '../../FeaturedBlockQuote';
import Portfolio from '../../../pages/Portfolio';
import AboutMe from '../AboutMe';
import ImageContainer from '../ImageContainer';
import About from '../../About/About';
import Header from '../../Header/';
import Timeline from '../../../pages/Timeline';
import Courses from '../../../pages/Courses';


export default function Landing(
  { info }: any
) {
  return (
    <div >
      <Header />
      <LandingContainer id="Landing">
        <AboutMe />
        <ImageContainer
          landingImageSrc={info?.landing?.landingImage}
          linkedingLink={info?.landing?.landingImage}
          gitHubLink={info?.landing?.gitHubLink}
          emailLink={info?.landing?.emailLink}
        />
      </LandingContainer>

      <Container id="AboutMe">
        <FeaturedBlockQuote
          quote={info?.aboutMeQuote?.quote}
          author={info?.aboutMeQuote?.author}
        />
        <About
          mainAboutTitle={info?.mainAboutText?.title}
          mainAboutText={info?.mainAboutText?.paragraphs}
          asideAboutTitle={info?.asideAboutText?.title}
          asideAboutText={info?.asideAboutText?.paragraphs}
        />
      </Container>

      <Container  id="Portfolio">
        <FeaturedBlockQuote
          quote={info?.portFolioQuote?.quote}
          author={info?.portFolioQuote?.author}
        />
        <Portfolio
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container  id="Timeline">
        <Timeline
          filters={info.filtros}
          info={info?.portFolioInfo}
        />
      </Container>

      <Container  id="Courses">
        <Courses
        props={info.coursesInfo}
        >
        </Courses>
      </Container>
    </div>
  );
}



*/

