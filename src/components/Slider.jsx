import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import sliderItems from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 812px;
  display: flex;
  margin-top: 33px;
  background-color: #b5ffed;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) =>
    props.direction === "left" && "10px"}; //prop is 'direction'
  right: ${(props) =>
    props.direction === "right" &&
    "10px"}; //if direction = 'left' style for left
  cursor: pointer; //else style for right arrow
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: all 1.5s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`; //translateX repositions elements horizontally
//transition is used for animation of slide switching

const Slide = styled.div`
  padding: 120px;
  display: flex;
  align-items: center;
  width: 100%;
  heigth: 50vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 50px;
  position: relative;
`;

const Image = styled.img`
  flex: 1;
  height: 500px;
  width: 750px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(0.88);
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0;
  letter-spacing: 3px;
`;
const Button = styled.button`
  border: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  background-color: teal;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background-color: gold;
  }
`;
export default function Slider() {
  //1st, 2nd, 3rd, 4th slides have indices 0,1,2,3 resp
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = function (direction) {
    /*this function is used to 
                                            handle click event on arrows*/
    if (direction === "left") {
      //if slideIndex is not greater than 0 then move to 3rd slide
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      //if slideIndex is not lesser than 0 then move to 1st slide
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.img}></Image>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </ImageContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
