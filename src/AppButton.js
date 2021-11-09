import React, {Component}from 'react';
import './App.css';
import Button from './Button';

class App extends Component{
  handleClick = () => {
    alert('clicked button')
  }
  render(){
    return (
      <div className="App">
        <Button size="large" color="blue" width="fullWidth">Add Todo</Button>
        <Button size="medium" handleClick={this.handleClick}>
         <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
          Add Todo
        </Button>
        <Button size="small" color="grey" handleClick={this.handleClick} disabled={true}>Add Todo</Button>
      </div>
    );
  }
}
export default AppButton;
