import './App.css';
import React, {Component} from 'react';
import Button from './Button';

class AppInput extends Component{
  state = {
    id: '',
    password: ''
  }
  handleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
    this.setState({[name]: value})//주석처리하면 사용자 입력이 되지 않음
  }
  login = (e) => {
    e.preventDefault()//새로고침 방지
    console.log('login')
  }

  render(){
    const {id, password} = this.state
    return(
      <div className="App">
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
      </div>
    )
  }
}
export default AppInput;