import React from 'react'
 import Navbar from '../components/Navbar'
// import styled from 'styled-components'                    //to be able to use the styled components
// import {Search, ShoppingCartOutlined}from '@material-ui/icons'
// import {Badge} from '@material-ui/core'
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"


export default function Home() {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
