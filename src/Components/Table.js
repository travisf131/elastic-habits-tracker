import React, { Component } from 'react';
import '../ComponentStyling/Table.css'
import Dot from './Dot'
import HabitButton from './HabitButton';


class Table extends Component {
    
    state = {
        showDots: [
            {id: "1a",  color: ""}, {id: "1b",  color: ""}, {id: "1c",  color: ""}, 
            {id: "2a",  color: ""}, {id: "2b",  color: ""}, {id: "2c",  color: ""}, 
            {id: "3a",  color: ""}, {id: "3b",  color: ""}, {id: "3c",  color: ""}, 
            {id: "4a",  color: ""}, {id: "4b",  color: ""}, {id: "4c",  color: ""}, 
            {id: "5a",  color: ""}, {id: "5b",  color: ""}, {id: "5c",  color: ""}, 
            {id: "6a",  color: ""}, {id: "6b",  color: ""}, {id: "6c",  color: ""}, 
            {id: "7a",  color: ""}, {id: "7b",  color: ""}, {id: "7c",  color: ""}, 
            {id: "8a",  color: ""}, {id: "8b",  color: ""}, {id: "8c",  color: ""}, 
            {id: "9a",  color: ""}, {id: "9b",  color: ""}, {id: "9c",  color: ""}, 
            {id: "10a",  color: ""}, {id: "10b",  color: ""}, {id: "10c",  color: ""}, 
            {id: "11a",  color: ""}, {id: "11b",  color: ""}, {id: "11c",  color: ""}, 
            {id: "12a",  color: ""}, {id: "12b",  color: ""}, {id: "12c",  color: ""}, 
            {id: "13a",  color: ""}, {id: "13b",  color: ""}, {id: "13c",  color: ""}, 
            {id: "14a",  color: ""}, {id: "14b",  color: ""}, {id: "14c",  color: ""}, 
            {id: "15a",  color: ""}, {id: "15b",  color: ""}, {id: "15c",  color: ""}
        ]
    }

    showDot = (index) => {
        
        let toggleDot = this.state.showDots

        if (toggleDot[index-1].color === "") {toggleDot[index-1].color = "lightgreen"} 
        else if (toggleDot[index-1].color === "lightgreen") {toggleDot[index-1].color = "royalblue"}
        else if (toggleDot[index-1].color === "royalblue") {toggleDot[index-1].color = "red"}
        else if (toggleDot[index-1].color === "red") {toggleDot[index-1].color = ""}

        this.setState({
            showDots: toggleDot
        })

    }

