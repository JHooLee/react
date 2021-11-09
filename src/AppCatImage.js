import React, {Component} from 'react';
import './App.css';
import animals from './DummyDataCat';
// import logo from './logo.svg';

class App extends Component{
  state = {
    count: 0
  }
  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  }
  //초기에 웹화면이 랜더링되었을 때 타이머를 설정함
  componentDidMount(){
    this.countID = setInterval(this.increaseCount, 1000)
  }
  //사용자가 웹화면을 벗어나면 타이머를 해제함
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  render(){
    const {count} = this.state
    const animal = animals[count%animals.length]
    return(
      <div>
        {/* <h1>Increase automatically</h1>
        <h2>{count}</h2> */}
        <h1>Image Gallay</h1>
        <img src={animal.src} alt={animal.title}></img>
      </div>
    )

  }
}


export default App;
