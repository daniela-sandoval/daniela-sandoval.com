import React from 'react';
import styled, { keyframes } from 'styled-components'
import { ReactComponent as DanielaName } from '../img/name.svg'
import { ReactComponent as FullStack } from '../img/full-stack.svg'
import { ReactComponent as Pot } from '../img/pot-whole.svg'
import { ReactComponent as Plant } from '../img/plant.svg'
import { ReactComponent as Cat } from '../img/cat.svg'
import { ReactComponent as Glasses } from '../img/glasses.svg'
import { ReactComponent as Coffee } from '../img/coffee-cup.svg'
import { ReactComponent as Laptop } from '../img/laptop.svg'
import '../Stylesheets/splash.scss'


const wiggle = keyframes `
  20% {
    transform: translateX(5px) rotate(5deg);
  }
  40% {
    transform: scale(1.2) translateX(-5px) rotate(-5deg);
  }
  60% {
    transform: scale(1.1)translateX(5px) rotate(5deg);
  }
  80% {
    transform: scale(1) translateX(-5px) rotate(-5deg);
  }
  100% {
    transform: translateX(0px);
  }
`;

const draw = keyframes `
  0% {
    opacity: 0;
    stroke-dashoffset: 100%;
   }
  90% {
    stroke-dashoffset: 0%;
   }
  100% {
    opacity: 1;
    fill: black;
  }
`
const appear = keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const float = keyframes `
  0% {
    transform: translatey(-6px);
  }
  50% {
    transform: translatey(6px)
  }
  100% {
    transform: translatey(-6px)
  }
`
const float2 = keyframes `
  0% {
    transform: translatey(6px);
  }
  50% {
    transform: translatey(-6px)
  }
  100% {
    transform: translatey(6px)
  }
`
const float3 = keyframes `
  0% {
    transform: translatey(6px) rotate(6deg);
  }
  50% {
    transform: translatey(-6px) rotate(-6deg);
  }
  100% {
    transform: translatey(6px) rotate(6deg);
  }
`
const float4 = keyframes `
  0% {
    transform: translatey(-6px) translateX(-2px) rotate(-6deg);
  }
  50% {
    transform: translatey(6px) translateX(2px) rotate(6deg);
  }
  100% {
    transform: translatey(-6px) translateX(-2px) rotate(-6deg);
  }
`
const icons = keyframes `
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`
const StyledPot = styled(Pot) `
  height: 10vw;
  animation: ${wiggle} 1s ease;
  animation-iteration-count: 2;
  overflow: visible;
  #sprout {
    opacity: 0;
    animation: ${appear} 1.3s ease;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
`

const StyledName = styled(DanielaName) `
  opacity: 0;
  height: 6vw;
  stroke: black;
  stroke-width: 2px;
  fill: transparent;
  overflow: visible;
  stroke-dasharray: 100%;
  transition: 1s;
  animation: ${draw} 1.5s linear;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`
const StyledSub = styled(FullStack) `
  height: 1.5vw;
  margin-top: 3%;
  margin-bottom: 3%;
  opacity: 0;
  animation: ${appear} 1.5s ease;
  animation-delay: 3s;
  animation-fill-mode: forwards;
`
const StyledCat = styled(Cat) `
  opacity: 0;
  height: 12vw;
  transition: 1s;
  animation: ${icons} 1s ease forwards, ${float} 3s ease-in-out infinite;
  animation-delay: 4s;
`
const StyledLaptop = styled(Laptop) `
  opacity: 0;
  height: 13vw;
  transition: 1s;
  animation: ${icons} 1s ease forwards, ${float2} 3s ease-in-out infinite;
  animation-delay: 4s;
`
const StyledCoffee = styled(Coffee) `
  opacity: 0;
  height: 6vw;
  transform: rotate(10deg);
  animation: ${icons} 1s ease forwards, ${float4} 3s ease-in-out infinite;
  animation-delay: 4s;
`
const StyledGlasses = styled(Glasses) `
  opacity: 0;
  height: 4.7vw;
  animation: ${icons} 1s ease forwards, ${float3} 3s ease-in-out infinite;
  animation-delay: 4s;
`

class Splash extends React.Component {
  render () {
    return (
      <div className="splash-page">
        <div className="floaties">
          <StyledLaptop />
          <StyledCat />
        </div>
        <StyledName />
        <StyledSub />
        <button className="about-btn">ABOUT ME</button>
        <div className="floaties">
          <StyledCoffee />
          <StyledGlasses />
        </div>
        <StyledPot />
      </div>
    )
  }
}

export default Splash;

  // animation: ${icons} 1s ease forwards;
