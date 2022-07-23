import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Remove, Add } from "@material-ui/icons"
import {mobile} from "../responsive.js"

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;

${mobile({padding: "10px", flexDirection:"column"})};

`
const ImageContainer = styled.div`
flex:1;
`
const Image = styled.img`
width: 100%;
height: 70vh; 
 object-fit: cover;
 ${mobile({height: "50vh"})};
 
`
const InfoContainer = styled.div`
flex:1.7;
padding: 0px 50px;
${mobile({padding: "10px"})};

`
const Title = styled.h1`
font-weight:300;
`
const Desc = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 30px;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width: "100%"})};
`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;

`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0px 5px;
cursor: pointer;

background-color:  ${function (props) {                  //u can later add functionality where when we choose a particular colour the image also changes accordingly
        return (props.color)
    }};

`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
width: 50%;
display: flex;
aligh-items:center;
justify-content: space-between;
${mobile({width: "100%"})};

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
border: 1px solid black;
border-radius: 10px;

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
const CartButton = styled.button`

padding: 10px;
border-radius:10px;
border: none;
background-color: teal;
color: white;
font-weight: 500;
cursor:pointer;

&: hover{
    background-color: #025148;
}
`


export default function Product() {

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
                <ImageContainer>
                    <Image src='../images/shirt.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Cotton T-shirt</Title>
                    <Desc>Comfy cotton T-shirt at the best price in the market. Available in varying colours and sizes.</Desc>
                    <Price>Rs 499/-</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="gray" />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Button onClick={()=> handleClick("Remove")}>
                                <Remove />
                            </Button>

                            <Amount>{amount}</Amount>
                            <Button  onClick={()=> handleClick("Add")}>
                                <Add />
                            </Button>

                        </AmountContainer>
                        <CartButton>Add to Cart</CartButton>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}