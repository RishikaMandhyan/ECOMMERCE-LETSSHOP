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
padding: 20px;
width: 50%;
background-color: white;
 display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
${mobile({width: "55%", padding: "10px"})};

`
const Title= styled.h1 `
font-size: 24px;
font-weight: 300;
`

const Form= styled.form `
display: flex;
flex-direction: column;


`
const Input= styled.input `
flex:1;
min-width:70%;
margin: 10px;
padding: 10px;
${mobile({margin: "5px"})};
`
const Agreement= styled.span  `
font-size: 12px;
margin: 20px 0px;
`
const Button= styled.button `
width: 100%;
border: none;
padding: 10px;
background-color: brown;
color: white;
cursor:pointer;
`


export default function Register(){
    return (
        <Container>
            <Wrapper>
                <Title>Create your Account</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Input placeholder="Phone number"/>
                    <Input placeholder="Email-ID"/>
                    <Agreement>
                    By creating an account, I give my consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Agreement>
                    <Button>Create my Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
} 