import './App.css';
import React, {Component} from 'react';
import Button from './Button';

class AppUploadMulti extends Component{
  constructor(props){
    super(props)
    this.state = {
      files: ''
    }
    this.fileInput = React.createRef()//ref 생성하기
  }
  isValid = (type) => {
    return type === 'image'
  }

  handleChange = (e) => {
    const files = e.target.files
    const uploadedFiles = []

    //file.type.split("/")[0] => "image" "pdf" "video"
    for(let file of files){
      if(this.isValid(file.type.split("/")[0])){
        const name = file.name
        const imgSrc = URL.createObjectURL(file)
        uploadedFiles.push({name, imgSrc})
      }else{
        alert(`file [${file.name}] type is not valid`)
      }
    }
    this.setState({files: uploadedFiles})
  }
  openFileWindow = () => {
    this.fileInput.current.click()//ref 사용하기
  }

  render(){
    const {files} = this.state
    return(
      <div className="App">
        {files.length !== 0 && files.map((file, id) => {
          return(
            <div key={id}>
              <h3>{file.name}</h3>
              <img src={file.imgSrc} alt={file.name} width="70px" height="70px"></img>
            </div>
          )
        })}
        <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
        <Button handleClick={this.openFileWindow}>Upload</Button>
      </div>
    ) 
  }
}
export default AppUploadMulti;