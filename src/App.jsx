import React, { Component } from 'react';
import './App.css';
import Circles from './component/Circles/Circles';
import CircleSelector from './component/CircleSelector/CircleSelector'

class App extends Component {

  state = {
    text: ['','CIRCLE 1 SELECTED','SELECT CIRCLE 2','SELECT CIRCLE 3','SELECT CIRCLE 4' ],
    btn: ['', true, false, false, false],
    circle: ['', true, false, false, false],
    nums: [1,2,3,4]
  }

  handleClickBtn = (num) => {
    let text = ['','SELECT CIRCLE 1','SELECT CIRCLE 2','SELECT CIRCLE 3','SELECT CIRCLE 4' ]
    text[num] = `CIRCLE ${num} SELECTED`
    let btn = ['', false, false, false, false]
    btn[num] = true
    let circle = ['', false, false, false, false]
    circle[num] = true
    this.setState({text: text, btn: btn, circle: circle})
  }

  


  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector handleClickBtn={this.handleClickBtn} text={this.state.text} btn={this.state.btn} nums={this.state.nums}/>
          <Circles circle={this.state.circle} nums={this.state.nums}/>
        </main>
      </div>
    );
  }
}

export default App;