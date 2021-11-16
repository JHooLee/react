import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
// import logo from './logo.svg';

class AppMovie extends Component{
  constructor(props){
    console.log('constructor')
    super(props)
    this.state = {
      loading: true,
      movies: []
    }
  }
  //이벤트핸들러 함수
  // changeName = () =>{
  //   console.log(this)
  //   this.setState({name: 'name changed'})
  // }
  //컴포넌트가 생성되었을 때 호출이 됨
  componentDidMount(){
    console.log('mount')
    fetch('https://yts.mx/api/v2/list_movies.json').then(
      res => res.json()
    ).then(
      result => {
        console.log(result)
        const {data: {movies}} = result
        this.setState({loading: false, movies})
      }
    )
  }
  //컴포넌트가 업데이트 되었을 때 호출이 됨
  componentDidUpdate(){
    console.log('update')
  }
  //컴포넌트가 제거되었을 때 호출이 됨
  // componentWillUnmount(){
  //   console.log('unmount')
  // }
  render(){
    // console.log('render')
    const {loading, movies} = this.state
    if(loading){
      return (
        <div>
          <h1>loading...</h1>
        </div>
      )}else{
        return (
          <div>
            {movies.map(movie => {
              return(
                <Movie 
                  key={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  cover={movie.medium_cover_image}
                  summary={movie.summary}>
                </Movie>
              )
            })}
          </div>

        )
      }
    }
    // return (
    //   <div className="App">
    //     <h1>{name}</h1>
    //     <button onClick={this.changeName}>change name</button>
    //   </div>
    // )
  }


export default AppMovie;
// function App(){

//   return(
//     <div className="App">
//       {words.map(word => {
//             return (
//                 <>
//                     <div class="item">
//                         <div class="r_word">
//                             <a href={word.r_link}><b>{word.r_word}</b> <sup>{word.r_seq? word.r_seq:""}</sup></a>
//                             {word.r_chi}
//                             <p class="r_content">{word.r_pos}
//                             {word.r_des}
//                             </p>
//                         </div>
//                     </div>
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }
    

// class App extends Component{
//   state = {
//     count: 0
//   }
//   showUI = (cnt) => {
//     let ui = null;
//     switch(cnt){
//       case 0:
//         ui = <h1>home</h1>
//         break;
//       case 1:
//         ui = <h1>about</h1>
//         break;
//       case 2:
//         ui = <h1>detail</h1>
//         break;
//       default:
//         ui = <h1>notfound</h1>
//     }
//     return ui
//   }
//   increase = () =>{
//     this.setState({count: this.state.count + 1})
//   }
//   render(){
//     const{count} = this.state
//     const name = 'jhl'
//     const head = () => (<h1>태그</h1>)
//     return(
//       <>
//       {this.showUI(count)}
//       (
//         <>
//         <h1 className="center" onChange>헤딩태그</h1>
//         <p name={head}>lorem {name} lorem</p>
//         {/* <p name={() => (<h1>태그</h1>)}>lorem {name} lorem</p> */}
//         </>
//       )
//       <button type="button" onClick={this.increase}>counting</button>
//       </>
//     )
//   }
// }





// function App(){
//   const loading = {
//     stste: false
//   }
//   if(!loading.stste){
//     return <h1>loading page</h1>
//   }else{
//     return <h1>home page</h1>
//   }
  
  // const person = {
  //   name: 'jhl',
  //   age: 3
  // }
  // return(
  //   <div className='App'>
  //     <div>
  //       {person.name? <h1>nice</h1>:<h1>exist</h1>} - {person.age}
  //       {/* {person.name? "your name is nice!":"name doesn`t exist!"} - {person.age} */}
  //     </div>
  //   </div>
  // )

  // const name = 'jhl'
  // const changeName = (name) => {
  //   return `hello, ${name}`
  // } 
  // return(
  //   <div className='App'>
  //     <div>{person.name} - {person.age}</div>
  //   </div>
  // )
// }

// export default App;





// ----------------------------------------------------------------
// import Book from './Book';
// import NameTag from './NameTag';
// import Counter from './Counter';
// import { Component } from 'react/cjs/react.production.min';
// import YoutubeVideo from './YoutubeVideo';
// import dummyData from './DummyData';

// function App() {
//   return (
//     <div className="App">
//       {dummyData.map(d => {
//         return(
//         <YoutubeVideo 
//                     key={d.videold}
//                     videold={d.videold}
//                     videoName={d.videoName}
//                     videoLength={d.videoLength}
//                     videoDesctiption={d.videoDescription}
//       >
//         {/* 컨텐츠 삽입 */}
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/PgVVIbsyGnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//       </YoutubeVideo>
//         )
//       })}      
//     </div>
//   );
// }
// class App extends Component{
//   state = {
//     name: 'parent'
//   }
//   changeName = () => {
//     this.setState({name: "parent changed"})
//   }
//   render(){
//     console.log('parent')
//     const{name} = this.state
//     return(
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>change name</button>
//         <Counter></Counter>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       {/* <NameTag></NameTag> */}
//       <Counter></Counter>
//     </div>
//   )
// }

// export default App;
