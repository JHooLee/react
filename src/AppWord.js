import React, {Component} from 'react';
import './App.css';
// import words from 'https://dictionary-search-jhl.herokuapp.com/api/words'
import Word from './Word'
// import words from './kor_dic_db.json'
// import logo from './logo.svg';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      words: []
    }
  }
  componentDidMount(){
    const BASE_URL = 'https://dictionary-search-jhl.herokuapp.com/api/words'
    fetch(BASE_URL).then(
      res => res.json()
    ).then(
      result => {
        const {words} = result
        this.setState({loading: false, words})
      }
    )
  }
  componentDidUpdate(){
    console.log('update')
  }
  render(){
    const {loading, words} = this.state
    if(loading){
      return (
        <div>
          <h1>loading...</h1>
        </div>
      )}else{
        return (
          <div>
            {words.map(word => {
              return(
                <Word
                  key={word._id}
                  r_word={word.r_word}
                  r_seq={word.r_seq}
                  r_chi={word.r_chi}
                  r_pos={word.r_pos}
                  r_des={word.r_des}
                  r_link={word.r_link}
                  >
                </Word>
              )
            })}
          </div>
        )
      }
    }
  }
export default App;
