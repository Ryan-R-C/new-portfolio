import { useEffect, useRef, useState } from 'react';

import { Container, MainItem, SubItem, UnbreakerPage } from './styles';

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
  }, [ref]);

  return ref;
};



export default function FeaturedBlockQuote(
  { quote, author }: any
) {
  const [ isOpen, setIsOpen ]= useState(false)


  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      {/* @ts-ignore */}
      <Container ref={ref}  className="click-text">
        <MainItem>
        </MainItem>


        <SubItem>
          <div className="container">
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
          </div>
        </SubItem>


      </Container>
      <UnbreakerPage></UnbreakerPage>
    </>
  );
}