    render() { 


        return ( 
            <div> 
            <h1></h1>
            <table>
                <tr>
                    <th></th>
                    <th><HabitButton></HabitButton></th>
                    <th><HabitButton></HabitButton></th>
                    <th><HabitButton></HabitButton></th>
                </tr>
                <tr>
                    <h3>1</h3>
                    <td onClick={() => this.showDot(1)}><Dot color={this.state.showDots[0].color}></Dot></td>
                    <td onClick={() => this.showDot(2)}><Dot color={this.state.showDots[1].color}></Dot></td>
                    <td onClick={() => this.showDot(3)}><Dot color={this.state.showDots[2].color}></Dot></td>
                </tr>
                <tr>
                    <h3>2</h3>
                    <td onClick={() => this.showDot(4)}><Dot color={this.state.showDots[3].color}></Dot></td>
                    <td onClick={() => this.showDot(5)}><Dot color={this.state.showDots[4].color}></Dot></td>
                    <td onClick={() => this.showDot(6)}><Dot color={this.state.showDots[5].color}></Dot></td>
                </tr>
                <tr>
                    <h3>3</h3>
                    <td onClick={() => this.showDot(7)}><Dot color={this.state.showDots[6].color}></Dot></td>
                    <td onClick={() => this.showDot(8)}><Dot color={this.state.showDots[7].color}></Dot></td>
                    <td onClick={() => this.showDot(9)}><Dot color={this.state.showDots[8].color}></Dot></td>
                </tr>
                <tr>
                    <h3>4</h3>
                    <td onClick={() => this.showDot(10)}><Dot color={this.state.showDots[9].color}></Dot></td>
                    <td onClick={() => this.showDot(11)}><Dot color={this.state.showDots[10].color}></Dot></td>
                    <td onClick={() => this.showDot(12)}><Dot color={this.state.showDots[11].color}></Dot></td>
                </tr>
                <tr>
                    <h3>5</h3>
                    <td onClick={() => this.showDot(13)}><Dot color={this.state.showDots[12].color}></Dot></td>
                    <td onClick={() => this.showDot(14)}><Dot color={this.state.showDots[13].color}></Dot></td>
                    <td onClick={() => this.showDot(15)}><Dot color={this.state.showDots[14].color}></Dot></td>
                </tr>
                <tr>
                    <h3>6</h3>
                    <td onClick={() => this.showDot(16)}><Dot color={this.state.showDots[15].color}></Dot></td>
                    <td onClick={() => this.showDot(17)}><Dot color={this.state.showDots[16].color}></Dot></td>
                    <td onClick={() => this.showDot(18)}><Dot color={this.state.showDots[17].color}></Dot></td>
                </tr>
                <tr>
                    <h3>7</h3>
                    <td onClick={() => this.showDot(19)}><Dot color={this.state.showDots[18].color}></Dot></td>
                    <td onClick={() => this.showDot(20)}><Dot color={this.state.showDots[19].color}></Dot></td>
                    <td onClick={() => this.showDot(21)}><Dot color={this.state.showDots[20].color}></Dot></td>
                </tr>
                <tr>
                    <h3>8</h3>
                    <td onClick={() => this.showDot(22)}><Dot color={this.state.showDots[21].color}></Dot></td>
                    <td onClick={() => this.showDot(23)}><Dot color={this.state.showDots[22].color}></Dot></td>
                    <td onClick={() => this.showDot(24)}><Dot color={this.state.showDots[23].color}></Dot></td>
                </tr>
                <tr>
                    <h3>9</h3>
                    <td onClick={() => this.showDot(25)}><Dot color={this.state.showDots[24].color}></Dot></td>
                    <td onClick={() => this.showDot(26)}><Dot color={this.state.showDots[25].color}></Dot></td>
                    <td onClick={() => this.showDot(27)}><Dot color={this.state.showDots[26].color}></Dot></td>
                </tr>
                <tr>
                    <h3>10</h3>
                    <td onClick={() => this.showDot(28)}><Dot color={this.state.showDots[27].color}></Dot></td>
                    <td onClick={() => this.showDot(29)}><Dot color={this.state.showDots[28].color}></Dot></td>
                    <td onClick={() => this.showDot(30)}><Dot color={this.state.showDots[29].color}></Dot></td>
                </tr>
                <tr>
                    <h3>11</h3>
                    <td onClick={() => this.showDot(31)}><Dot color={this.state.showDots[30].color}></Dot></td>
                    <td onClick={() => this.showDot(32)}><Dot color={this.state.showDots[31].color}></Dot></td>
                    <td onClick={() => this.showDot(33)}><Dot color={this.state.showDots[32].color}></Dot></td>
                </tr>
                <tr>
                    <h3>12</h3>
                    <td onClick={() => this.showDot(34)}><Dot color={this.state.showDots[33].color}></Dot></td>
                    <td onClick={() => this.showDot(35)}><Dot color={this.state.showDots[34].color}></Dot></td>
                    <td onClick={() => this.showDot(36)}><Dot color={this.state.showDots[35].color}></Dot></td>
                </tr>
                <tr>
                    <h3>13</h3>
                    <td onClick={() => this.showDot(37)}><Dot color={this.state.showDots[36].color}></Dot></td>
                    <td onClick={() => this.showDot(38)}><Dot color={this.state.showDots[37].color}></Dot></td>
                    <td onClick={() => this.showDot(39)}><Dot color={this.state.showDots[38].color}></Dot></td>
                </tr>
                <tr>
                    <h3>14</h3>
                    <td onClick={() => this.showDot(40)}><Dot color={this.state.showDots[39].color}></Dot></td>
                    <td onClick={() => this.showDot(41)}><Dot color={this.state.showDots[40].color}></Dot></td>
                    <td onClick={() => this.showDot(42)}><Dot color={this.state.showDots[41].color}></Dot></td>
                </tr>
                <tr>
                    <h3>15</h3>
                    <td onClick={() => this.showDot(43)}><Dot color={this.state.showDots[42].color}></Dot></td>
                    <td onClick={() => this.showDot(44)}><Dot color={this.state.showDots[43].color}></Dot></td>
                    <td onClick={() => this.showDot(45)}><Dot color={this.state.showDots[44].color}></Dot></td>
                </tr>
            </table>
            </div>
         )
    }
}
 
export default Table;