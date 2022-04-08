import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Container=styled.div`

`;

const Title=styled.h1`
margin-left: 20px;
`;
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`;

const Filter=styled.div`
margin:0 20px 0 20px;
`;

const FilterText=styled.span`

`;

const Select=styled.select`
    margin: 5px;
`;
const Option=styled.option`

`;

export default function ProductList() {
  return (
      <Container>
        <Navbar/>
        <Announcement/>
        <Title>Electronics</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option>
                    Newest
                </Option>
                <Option>Price: Low to High</Option>
                <Option>Price: High to Low</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
      </Container>
  )
}
