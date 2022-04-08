import { Email, Facebook, Instagram, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
background-color: #a8ffc3;
`;
/*Left Div Components*/
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
margin: 10px;
`;
const Logo=styled.h1`
font-weight: bold;
`;
const Description=styled.p`
margin: 20px 0px;
`;
/*Center Div Components*/
const Center=styled.div`
flex: 1;
margin: 10px;
`;
const SocialContainer=styled.div`
display: flex;
`;
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
margin: 10px;
background-color: #${props=>props.color};
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease;
&:hover{
  transform: scale(1.2);
}
`;

const Title=styled.h3`
font-weight: bold;
margin-bottom: 42px;
`;

const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;
const ListItem=styled.li`
width: 50%;
margin-top: 5px;
`;
/*Right Div Components*/
const Right=styled.div`
flex: 1;
margin: 10px;
`;
const ContactItem=styled.div`
margin-top: 10px;
`;
const Payment=styled.img`
margin-top: 5px;
width: 300px;
height: 50px;
`;
export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>KASH IN.</Logo>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id odio id risus rhoncus scelerisque quis a ligula. Praesent ac posuere velit, id sagittis quam. Praesent tempor mi posuere lectus pretium, vitae convallis libero varius. Etiam eget sodales nisi. Quisque molestie varius elit, quis rutrum mauris lacinia eget. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Description>
        <SocialContainer>
            <SocialIcon color="4267B2">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="bc2a8d ">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="1DA1F2">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="FF0000">
                <YouTube/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          Useful Links:
        </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem><Room style={{marginRight:"10px"}}/> Street: 7/112, Keshav Bhavan, Mahim City, Maharashtra-400016
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +91 7021058521</ContactItem>
        <ContactItem><Email style={{marginRight:"10px"}}/> kaustubhadhe@gmail.com</ContactItem>
        <Payment src="https://www.horusrc.com/media/wysiwyg/pay_by_cards.jpg"/>
      </Right>
    </Container>
  )
}
