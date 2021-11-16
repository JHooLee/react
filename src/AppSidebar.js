import './App2.css';
import React, {Component} from 'react';
import Button from './Button'
import Sidebar from './Sidebar';

class AppSidebar extends Component{
  state = {
    toggle: false,
    menus: [
      {icon: '♜', title: 'HOME'},
      {icon: '♞', title: 'ABOUT'},
      {icon: '☻', title: 'SETTING'},
      {icon: '♜', title: 'HOME'},
      {icon: '♞', title: 'ABOUT'},
      {icon: '☻', title: 'SETTING'},
    ]
  }

  toggleMenu = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render(){
    const{toggle, menus} = this.state

    return(
      <div className="App">
        <Button handleClick={this.toggleMenu}>Open sidebar</Button>
        <Sidebar open={toggle}>{menus.map((menu, id) => {
          return <div className="menu" key={id}>{menu.icon} {menu.title}</div>
        })}</Sidebar>
      </div>
    )
  }
}

export default AppSidebar;