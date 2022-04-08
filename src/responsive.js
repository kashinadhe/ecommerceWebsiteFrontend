import { css } from "styled-components"

export const mobile=(prop)=>{
    return css`
        @media only screen and (max-width: 380px){
            ${prop};
        }
    `;
    
}