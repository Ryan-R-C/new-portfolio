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
                aboutMeQuote:{
                  quote: "Confucius was a Chinese philosopher and politician of the Spring and .",
                  author: "author1"
                },

                portFolioQuote: {
                  quote: "Confucius's  remaining influential across China and East Asia to this day.",
                  author: "author1"
                },

                landing:{
                  landingImage: "https://criticalhits.com.br/wp-content/uploads/2022/05/Goku-In-Dragon-Ball-Super--910x455.webp",
                  linkedingLink: "",
                  gitHubLink: "",
                  emailLink: "",

                },


                mainAboutText:{
                  title: 'About Me',
                  paragraphs: [
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam!",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error repellat magnam repudiandae iure fuga ea. Aliquid, cum. Accusantium, est!",
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae facilis dignissimos nulla fuga natus sapiente perferendis reprehenderit!"
                  ]
                },
                asideAboutText: {
                  title: 'Lorem Alt',
                  paragraphs: [
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nihil!",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                ]},

                filtros: [
                  "React",
                  "Node",
                  "Design"
                ],
                portFolioInfo: [
                  {
                    filter:"React",
                    title:"El Lorem",
                    link:"#",
                    src:"data:image/jpeg;base64,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",
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                    filter:"Node",
                    title:"Text Hue",
                    link:"#",
                    src:"https://blog.hubspot.com/hs-fs/hubfs/Google%20Drive%20Integration/How%20to%20Find%20the%20Perfect%20GIF%2010%20Must-Try%20Websites-3.gif?width=624&height=320&name=How%20to%20Find%20the%20Perfect%20GIF%2010%20Must-Try%20Websites-3.gif",
                    
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                    filter:"React",
                    title:"Stranger Things",
                    link:"#",
                    src:"https://kinsta.com/pt/wp-content/uploads/sites/3/2019/03/portfolio-website-1024x512.png",
                    
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                    title:"Kali Linux",
                    link:"#",
                    src:"https://www.getstreamline.com/hs-fs/hubfs/website%20build%20gif%201.gif?width=297&name=website%20build%20gif%201.gif",
                    
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                    filter:"Node",
                    title:"I have no Idea",
                    link:"#",
                    src:"https://i.pinimg.com/originals/f6/2e/c3/f62ec33251d6e4f1555cdfbd53acadbe.gif",
                    
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://banco.bradesco/canaisdigitais/assets/img/gif-pagar-conta-sem-codigo.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, libero.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste tempora nemo sed? Vitae velit perferendis a laboriosam beatae modi.",
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                    filter:"Node",
                    title:"I have no Idea",
                    link:"#",
                    src:"https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.png",
                    
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ducimus eaque unde incidunt nobis dolores possimus ipsa, voluptatibus sit omnis!",
                    detailedInfo: {
                      title:"El Lorem",
                      link:"#",
                      linkTitle:"Link do Github",
                      imgSrc: "https://catracalivre.com.br/wp-content/uploads/2016/11/giphy-e-um-dos-sites-mais-acessados-do-mundo-olha-so.gif",
                      infos: [
                        {
                          title:"",
                          text: [
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio provident mollitia dolores sunt, maxime beatae.",
                          ]
                        },
                        {
                          title:"Text",
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
                  title: "EL lorem loreimos",
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
                  title: "EL lorem loreimos",
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
                  title: "EL lorem loreimos",
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
                  title: "EL lorem loreimos",
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
                  title: "EL lorem loreimos",
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
                ]
              }
          
          setInfo(newInfo)
      },[]
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

