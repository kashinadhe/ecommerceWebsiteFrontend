import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
background-color: #ffc7c7;
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
`;
const Title=styled.h1``;
const Input=styled.input`
border-radius: 5px;
border: 1px solid grey;
margin-top: 10px;
margin-bottom: 10px;
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
const Link=styled.a``;

export default function SignIn() {
  return (
      <Container>
          <Wrapper>
          <Form>
              <Title>SIGN IN</Title>
              <Input type="email" placeholder='xyz@gmail.com'></Input>
              <Input placeholder='Enter Password'></Input>
              
              <Link href='https://youtu.be/dQw4w9WgXcQ'>Forgot password?</Link>
          <Link>Create Account</Link>
          <Button type='submit'>SIGN IN</Button>
          </Form>
          
          </Wrapper>
      </Container>
  )
}
