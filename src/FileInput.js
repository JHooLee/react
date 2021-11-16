import React, {useRef} from "react";

function FileInput(props){
    const textInput = useRef(null)//ref 생성하기

    return(
        <>
            <label className="input-file-button" for="input-file">Upload</label>
            {/* App.css에
            .input-file-button{
                padding: 6px 25px;
                background-color: #FF6600;
                border-radius: 4px;
                color: white;
                cursor: pointer;
            } */}
            <input type="file" id="input-file" ref={textInput} style={{visibility:'hidden'}}></input>{/*ref 설정하기*/}
            
        </>
    )
}
export default FileInput;