import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container=styled.div`

`;
const Wrapper=styled.div`
padding: 20px;
`;
const Title=styled.h1`
font-weight: 300;
text-align: center;
`;
const Text=styled.span``;
const UnorderedList=styled.ul`
margin: 10px 0px 0px 50px;
`;
const ListItem=styled.li``;
const T=styled.div`display: flex;`;
const T1=styled.span`flex: 1`;
const T2=styled.span`
flex: 1;
font-weight: lighter;
`;
/*Top Div Styling*/
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;
const TopButton=styled.button`
margin-right: 15px;
margin-bottom: 15px;
border: 1px solid grey;
border-radius: 10px;
height: 50px;
width: 150px;
font-weight: bold;
background-color: ${prop=>prop.type==="checkout"? "gold" : "#7bebed"};

&:hover{
    transform: scale(1.1);
    background-color: ${prop=>prop.type==="checkout"? "orange" : "gold"};;
}
`;
const TopTexts=styled.div``;
const TopText=styled.span`
font-weight: 500;
margin: 0px 10px;
cursor: pointer;
`;
/*Bottom Div Styling*/
const Bottom=styled.div`
display: flex;
`;
const Info=styled.div`
display: flex;
font-weight: bold;
flex: 3;
`;

const Product=styled.div`
flex: 1;
`;
const ProductDetail=styled.div`
display: flex;
`;

const PriceDetail=styled.span``;

const ImageContainer=styled.div`flex: 1;`;
const Image=styled.img`
width: 100%;
margin: 0px 10px 0px 10px;
`;
const Details=styled.div`
flex: 4;
`;
const QuantityContainer=styled.div`flex: 2`;
const QuantitySubContainer=styled.div`display:flex`;
const AddButton=styled.button`
height: 25px;
font-weight: bold;
margin-left: 10px;
margin-top: 12px;
`;
const RemoveButton=styled.button`
height: 25px;
font-weight: bold;
margin-right: 10px;
margin-top: 12px;
`;
const Quantity=styled.h1`
font-weight: bold;
`;
/*Summary Sub Div Styling*/
const Summary=styled.div`
display: flex;
margin: 10px;
font-weight: bold;
border: 0.5px solid grey;
border-radius: 5px;
flex: 1;
flex-direction: column;
`;
const SummaryTitle=styled.span`
margin-left: 10px;
`;
const SummaryItem=styled.div`
margin: 10px 0px;
margin: ${prop=>prop.type!=="total"?10:0}px 0px;
display: flex;
justify-content: space-between;
background-color: ${prop=>prop.type==="total" ? "black" : "white"};
color: ${prop=>prop.type==="total" ? "white" : "black"};
font-size: ${prop=>prop.type==="total" ? 20 : 16}px;
`;
const SummaryItemText=styled.span`
flex: 1;
margin-left: 15px;
`;
const SummaryItemPrice=styled.span`
font-weight: bold;
flex: 1;
display: flex;

justify-content: center;
`;
const ProductName=styled.h3`
margin: 0px 0px 0px 50px;
`;
const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return {quantity: state.quantity+1};
    case "DECREMENT":
      if(state.quantity>1){
        return {quantity: state.quantity-1};
      }
    default:
      return state;
  }
}
export default function Cart() {
  const [state, dispatch]=useReducer(reducer,{quantity:1});

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
            <TopText></TopText>
          </TopTexts>
            <TopButton type="checkout">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <ImageContainer>
                  <Image src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"/>
                  </ImageContainer>
                  <Details>
                  <ProductName><b>Product:</b> Canon EOS 1500D</ProductName>
                  <UnorderedList>
                    <ListItem>
                    <T><T1><b>Price</b></T1><T2>${state.quantity*486}</T2></T>
                    </ListItem>
                  </UnorderedList>
                  </Details>
                  <QuantityContainer>
                  <Text><h5><b>Quantity:</b></h5></Text>
                  <QuantitySubContainer>
                  <RemoveButton onClick={()=>{
                      dispatch({type:"DECREMENT"});
                    }}>-</RemoveButton>
                    <Quantity>{state.quantity}</Quantity>
                    <AddButton onClick={()=>{
                      dispatch({type: "INCREMENT"});
                    }}>+</AddButton>
                  </QuantitySubContainer>
                  </QuantityContainer>
                </ProductDetail>
              </Product>
            </Info>
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal: </SummaryItemText>
                <SummaryItemPrice>$ {state.quantity*486}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Charges: </SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount: </SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>TOTAL: </SummaryItemText>
                <SummaryItemPrice>$ {state.quantity*486}</SummaryItemPrice>
              </SummaryItem>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
