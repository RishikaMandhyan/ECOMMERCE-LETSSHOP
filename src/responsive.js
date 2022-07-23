import {css } from "styled-components"

  //for making it responsive for other devices too we can make similar functions like this and add them below this one and change max width accordingly    
export const mobile = (props)=>{

        return css `
        @media only screen and (max-width: 380px){       
            ${props}
        }

         `;
 
};