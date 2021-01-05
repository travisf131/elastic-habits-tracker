import React, { Component } from 'react';
import styled from 'styled-components'

const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: auto;
`

const Dot = (props) => {
    return (  
        <Circle color={props.color}></Circle>
    );
}
 
export default Dot;