import React from "react"
import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline} from "@material-ui/icons"
import {mobile} from "../responsive"


const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})};

`

const Left = styled.div`
flex:1;
diaplay: flex;
flex-direction: column; 
padding: 20px;
`

const Logo= styled.h1 `
`

const Desc= styled.p `
margin: 20px 0px;
`

const SocialContainer= styled.div  `
display: flex;
`

const SocialIcon= styled.div `
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
`

const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})};

`
const Title= styled.h3 `
margin-bottom: 30px;

`
const List= styled.ul `
margin:0;
padding:0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItem= styled.li`
width: 50%;
margin-bottom: 8px;
`
 
const Right = styled.div`
flex:1;
padding: 20px;
`

 
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;


`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LETS SHOP.</Logo>
                <Desc>We are here to offer you the latest trends at the most affordable prices. Enjoy shopping! </Desc>
                <SocialContainer> 
                   <SocialIcon>
                      <Facebook/>
                   </SocialIcon>
                   <SocialIcon>
                      <Instagram/>
                   </SocialIcon>
                   <SocialIcon>
                      <Twitter/>
                   </SocialIcon>
                   <SocialIcon>
                      <Pinterest/>
                   </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Home Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List> 
            </Center>
            <Right>
                <Title>Contact us:</Title>
                <ContactItem> <Room style={{marginRight: "10px"}}/>Sector 45, Hauz Khas, Delhi, India</ContactItem>
                <ContactItem>  <Phone style={{marginRight: "10px"}}/>+91 9369024136</ContactItem>
                <ContactItem>  <MailOutline style={{marginRight: "10px"}}/> contact.letsshop@gmail.com</ContactItem>
            </Right> 
        </Container>
    )
}