import React from "react"
import styled from "styled-components"
import {mobile} from "../responsive.js"

const Container= styled.div `
width: 100vw;
height: 100vh;

background-image:  linear-gradient(
    rgba(255,255,255,0.1) , 
    rgba(255,255,255,0.1) 
    ), url("https://images.unsplash.com/photo-1556834047-1c1b85b13e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`
const Wrapper= styled.div `
padding: 10px;
width: 25%;
background-color: white;
 display:flex; 
 flex-direction: column;
align-items: center;
${mobile({width: "55%"})};

`
const Title= styled.h1 `
margin-top: 10px;
font-size: 24px;
font-weight: 300;
`

const Form= styled.form `
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

`
const Input= styled.input `
flex:1;
min-width:70%;
margin: 10px 0px;
padding: 10px;

`
const Button= styled.button `
width: 100%;
border: none;
padding: 10px;
background-color: brown;
color: white;
cursor:pointer;
margin-bottom: 10px;
`

const Link= styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor:pointer;


`

export default function Login(){
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                  
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    
                </Form>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
                <Link>Create Account</Link>
            </Wrapper>
        </Container>
    )
}