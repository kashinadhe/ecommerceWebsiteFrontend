import React from 'react';
import styled from 'styled-components';
import {categories} from "../data";
import CategoryItem from './CategoryItem';

const OuterContainer=styled.div``;
const Container=styled.div`
display: flex;
overflow: scroll;
`;

const Title=styled.h1`
    color: "blue";
`;

export default function Categories() {
  return (
    <OuterContainer>
    <Title>CATEGORIES</Title>
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
    </OuterContainer>
  )
}
