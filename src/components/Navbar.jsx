import React from 'react'
import styled from 'styled-components';
import {Search,ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from '../responsive';

const Container=styled.div`
    height: 60px;
    position: fixed;
    top: 0px;
    z-index: 1;
    background-color: #7dffa0;
    width: 100%;
    ${mobile({width: "380px"})};
`;
const Wrapper=styled.div`
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
`;
//Left div styling
const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input=styled.input`
    border: none;
    background-color: #7dffa0;
   &:focus{
       outline: none;
       background-color: white;
   }
`;

//Center div styling
const Center=styled.div`
    flex: 1;
    text-align: center;
`;

const Logo=styled.h1`
    font-weight: bold;
    
`;

//Right div styling
const Right=styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    margin-top: 5px;
`;

const MenuItem=styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    padding-top: 5px;
    text-underline-offset: 0.4rem;
    text-decoration: underline 0.15em rgba(255, 255, 255, 0);
    transition: text-decoration-color 500ms;
    &:hover{
        text-decoration-color: red;
        text-underline-offset: 0.4rem;
    }
`;

export default function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder='Search...'/>
                    <Search style={{color: "gray", fontSize: 25, cursor: "pointer"}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>KASH IN.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}
