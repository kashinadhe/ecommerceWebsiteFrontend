import React from 'react';
import {products} from "../data";
import styled from 'styled-components';
import Product from './Product';

const Container=styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
`;

export default function Products() {
  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
