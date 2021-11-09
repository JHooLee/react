import React, {Component} from 'react';
import './App.css';
import words from './DummyData';
// import logo from './logo.svg';

class App extends Component{
  state = {
    index: 0
  }
  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }
  setNumber = () => {
    this.setState({index: this.pickRandomNumber(0, words.length-1)})
  }
  //초기에 웹화면이 랜더링되었을 때 타이머를 설정함
  componentDidMount(){
    this.countID = setInterval(this.setNumber, 1000)
  }
  //사용자가 웹화면을 벗어나면 타이머를 해제함
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  pickRandomNumber = (min, max) => {
     return Math.floor( Math.random() * (max-min+1) ) + min 
  }
  render(){
    const {index} = this.state
    const word_picked = words[index]
    const cardStyle = {
      background: 'tan',
      width: '30%',
      margin: 'auto',
      textAlign: 'center',
      color: 'white',
      padding: '10px'
    }
    return(
      <div style={cardStyle}>
        <h1 style={{borderBottom: '1px solid lightgray'}}>Word Card</h1>
        <h2>{word_picked.word}</h2>
        <h2>{word_picked.meaning}</h2>
      </div>
    )

  }
}
export default App;
