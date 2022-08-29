import React, { Component } from 'react';
import './App.css';
import Circles from './component/Circles/Circles';
import CircleSelector from './component/CircleSelector/CircleSelector'

class App extends Component {

  state = {
    text1: 'CIRCLE 1 SELECTED',
    text2: 'SELECT CIRCLE 2',
    text3: 'SELECT CIRCLE 3',
    text4: 'SELECT CIRCLE 4',

    btn1: true,
    btn2: false,
    btn3: false,
    btn4: false, 

    circle1: true,
    circle2: false,
    circle3: false,
    circle4: false,

  }

  handleClickBtn1 = () => {
    this.setState({btn1: !this.state.btn1,btn2: false, btn3: false, btn4: false, text1: 'CIRCLE 1 SELECTED',text2: 'SELECT CIRCLE 2', text3: 'SELECT CIRCLE 3',text4: 'SELECT CIRCLE 4', circle1: !this.state.circle1, circle2: false, circle3: false, circle4: false})
  }
  handleClickBtn2 = () => {
    this.setState({btn2: !this.state.btn2, btn1: false, btn3: false, btn4: false, text1: 'SELECT CIRCLE 1',text2: 'CIRCLE 2 SELECTED', text3: 'SELECT CIRCLE 3',text4: 'SELECT CIRCLE 4', circle2: !this.state.circle2, circle1: false, circle3: false, circle4: false})
  }
  handleClickBtn3 = () => {
    this.setState({btn3: !this.state.btn3, btn1: false, btn2: false, btn4: false, text1: 'SELECT CIRCLE 1',text2: 'SELECT CIRCLE 2', text3: 'CIRCLE 3 SELECTED',text4: 'SELECT CIRCLE 4', circle3: !this.state.circle3, circle1: false, circle2: false, circle4: false})
  }
  handleClickBtn4 = () => {
    this.setState({btn4: !this.state.btn4, btn1: false, btn2: false, btn3: false, text1: 'SELECT CIRCLE 1',text2: 'SELECT CIRCLE 2', text3: 'SELECT CIRCLE 3',text4: 'CIRCLE 4 SELECTED', circle4: !this.state.circle4, circle1: false, circle2: false, circle3: false})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector  handleClickBtn1={this.handleClickBtn1} handleClickBtn2={this.handleClickBtn2} handleClickBtn3={this.handleClickBtn3} handleClickBtn4={this.handleClickBtn4} btn1={this.state.btn1}  btn2={this.state.btn2} btn3={this.state.btn3} btn4={this.state.btn4} text1={this.state.text1} text2={this.state.text2} text3={this.state.text3} text4={this.state.text4}/>
          <Circles circle1={this.state.circle1} circle2={this.state.circle2} circle3={this.state.circle3} circle4={this.state.circle4}/>
        </main>
      </div>
    );
  }
}

export default App;