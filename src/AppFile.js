import './App.css';
import { Component } from 'react';
import FileInput from './FileInput'

class AppFile extends Component{
  render(){
    return(
      <div className="App">
        <h1>File Upload</h1>
        <FileInput></FileInput>
      </div>
    );
  }
}

export default AppFile;