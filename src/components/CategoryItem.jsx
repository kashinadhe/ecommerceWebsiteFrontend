import React from 'react';
import styled from 'styled-components';
import {categories} from "../data";

const Container=styled.div`
    flex: 1;
    position: relative;
    justify-content: space-between;
    height: 620px;
    
`;
const Image=styled.img`
height: 500px;
width: 500px;
border: 2px solid;
margin: 5px;
border-radius: 25px;
padding: 10px;
object-fit: cover;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
  transform: scale(0.88);
}
`;
const Title=styled.h1`

`;
const InfoContainer=styled.div`
position: absolute;
padding: 20px;
bottom: 0;
left: 0;
`;

const Button=styled.button`
    font-size: 20px;
    background-color: teal;
    border: 1px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      transform: scale(1.2);
      background-color: gold;
    }
`;
export default function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <InfoContainer item={item}>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}
