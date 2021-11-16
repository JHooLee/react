import './App.css';
import React, {Component} from 'react';
import Button from './Button';

class AppUpload extends Component{
  constructor(props){
    super(props)
    this.state = {
      fileName: '',
      imgSrc: ''
    }
    this.fileInput = React.createRef()//ref 생성하기
  }
  isValid = (type) => {
    return type === 'image'
  }

  handleChange = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const imgSrc = URL.createObjectURL(file)

    if(this.isValid(file.type.split('/')[0])){
      this.setState({fileName: file.name, imgSrc})
    }else{
      this.setState({fileName: 'File is not valid type', imgSrc: ''})
    }
  }
  openFileWindow = () => {
    this.fileInput.current.click()//ref 사용하기
  }

  render(){
    const {fileName, imgSrc} = this.state

    return(
      <div className="App">
        <h1>{fileName}</h1>
        {imgSrc !== '' && <img src={imgSrc} alt="preview-img" width="300px" height="400px"></img>}
        <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*"></input>
        <Button handleClick={this.openFileWindow}>Upload</Button>
      </div>
    ) 
  }
}
export default AppUpload;