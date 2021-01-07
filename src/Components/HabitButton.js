import React, { Component } from 'react';
import styled from 'styled-components'
import '../ComponentStyling/Table.css'

const StyledButton = styled.button`
  background-color: 'grey';
  color: black;
  font: inherit;
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom 5px;
  width: 155px;
  height: 50px;
  

  &:hover {
    background-color: white;
    color: black;
  }

`

const StyledDiv = styled.div`
  width: 165.2px;
  height: 77px;
`

class HabitButton extends Component {
    state = { 
        renderHabitInput: false ,
        buttonValue: "+"
    }

    toggleHabitInput = () => {
        let temp = this.state.renderHabitInput
        this.setState({
            renderHabitInput: !temp
        })
    }

    handleInputChange = (e) => {
        if (e.key === 'Enter') {
            let inputText = e.target.value
            this.setState({
                buttonValue: inputText
            })
            this.toggleHabitInput()
        }
    }

    render() { 

        let inputVisible = null
        if (this.state.renderHabitInput === true){
            inputVisible = <input type="text" placeholder="Enter or change habit" onKeyPress={this.handleInputChange}></input>
        }

        let buttonValue = this.state.buttonValue

        return (
            <StyledDiv>
                <StyledButton onClick={this.toggleHabitInput}>{buttonValue}</StyledButton>
                {inputVisible} 
           </StyledDiv>
         );
    }
}
 
export default HabitButton;