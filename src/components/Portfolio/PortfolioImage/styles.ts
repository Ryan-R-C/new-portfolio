import styled from "styled-components";

export const Image = styled.a`
display: flex;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

margin: 0 auto;
position: relative;
z-index: 1;

  &:before {
    transform: translateX(0%);
    transform: translateY(0%);
    position: absolute;
    z-index: 0;
    content: "";
    top: -0%;
    height: 100%;
    width: 100%;
    border: 0;

    background: #0000008a;
    right: 0;
    transform: translateX(1.05%) rotate(2deg) translateY(-2.5%);
    }

    img {

        min-height: 190px;
        width: 100%;
        height: 10%

        background-color: blue;  
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 10;
        object-fit: cover;
        }
    }
`;