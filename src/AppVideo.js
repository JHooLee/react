import './AppVideo.css'
import React, {Component} from 'react'
import videos from './VideoData'
import Button from './Button'

class AppVideo extends Component{
  state = {
    index: 0
  }

  decreaseIndex = () => {
    const nextIndex = this.state.index - 1
    this.setState({index: (nextIndex < 0)? videos.length-1:nextIndex})
  }
  increaseIndex = () => {
    const nextIndex = this.state.index + 1
    this.setState({index: (nextIndex > videos.length - 1)? 0:nextIndex})
  }

  render(){
    const {index} = this.state
    const {increaseIndex, decreaseIndex} = this
    const path = videos[index].src
    const title = videos[index].title
    return(
      <div className="AppVideo">
        <div className="video-container">
          <h1>{title}</h1>
          <iframe className="videoY" width="560" height="315" src={path} alt={title}/>
        </div>
        <div className="v-control-btns">
          <Button handleClick={decreaseIndex}>Prev</Button>
          <Button handleClick={increaseIndex}>Next</Button>
        </div>
      </div>
    )
  }
}
export default AppVideo;