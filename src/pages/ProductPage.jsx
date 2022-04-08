import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const UnorderedList=styled.ul`

`;
const ListItem=styled.li``;
const T=styled.div`display: flex;`;
const T1=styled.span`flex: 1`;
const T2=styled.span`
flex: 2;
font-weight: lighter;
`;
const Container=styled.div`

`;
const Text=styled.p`
font-weight: bold;
font-size: 20px;
`;
const Wrapper=styled.div`
display: flex;
`;
const ImageContainer=styled.div`
flex: 5;
display: flex;
align-items: center;
justify-content: center;
`;
const Image=styled.img`
width: 70%;

`;
const InfoContainer=styled.div`
flex: 4;
`;
const Title=styled.h1`margin-top:20px`;
const Description=styled.p``;
const Price=styled.p`
font-weight: bold;
font-size: 40px;
`;

const AddContainer=styled.div`
display: flex;
flex-direction: column;
`;
const QuantityContainer=styled.div`margin-bottom: 10px;`;
const Quantity=styled.span`
font-weight: bold;
font-size: 25px;
width: 40px;
height: 40px;
border: 1px solid green;
border-radius: 5px;
padding: 10px;
align-items: center;
justify-content: center;
`;
const Button=styled.button`
margin-right: 15px;
margin-bottom: 15px;
border: 1px solid;
border-radius: 10px;
height: 40px;
width: 150px;
font-weight: 300;
background-color: #7bebed;
&:hover{
    transform: scale(1.1);
    background-color: gold;
}
`;
export default function ProductPage() {
    let [quantity,setQuantity]=useState(1);
    const addOrRemove=function(x){
        if(x==="add"){
            setQuantity(quantity++);
        }
        else if(x==="remove"){
            if(quantity>=1){
                setQuantity(quantity--);
            }
           
        }
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Canon EOS 1500D</Title>
                <Description>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Description>
                <UnorderedList>
                <ListItem>
                      <T><T1><b>Brand</b></T1><T2>Canon</T2></T>
                    </ListItem>
                    <ListItem>
                      <T><T1><b>Form Factor</b></T1><T2>Hand held</T2></T>
                    </ListItem>
                    <ListItem>
                      <T><T1><b>Skill Level</b></T1><T2>Amateur, Professional</T2></T>
                    </ListItem>
                    <ListItem>
                      <T><T1><b>Special Feature</b></T1><T2>Built-in monaural microphone, Sound-recording level adjustable, wind filter provided</T2></T>
                    </ListItem>
                    <ListItem>
                      <T><T1><b>Colour</b></T1><T2>Black</T2></T>
                    </ListItem>
                    <ListItem>
                      <T><T1><b>JPEG quality level</b></T1><T2>Basic, Fine, Normal</T2></T>
                    </ListItem>
                    <ListItem>
                    <T><T1><b>Price</b></T1><T2>$486.49</T2></T>
                    </ListItem>
                </UnorderedList>
                <Price>20 $</Price>
                <AddContainer>
                    <QuantityContainer>
                        <Text>Quantity:</Text>
                        <Remove onClick={()=>addOrRemove("remove")}/>
                        <Quantity>{quantity}</Quantity>
                        <Add onClick={()=>addOrRemove("add")}/>
                    </QuantityContainer>
                <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
