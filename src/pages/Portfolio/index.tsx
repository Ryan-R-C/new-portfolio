import React, { useEffect, useState } from 'react';
import { CloseContainer, Container, FilterSelector, GridContainerPortfolioItems, GridItem2, ModalContainer, ModalContent } from './styles';
import PortfolioProp2 from '../../components/Portfolio2/PortfolioProp2';
import { FiX } from 'react-icons/fi'
//@ts-ignore
import Modal from 'react-modal';
import ModalPortfolioProp from '../../components/Portfolio/ModalPortfolioProp';
import { IoIosArrowForward } from 'react-icons/io';
import StyledButtonModal from '../../components/StyledButtonModal';

let modalStyles={
  overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    right: 0,
    inset: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: "all .5s",
  },
  content: {
    background: 'white',
    width: '85%',
    inset: 0,
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(100vh - 2rem)',
    overflowY: 'auto',
    position: 'relative',
    border: '1px solid #ccc',
    borderRadius: '0.3rem',
    height: '88%',
    alignSelf: 'center',
    transition: "all .5s",
    overflowX: 'hidden',
  }
}

export default function Portfolio({info, filters, close, title}: any) {
/*======================================================================================================

=========================================================================================================*/
  const [displayedItems, setDisplayedItems] = useState<any>([]) 
  const [filterSelected, setFilterSelected] = useState<any>() 

  const [selectedItem, setSelectedItem] = useState<any>({}) 

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModalAndSetValues(selectedPortolioItem: any) {
    setSelectedItem(selectedPortolioItem.detailedInfo)
    
    openModal()
  }


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(
    () => {
      setDisplayedItems(info)
    }, [info]
  )



  function filterPorfolio (filterSelected: string) {
    let filteredComponent: any = []

    info.map(
      (portfolioItem: any) => {
        if(portfolioItem.filter === filterSelected) filteredComponent.push(portfolioItem)
      }
    )


    setDisplayedItems(filteredComponent)
    setFilterSelected(filterSelected)

  }


  function clearFilterPorfolio () {
    setDisplayedItems(info)
    setFilterSelected("")
  }

  return (
    <>
    <Container>
        <h2>
          {title}
        </h2>

      <FilterSelector>
        <button 
        className={!filterSelected ? "activeFilter" : ""}
        onClick={() => clearFilterPorfolio()}>
          Tudo
        </button>
        {
        filters?.map(
          (filter: string) => (
            <button
            key={filter}
            className={filter === filterSelected ? "activeFilter" : ""}
            onClick={() => filterPorfolio(filter)}>
              {filter}
            </button>

          )
        )
        }
      </FilterSelector>
      {/* <GridContainer>
        {

        displayedItems?.map(
          (e: any, i: number) => (
            <GridItem key={i}>
        
              <PortfolioProp
              title={e?.title}
              link={e?.link}
              src={e?.src}
              paragraph={e?.paragraph}
              />
            </GridItem>
            
          )
        )

        }
      </GridContainer> */}
    </Container>

    <>
      <GridContainerPortfolioItems>
        {

        displayedItems?.map(
          (e: any, i: number) => (
            <GridItem2 key={i}>
        
              <PortfolioProp2
              title={e?.title}
              link={e?.link}
              src={e?.src}
              paragraph={e?.paragraph}
              clickMessage={e.clickMessage}
              onClickEvent={() => openModalAndSetValues(e)}
              />
            </GridItem2>
            
          )
        )

        }
      </GridContainerPortfolioItems>
    </>
    <>
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}

          contentLabel="Modal"
          //@ts-ignore
          style={
            modalStyles
          }
          >
          <ModalContainer>
              <FiX
              onClick={closeModal}
              className="closeModal"
              size={23}
              />
            <ModalContent>
              <ModalPortfolioProp
              infos={    selectedItem?.infos}
              link={     selectedItem?.link}
              linkTitle={selectedItem?.linkTitle}
              techs={    selectedItem?.techs}
              imgSrc={   selectedItem?.imgSrc}
              title={     selectedItem?.title}

              />
 
              <CloseContainer>
                <StyledButtonModal
                onClick={() => closeModal()}>
                    {close} <IoIosArrowForward/>
                </StyledButtonModal>
              </CloseContainer>
            </ModalContent>
            

        </ModalContainer>
        </Modal>
    </>


    </>
  );
}

