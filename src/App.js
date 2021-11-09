import React, {Component}from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component{
  state = {
    menus: [
      {
        siteTitle: 'google',
        siteUrl: 'https://google.com'
      },
      {
        siteTitle: 'naver',
        siteUrl: 'https://naver.com'
      },
      {
        siteTitle: 'dictionary',
        siteUrl: 'https://jhoolee.github.io/dic'
      },
    ]
  }
  render(){
    const {menus} = this.state
    return (
      <>
        <Nav menus={menus}></Nav>
      </>
    );
  }
}
export default App;
