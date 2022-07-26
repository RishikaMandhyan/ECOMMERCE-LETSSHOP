import React from "react"
import styled from "styled-components"
import {popularProducts}  from "../data"
import ProductItem from "./ProductItem"


const Container= styled.div `
padding: 20px;
display: flex;
flex-wrap:wrap;
justify-content: space-between;

`
export default function Products(){
    return (
        <Container> 
        {
            popularProducts.map(function(item){
                return (
                    <ProductItem item={item} key= {item.id}/>
                )
            })
        }</Container>
    )
}

