import React, { Component } from 'react';
import '../ComponentStyling/Table.css'
import Dot from './Dot'
import HabitButton from './HabitButton';


class Table extends Component {
    
    state = {
        dotColors: [
            "", "", "", "", "", "", "", "", "", 
            "", "", "", "", "", "", "", "", "", 
            "", "", "", "", "", "", "", "", "", 
            "", "", "", "", "", "", "", "", "", 
            "", "", "", "", "", "", "", "", ""
        ]
    }

    showDot = (index) => {
        
        let toggleDot = this.state.dotColors

        if (toggleDot[index] === "") {toggleDot[index] = "lightgreen"} 
        else if (toggleDot[index] === "lightgreen") {toggleDot[index] = "royalblue"}
        else if (toggleDot[index] === "royalblue") {toggleDot[index] = "red"}
        else if (toggleDot[index] === "red") {toggleDot[index] = ""}

        this.setState({
            dotColor: toggleDot
        })
    }

    render() { 

        //map the colors array in the state to produce each cell in the table (each td)
        let tableCell = this.state.dotColors.map((cell, index) => {
                    return <td onClick={() => this.showDot(index)}><Dot color={cell}></Dot></td>
                })

        return ( 
            <div> 
            <h1></h1>
            <table>
                <tr><th></th><th><HabitButton/></th><th><HabitButton/></th><th><HabitButton/></th></tr>
                <tr> <h3>1</h3> {tableCell[0]} {tableCell[1]} {tableCell[2]}</tr>
                <tr> <h3>2</h3> {tableCell[3]} {tableCell[4]} {tableCell[5]}</tr>
                <tr> <h3>3</h3> {tableCell[6]} {tableCell[7]} {tableCell[8]}</tr>
                <tr> <h3>4</h3> {tableCell[9]} {tableCell[10]}{tableCell[11]}</tr>
                <tr> <h3>5</h3> {tableCell[12]}{tableCell[13]}{tableCell[14]}</tr>
                <tr> <h3>6</h3> {tableCell[15]}{tableCell[16]}{tableCell[17]}</tr>
                <tr> <h3>7</h3> {tableCell[18]}{tableCell[19]}{tableCell[20]}</tr>
                <tr> <h3>8</h3> {tableCell[21]}{tableCell[22]}{tableCell[23]}</tr>
                <tr> <h3>9</h3> {tableCell[24]}{tableCell[25]}{tableCell[26]}</tr>
                <tr> <h3>10</h3>{tableCell[27]}{tableCell[28]}{tableCell[29]}</tr>
                <tr> <h3>11</h3>{tableCell[30]}{tableCell[31]}{tableCell[32]}</tr>
                <tr> <h3>12</h3>{tableCell[33]}{tableCell[34]}{tableCell[35]}</tr>
                <tr> <h3>13</h3>{tableCell[36]}{tableCell[37]}{tableCell[38]}</tr>
                <tr> <h3>14</h3>{tableCell[39]}{tableCell[40]}{tableCell[41]}</tr>
                <tr> <h3>15</h3>{tableCell[42]}{tableCell[43]}{tableCell[44]}</tr>
            </table>
            </div>
         )
    }
}
 
export default Table;