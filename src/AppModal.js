import './App.css';
import Modal from './Modal';
import Button from './Button';
import {Component} from 'react';

class AppModal extends Component{
  state = {
    open: false
  }

  openModal = () => {
    this.setState({open: true})
  }
  closeModal = () => {
    this.setState({open: false})
  }

  render(){
    const {open} = this.state
    const {openModal, closeModal} = this
    return(
      <div className="App">
        <Button handleClick={this.openModal}>Add Todo</Button>
        <Modal open={open}>
          <div className="header">You want to add new todo?</div>
          <div className="body">
            <label>todo name: <input type="text"></input></label><br/>
            <label>todo description: <input type="text"></input></label>
          </div>
          <div className="footer">
            <Button size="small">Add</Button>
            <Button size="small" handelClick={closeModal}>Close</Button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default AppModal;