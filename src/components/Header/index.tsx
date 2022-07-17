import { useEffect, useRef, useState } from 'react';
import { ActivatedMenu, Container, MainItem, MenuController, MobileMenu, SubItem, UnbreakerPage, WideMenu } from './styles';
import {CgMenu} from 'react-icons/cg'
const useOutsideClick = (callback: { (): void; (): void; }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, [ref]);

  return ref;
};



export default function Header(
  { linkNames }: any
) {
  const [ isOpen, setIsOpen ]= useState(false)


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
            <a href="#Landing">
              { linkNames?.landing || "Landing" }
            </a>
            <a href="#AboutMe">
              { linkNames?.aboutMe || "About Me" }
            </a>
            <a href="#Portfolio">
              { linkNames?.portfolio || "Portfolio "}
            </a>
            <a href="#Timeline">
              { linkNames?.timeLine || "Timeline" }
            </a>
            <a href="#Courses">
              { linkNames?.courses || "Courses" }
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
            <a href="#Landing">
              { linkNames?.landing || "Landing" }
            </a>
            <a href="#AboutMe">
              { linkNames?.aboutMe || "About Me" }
            </a>
            <a href="#Portfolio">
              { linkNames?.portfolio || "Portfolio "}
            </a>
            <a href="#Timeline">
              { linkNames?.timeLine || "Timeline" }
            </a>
            <a href="#Courses">
              { linkNames?.courses || "Courses" }
            </a>
          </ActivatedMenu>
        </MobileMenu>


      </Container>
      <UnbreakerPage></UnbreakerPage>
    </>
  );
}

