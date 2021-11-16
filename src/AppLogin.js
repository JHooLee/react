import './App.css';
import React, {Component} from 'react';
import Button from './Button';
import LoginData from './LoginData';
import Modal from './Modal';

class AppLogin extends Component{
  state = {
    id: '',
    password: '',
    isLogin: false,
    open: false
  }
  handleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
    this.setState({[name]: value})//주석처리하면 사용자 입력이 되지 않음
  }
  openModal = () => {
    this.setState({open: true})
  }
  closeModal = () => {
    this.setState({open: false})
  }
  login = (e) => {
    e.preventDefault()//새로고침 방지
    // console.log('login')
    console.log(this.state)
    const {id, password} = this.state
    if(id === LoginData.USER_ID && password === LoginData.USER_PASSWORD){
      this.setState({isLogin:true})
      this.closeModal()
    }
    else{
      this.openModal()
    }
  }
  // componentDidMount(){
  //   //서버에서 사용자 정보 가져오기
  // }
  render(){
    const {id, password, isLogin, open} = this.state
    const {openModal, closeModal} = this
    const loginForm = (
        <>
            <form>
                <label>
                    ID<input type="text" placeholder="TYPE YOUR ID" name="id" value={id} onChange={this.handleChange}></input>
                </label><br/><br/>
                <label>
                    PASSWORD<input type="password" placeholder="TYPE YOUR PASSWORD" name="password" value={password} onChange={this.handleChange}></input>
                </label>
                <div className="login-btn">
                    <Button handleClick={this.login}>Login</Button>
                </div>
            </form>
            <Modal open={open}>
                <h1>Failed to login</h1>
                <div className="footer">
                    <Button handleClick={closeModal}>Close</Button>
                </div>
            </Modal>
        </>
    )
    const homepage = (
      <h1>Homepage</h1>
    )
    return(
      <div className="App">
        {isLogin? homepage:loginForm}   
            
      </div>
    )
  }
}
export default AppLogin;