import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
background-color: #ffc7c7;
background: url("https://assets-global.website-files.com/5e39e095596498a8b9624af1/5f6e93d250a6d04f4eae9f02_Backgrounds-WFU-thumbnail-(size).jpg");
background-size: cover;
`;

const Wrapper=styled.div`
width: 300px;
height: 655px;
padding-top: 100px;
margin: auto;
`;
const Form=styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title=styled.h1``;
const Input=styled.input`
border-radius: 5px;
border: 1px solid grey;
height: 35px;
margin-top: 10px;
margin-bottom: 10px;
&:focus{
    outline: none;
}
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
export default function Register() {
  return (
      <Container>
          <Wrapper>
          <Form>
              <Title>REGISTER</Title>
              <Input placeholder='First Name' required></Input>
              <Input placeholder='Last Name' required></Input>
              <Input type="email" placeholder='xyz@gmail.com' required></Input>
              <Input placeholder='Enter Password' required></Input>
              <Input placeholder='Confirm Password' required></Input>
              <Button type='submit'>CREATE</Button>
          </Form>
          </Wrapper>
      </Container>
  )
}
