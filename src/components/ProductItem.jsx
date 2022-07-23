import React from "react"
import styled from "styled-components"
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons"



const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top:0;
left:0;
display: flex;
align-items: center;
justify-content: center;
z-index: 3;
background-color: rgba(0,0,0,0.2);
opacity:0;    //kyuki it should be visible only when we hover over the comtainer
transition: all 0.5s ease;
cursor:pointer;
`

const Container = styled.div`
   flex:1;
   margin: 5px;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color:  #f5fbfd;
   position: relative;

&: hover ${Info} {
    opacity:1;
}

`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
 position: absolute; 

  `


const Image = styled.img`
height: 75%;
z-index: 2;
 `





const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease ;
&: hover{
    background:color: #e9f5f5;
    transform: scale(1.1);
}
 `

export default function ProductItem(props) {
    return (
        <Container>
            <Circle />
            <Image src={props.item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}