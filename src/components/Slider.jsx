import React from "react"
import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import {sliderItems} from '../data'
import {mobile} from "../responsive"


const Container = styled.div`

height: 100vh;
display:flex;
position: relative;           /*so its children can be placed relative to it*/
overflow: hidden;
${mobile({display: "none"})};
`

const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius: 50%; 
display: flex;            /*so tht the arrow inside comes into its center*/
align-items: center;
justify-content:center;
background-color: #faf1f1 ;
position: absolute;
top:0 ;
bottom: 0;
left: ${function (props) {
        return (
            props.direction === "left" && "10px"
        )
    }};

right: ${function (props) {
        return (
            props.direction === "right" && "10px"
        )
    }};

margin: auto;
cursor: pointer;
opacity: 0.7;
z-index=2;  
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;        //  this one gives sliding animation effect when we slide the slider
transform: translateX(${props=>props.slideIndex* -100}vw);   //this helps us to move the children of the wrapper towards -ve x axis  by slideIndex*100vw length
`
const Slide = styled.div`
display: flex;
width: 100vw;
height: 100vh;
align-items: center;
background-color: #${function (props) {
        return (
            props.bg
        )
    }}
`

const ImgContainer = styled.div`
height: 100%;
flex:1;   
${'' /* display: flex;
justify-content: center; */}
`

const Image = styled.img`
height: 80%;
${'' /* margin-top: 75px; */}

`

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`


const Title = styled.h1`
font-size 70px;
`

const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;

`

const Button = styled.button`
font-size: 20px;
padding: 15px;
background-color: transparent;
cursor: pointer;

`

export default function Slider() {     //function tht will be exported to Home.jsx

   const [slideIndex, setSlideIndex]= React.useState(0);     //state for changing the slides in the slider

    const handleClick = function (direction) {
       
            if(direction==="left"){
             setSlideIndex(function(oldslideIndex){
                 return (oldslideIndex > 0 ? oldslideIndex-1 : 2)} )       //2 is actually index of last slide
             
                }        
            
            else{
                setSlideIndex(function(oldslideIndex){
                    return (oldslideIndex < 2 ? oldslideIndex+1 : 0)} )      //0 is index of fast slide
            }
        
    };


    return (     //this is how we can use props inside styled coponents tooo
        <Container>
        
            <Wrapper slideIndex= {slideIndex}>
                {
                    sliderItems.map(function (item) {              //that is for every element /object of sliderItems array we are gonna do this
                        return (
                            <Slide bg={item.bg}>
                                <ImgContainer>
                                    <Image src={item.img} />
                                </ImgContainer>
                                <InfoContainer> 
                                    <Title>{item.title}</Title>
                                    <Description>{item.desc}</Description>
                                    <Button>SHOP NOW</Button>
                                </InfoContainer>
                            </Slide>
                        )  
                    })
                }


            </Wrapper>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>

           
          
        </Container>
    )
}