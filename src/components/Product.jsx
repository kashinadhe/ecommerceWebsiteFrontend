import React from 'react'
import styled from 'styled-components';
import {Search,ShoppingCartOutlined,FavoriteBorder} from "@material-ui/icons";

const IconContainer=styled.div`
flex: 1;
cursor: pointer;
transition: all 0.5s ease;
margin: 5px;
background-color: white;
border-radius: 30%;
/*Initially we don't want to display icons so opacity is set equal to 0, 
when we will hover over the Container, 
we will change the CSS of this component by setting opacity to 1*/
opacity: 0;
&:hover{  /*THIS IS HOW WE USE PSEUDO CLASSES IN STYLED COMPONENTS*/
  background-color: #CDCAC9;
  border-radius: 30%;
  transform: scale(1.2);
}
`;
const Image=styled.img`
height: 65%;
width: 225px;
border-radius: 10%;
`;

const Container=styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.8s ease;
cursor: pointer;
background-color: #9eb0f7;
&:hover{  /*THIS IS HOW WE USE PSEUDO CLASSES IN STYLED COMPONENTS*/
  background-color: #83868f; 
}
/*When we hover over Container we can change CSS of 
  other components by following this syntax: 
  $<Component Name inside curly braces>*/
&:hover ${IconContainer}{ 
  opacity:1;
}
&:hover ${Image}{
  opacity: 0.8;
  border: 1px solid;
  border-radius: 10%;
}
`;

const ProductContainer=styled.div`

`;

const InfoContainer=styled.div`
position: absolute;
display: flex;
`;


export default function Product({item}) {
  return (
   <Container>
    <Image src={item.img}></Image>
    <InfoContainer>
        <IconContainer>
            <ShoppingCartOutlined/>  
        </IconContainer>
        <IconContainer>
            <Search/>
        </IconContainer>
        <IconContainer>
            <FavoriteBorder/>
        </IconContainer>
    </InfoContainer>
   </Container>
  )
}
