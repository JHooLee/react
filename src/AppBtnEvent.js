import './App.css'
import React, {Component} from 'react'

class AppBtnEvent extends Component{
  state = {
    toggle: true
  }
  toggleScreenMode = () => {
    this.setState({toggle: !this.state.toggle})
  }
  render(){
    const{toggle} = this.state
    return(
      <div className={`normal ${toggle? "":"dark"}`}>
        <h1>Change screen mode</h1>
        <button type="button" onClick={this.toggleScreenMode}>
          {toggle? "DARK":"NORMAL"}
        </button>
      </div>
    )
  }
}
export default AppBtnEvent;


// import './App.css';
// import { Component } from 'react';

// class App extends Component{
//   // constructor(props){
//   //   super(props)
//   //   this.showAlert = this.showAlert.bind(this)
//   // }
//   // showAlert(){
//   //   console.log(this)
//   //   alert('this is alert message')
//   // }
//   showAlert = () => {
//     console.log(this)
//     alert('this is alert message')
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1>Show alert</h1>
//         <button type="button" onClick={this.showAlert}>show</button>
//       </div>
//     );
//   }
// }

// export default App;