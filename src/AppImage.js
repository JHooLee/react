import './App2.css'
import React, {Component} from 'react'
import images from './ImageDate'
import Button from './Button'

class AppImage extends Component{
  state = {
    index: 0
  }

  decreaseIndex = () => {
    const nextIndex = this.state.index - 1
    this.setState({index: (nextIndex < 0)? images.length-1:nextIndex})
  }
  increaseIndex = () => {
    const nextIndex = this.state.index + 1
    this.setState({index: (nextIndex > images.length - 1)? 0:nextIndex})
  }

  render(){
    const {index} = this.state
    const {increaseIndex, decreaseIndex} = this
    const path = images[index].src
    const title = images[index].title
    return(
      <div className="App">
        <div className="img-container">
          <img src={path} alt={title}/>
        </div>
        <div className="control-btns">
          <Button handleClick={decreaseIndex}>Prev</Button>
          <Button handleClick={increaseIndex}>Next</Button>
        </div>
      </div>
    )
  }
}
export default AppImage;