import React from 'react'
import styled from 'styled-components'                    //to be able to use the styled components
import {Search, ShoppingCartOutlined}from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {mobile} from "../responsive.js"


//using styled components in react for which we had to install from npm , this way we wouldnt have to use so many different classnames
const Container = styled.div`           

height: 60px;

${mobile({height: "50px"})};

`;

const Wrapper = styled.div`
 padding : 10px 20px;                                   //so tht all of the children of wrapper come in 1 line
 display: flex;                 
 justfy-content: space-between;
 align-items: center;
 ${mobile({padding: "10px 0px"})};
`;

const Left = styled.div`
flex:1;           //to decide spacing of the children component of wrapper
display: flex ;
align-items: center;         
`;

const Language= styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})};

`;

const SearchContainer= styled.div`
border: 1px solid black;
display: flex ;
align-items: center; 
margin-left: 25px;
padding: 5px;
`
const Input= styled.input`
border: none;
${mobile({width: "50px"})};
`

const Center = styled.div`
flex:1;
text-align: center;
`;

const Logo= styled.h1`
font-weight: bold;
${mobile({fontSize: "19px"})};
`
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
${mobile({flex:"2", justifyContent: "center"})};

`;

const MenuItem= styled.div`
font-size:14px;
cursor:pointer;
margin-left:  25px;
${mobile({fontSize: "12px", marginLeft: "10px"})};
`




export default function Navbar(){
    return (
        <Container>
            <Wrapper>
                <Left>
                <Language>English</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color: "gray", fontSize: 18}}/>
                </SearchContainer>
                </Left>
                <Center>
                    <Logo>LETS SHOP.</Logo>
                </Center>
                <Right><MenuItem> REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined/>
                </Badge>
                </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}