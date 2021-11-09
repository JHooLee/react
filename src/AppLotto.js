import React, {Component} from 'react';
import './App.css';
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
  pickRandomNumber = (min, max) => {
    const num = []
    for(let i=min; i<=max; i++){
      num.push(i)
    }  
    const shuffleArray = array => {
      for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    return shuffleArray(num)
  }

  render(){
    const {count} = this.state
    const num = this.pickRandomNumber(1,45)
    console.log(num)

    return(
      <div class='App'>
        <h1>{num[0]}, {num[1]}, {num[2]}, {num[3]}, {num[4]}, {num[5]}</h1>
        <h1>{count}</h1>
      </div>
    )

  }
}


export default App;


// import React, {Component} from 'react';
// import './App.css';
// // import logo from './logo.svg';

// class App extends Component{
//   state = {
//     count: 0
//     numbers: ''
//   }
//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   //초기에 웹화면이 랜더링되었을 때 타이머를 설정함
//   componentDidMount(){
//     this.countID = setInterval(this.increaseCount, 1000)
//   }
//   //사용자가 웹화면을 벗어나면 타이머를 해제함
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   pickRandomNumber = (min, max) => { 
//     return Math.floor( Math.random() * (max-min+1) ) + min
//   }
//   showRandomNumber = () =>{
//     const numbers = []
//     let cnt = 0;
//     while(numbers.length < 6){
//     const picked = this.pickRandomNumber(1, 45)
//     const isDuplicated = this.checkDuplication(numbers, picked) 
//     if(isDuplicated){
//         console.log('duplicated', isDuplicated)
//         numbers.push(this.pickRandomNumber(1, 45))
//     }else{
//         numbers.push(picked)
//     }
//     cnt++
//     }
//   }
//   checkDuplication = (numbers, picked) => {
//       return numbers.find(num => num === picked)
//   }
//   render(){
//     const {

//     return(
//       <div class='App'>
//         <h1>{num[0]}, {num[1]}, {num[2]}, {num[3]}, {num[4]}, {num[5]}</h1>
//         <h1>{count}</h1>
//       </div>
//     )

//   }
// }
// export default App;
