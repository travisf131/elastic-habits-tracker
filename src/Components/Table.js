import React, { Component } from 'react';
import '../ComponentStyling/Table.css'
import Dot from './Dot'


class Table extends Component {
    
    state = {
        showDot: false
    }

    showDot = () => {
        let toggleDot = this.state.showDot
        this.setState({
            showDot: !toggleDot
        })
    }

    

    render() { 

        
        return ( 
            <div> 
            <h1>{indicator}</h1>
            <table>
                <tr>
                    <th></th>
                    <th><button>Exercise</button></th>
                    <th><button>Reading</button></th>
                    <th><button>Coding</button></th>
                </tr>
                <tr>
                    <h3>1</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>2</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>3</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>4</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>5</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>6</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>7</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>8</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>9</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>10</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>11</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>12</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>13</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>14</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
                <tr>
                    <h3>15</h3>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                    <td onClick={this.showDot}></td>
                </tr>
            </table>
            </div>
         );
    }
}
 
export default Table;