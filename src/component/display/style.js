import React from 'react'
import { styled } from 'styled-components'

export const Wrapper = styled.section`
// background-color:beige;
background-image: linear-gradient(to bottom right,blanchedalmond ,chocolate);
// background-image: linear-gradient(to bottom right, rgba(200,200,200,0), rgba(0,255,200,5));
text-align:center;
padding:10px 10px;

.run{
    background-color:rosybrown;
    height:250px;
    width:400px;
    padding:70px 20px;
    margin-left:530px;
    margin-top:100px;
    border-radius: 50px;
    box-shadow: 5px 5px gray;
}

.run input[type='button']{
    border: 2px ;
    background-color:lemonchiffon;
    color:peru;
    width:120px;
    margin-right:5px;
    margin-top:10px;
    padding:15px 10px;
    justify-content:space-between;
    border-radius: 20px;
    box-shadow: 3px 3px gray;
   
    // transition-timing-function: ease; 
    // transition: width 2s, height 4s;
}
// .run input[type='button']:hover{
//     width:3px;
//     height:1px;
// }
`
 

export default Wrapper
