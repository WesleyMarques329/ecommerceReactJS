import styled from "styled-components"
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import { useState } from "react"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container  = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })};
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    position: relative;

`
const Image = styled.img`
    height: 100%;
    width: 100%
    
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    top: 60%;
    left: 70%;
    position: absolute;
    z-index: 5;
`
const Title = styled.h1`
    font-size: 40px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: snow;
    cursor: pointer;
    text-align: center;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

  return (
  <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <BsArrowLeft/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
                <Image src={item.img}></Image>
                <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>MOSTRAR MAIS</Button>
            </InfoContainer>
            </ImgContainer>
            </Slide>
            ))} 
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <BsArrowRight/>
        </Arrow>
  </Container>
  )
}

export default Slider