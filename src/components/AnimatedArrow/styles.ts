import styled from "styled-components";

export const Container = styled.div`
 
.the-arrow {
  width: 1px;
  transition: all 0.2s;
}
.the-arrow.-left {
  position: absolute;
  top: 60%;
  left: 0;
}
.text{
  color: white;
}
.the-arrow.-left > .shaft {
  width: 0;
  background-color: white;
}
.the-arrow.-left > .shaft:before, .the-arrow.-left > .shaft:after {
  width: 0;
  background-color: white;
}
.the-arrow.-left > .shaft:before {
  transform: rotate(0);
}
.the-arrow.-left > .shaft:after {
  transform: rotate(0);
}
.the-arrow.-right {
  top: 3px;
}
.the-arrow.-right > .shaft {
  width: 1px;
  transition-delay: 0.2s;
}
.the-arrow.-right > .shaft:before, .the-arrow.-right > .shaft:after {
  width: 8px;
  transition-delay: 0.3s;
  transition: all 0.5s;
}
.the-arrow.-right > .shaft:before {
  transform: rotate(40deg);
}
.the-arrow.-right > .shaft:after {
  transform: rotate(-40deg);
}
.the-arrow > .shaft {
  background-color: white;
  display: block;
  height: 1px;
  position: relative;
  transition: all 0.2s;
  transition-delay: 0;
  will-change: transform;
}
.the-arrow > .shaft:before, .the-arrow > .shaft:after {
  background-color: white;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.2s;
  transition-delay: 0;
}
.the-arrow > .shaft:before {
  transform-origin: top right;
}
.the-arrow > .shaft:after {
  transform-origin: bottom right;
}

.animated-arrow {
  display: inline-block;
  font-size: 1.25em;
  font-style: italic;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  color: white !important;
}
.animated-arrow:hover {
  color: white;
}
.animated-arrow:hover > .the-arrow.-left > .shaft {
  width: 64px;
  transition-delay: 0.1s;
  background-color: white;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before, .animated-arrow:hover > .the-arrow.-left > .shaft:after {
  width: 8px;
  transition-delay: 0.1s;
  background-color: white;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before {
  transform: rotate(40deg);
}
.animated-arrow:hover > .the-arrow.-left > .shaft:after {
  transform: rotate(-40deg);
}
.animated-arrow:hover > .main {
  transform: translateX(17px);
  transform: translateX(80px);
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft {
  width: 0;
  transform: translateX(200%);
  transition-delay: 0;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before, .animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  width: 0;
  transition-delay: 0;
  transition: all 0.1s;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before {
  transform: rotate(0);
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  transform: rotate(0);
}
.animated-arrow > .main {
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
.animated-arrow > .main > .text {
  margin: 0 16px 0 0;
  line-height: 1;
}
.animated-arrow > .main > .the-arrow {
  position: relative;
}

`;



