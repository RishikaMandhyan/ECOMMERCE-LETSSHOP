import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import { Remove, Add } from "@material-ui/icons"
import {mobile} from "../responsive.js"

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})};

`
const Title = styled.div`
font-weight:400;
font-size: 30px;
text-align: center;
`
const Top = styled.div`
padding: 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: transparent;
`
const TopTexts = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
${mobile({display: "none"})};

`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column", marginTop: "10px"})};

`
const Info = styled.div`
flex:3;
`

const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
padding: 20px;
height: 50vh;
${mobile({ marginTop: "10px"})};

`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})};

`
const ProductDetail = styled.div`
flex: 2;
display:flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 15px;
display: flex;
flex-direction: column;
${'' /* justify-content: space-around; */}
`

const ProductName = styled.span`
margin-bottom: 10px;

`
const ProductId = styled.span`
margin-bottom: 10px;
`
const ProductColor = styled.div`
margin-bottom: 10px;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${function (props) {
        return (props.color)
    }}

`
const ProductSize = styled.span`

`

const PriceDetail = styled.div`
padding: 15px;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
${'' /* justify-content: center; */}

`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
border: 1px solid black;
border-radius: 10px;
margin-bottom: 20px;

`

const Button= styled.button `
background-color: white;
border: none;
border-radius: 10px;
cursor:pointer;

&: hover {
    background-color: #f2e8e8;
}

`

const Amount = styled.span`
width: 30px;
height: 30px;
${'' /* border-radius: 10px;
border: 1px solid black; */}
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const ProductPrice= styled.div `
font-size: 25px;
font-weight: 400;
`
const Hr=styled.hr `
background-color: #eee;
border: none;
height: 1px;
`
const SummaryTitle= styled.h1 `
font-weight: 300;
text-align: center;

`
const SummaryItem= styled.div `
margin: 20px 0px;
display: flex;
justify-content: space-between;
font-weight: ${function(props){
    return (props.type==="total" && "500")
}};
font-size: ${function(props){
    return (props.type==="total" && "24px")
}}
`
const SummaryItemText= styled.span `
`
const SummaryItemPrice= styled.span `
`

const SummaryButton= styled.button `
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;

`


export default function Cart() 
{

    const [amount, setamount] = React.useState(0)         //using state for updating the amount or quantity we wanna buy
              

    function handleClick(direction){
       
            if(direction==="Remove")
            {
                    setamount(function(oldvalue){
                        return (oldvalue===0 ? 0: oldvalue-1)
                    })
            }
            else
            {

                setamount(function(oldvalue){
                    return (oldvalue+1)

                })

            }
        
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Cart</TopText>
                        <TopText>Wishlist</TopText>
                    </TopTexts>
                    <TopButton>Checkout</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="../images/shirt.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> Cotton T-Shirt</ProductName>
                                    <ProductId><b>Product ID:</b> 633123</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Product Size:</b>L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Button onClick={() => handleClick("Remove")}>
                                        <Remove />
                                    </Button>
                                    <Amount>{amount}</Amount>
                                    <Button onClick={() => handleClick("Add")}>
                                        <Add />
                                    </Button>
                                </ProductAmountContainer>
                                <ProductPrice>Rs 499/-</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="../images/autumn.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> Cotton T-Shirt</ProductName>
                                    <ProductId><b>Product ID:</b> 633123</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Product Size:</b>L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Button onClick={() => handleClick("Remove")}>
                                        <Remove />
                                    </Button>
                                    <Amount>{amount}</Amount>
                                    <Button onClick={() => handleClick("Add")}>
                                        <Add />
                                    </Button>
                                </ProductAmountContainer>
                                <ProductPrice>Rs 499/-</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>Rs 499</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                           <SummaryItemText>Shipping</SummaryItemText>
                           <SummaryItemPrice>Rs 99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                           <SummaryItemText>Discounts</SummaryItemText>
                           <SummaryItemPrice>-Rs 99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                           <SummaryItemText >Total</SummaryItemText>
                           <SummaryItemPrice>Rs 499</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Checkout</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter/>
            <Footer />

        </Container>
    )
}