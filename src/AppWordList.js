import './App.css'
import React, {Component} from 'react'
import words from './DummyData'
import Word from './Word'

class AppWordList extends Component{
  state = {
    words: words
  }
  handleRemove = (id, e) => {
    const word = e.target.previousSibling.innerText
    console.log(word)
    console.log(id)
    alert(`You wanna delete word - ${word}?`)

    const words = this.state.words.filter((w, index) => index !== id)
    this.setState({words})
  }
  render(){
    const {words} = this.state

    return(
      <div>
        <h1 style={{textAlign:'center'}}>Word List</h1>
        {words.map((w, id) => {
          return(
            <Word key={id} w={w} handleRemove={(e)=>this.handleRemove(id, e)}></Word>
          )
        })}
      </div>
    )
  }
}
export default AppWordList;