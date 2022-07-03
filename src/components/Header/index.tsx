import { useEffect, useRef, useState } from 'react';

import { ActivatedMenu, Container, MainItem, MenuController, MobileMenu, SubItem, UnbreakerPage, WideMenu } from './styles';


import {AiOutlineMenu} from 'react-icons/ai'
import {CgMenu} from 'react-icons/cg'
import { FiX } from 'react-icons/fi';
const useOutsideClick = (callback: { (): void; (): void; }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
        console.log("hahahahahah")
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};



export default function FeaturedBlockQuote(
  { quote, author }: any
) {
  const [ isOpen, setIsOpen ]= useState(true)


  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      {/* @ts-ignore */}
      <Container ref={ref}  className="click-text">
        <MainItem>
        </MainItem>


        <SubItem>
          <WideMenu>
            <a href="#">
              Landing
            </a>
            <a href="#AboutMe">
              About Me
            </a>
            <a href="#Portfolio">
              Portfolio
            </a>
            <a href="#Timeline">
              Timeline
            </a>
            <a href="#Courses">
              Courses
            </a>
          </WideMenu>
        </SubItem>

        <MobileMenu>
          <MenuController
            onClick={() => handleToggleMenu()}
            className="hamburguer"
          >

            <div className={`icon-container ${isOpen && "open-contaier"}`}>
              <CgMenu        size="2em"/>
            </div>
            
          </MenuController>

          <ActivatedMenu 
          className={isOpen ? 'activated' : 'deactivated'}

          >
            <a href="#">
              Landing
            </a>
            <a href="#AboutMe">
              About Me
            </a>
            <a href="#Portfolio">
              Portfolio
            </a>
            <a href="#Timeline">
              Timeline
            </a>
            <a href="#Courses">
              Courses
            </a>
          </ActivatedMenu>
        </MobileMenu>


      </Container>
      <UnbreakerPage></UnbreakerPage>
    </>
  );
}

