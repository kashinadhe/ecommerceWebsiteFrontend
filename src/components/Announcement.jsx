import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container=styled.div`
font-size: 30px;
background-color: teal;
color: white;
${mobile({width: "100%"})}
`;
export default function Announcement() {
  return (
    <Container>Super offer! Upto 5% discount</Container>
  )
}
