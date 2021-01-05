import React, { Component } from 'react';
import styled from 'styled-components'

const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: red;
  margin: auto;
`

class Dot extends Component {
    
    render() { 
        return (  
            <Circle></Circle>
        );
    }
}
 
export default Dot;