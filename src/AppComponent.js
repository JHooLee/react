import './App.css';
import { Component } from 'react';
import CustomInput from './CustomInput';

class AppComponent extends Component{
  render(){
    return(
      <div className="App">
        <CustomInput></CustomInput>
      </div>
    )
  }
}

export default AppComponent;