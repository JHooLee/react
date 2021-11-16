//함수형
import React, {useRef} from "react";

function CustomInput(props){
    const textInput = useRef(null)//ref 생성하기
    const focusInput = () => {
        console.log(textInput.current)
        textInput.current.focus()//ref 사용하기
    }

    return(
        <>
            <input type="text" ref={textInput}></input>{/*ref 설정하기*/}
            <button onClick={focusInput}>focus input</button>
        </>
    )
}

export default CustomInput
// 컴포넌트
// import React, {Component} from "react";
// import Button from "./Button";

// class CustomInput extends Component{
//     constructor(props){
//         super(props)
//         this.textInput = React.createRef()//ref 생성하기
//     }
//     focusInput = () => {
//         console.log(this.textInput.current)
//         this.textInput.current.focus()
//     }
//     render(){
//         return(
//             <>
//                 <input type="text" ref={this.textInput}></input>{/*ref 설정하기*/}
//                 <Button onClick={this.focusInput}>focus input</Button>
//             </>
//         )
//     }
// }
// export default CustomInput