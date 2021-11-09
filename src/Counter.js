import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: 0
    }
    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState({count: count + 1})
        // this.setState((prevState) =>{
        //     return {count: prevState.count + 1}
        // })
        console.log(`after updating state: ${count}`)
    }
    // increaseMultiple = () => {
    //     //업데이트 되지 않는 구간//
    //     this.increase()//setState 인자로 객체를 사용하면 업데이트 안된다(0->1)
    //     //updater 사용시 this.state.count는 업데이트되지 않지만 prevState는 계속 업데이트된다(0->1)       
    //     this.increase()//setState 인자로 객체를 사용하면 업데이트 안된다(0->1)
    //     //updater 사용시 this.state.count는 업데이트되지 않지만 prevState는 계속 업데이트된다(1->2)
    //     this.increase()//setState 인자로 객체를 사용하면 업데이트 안된다(0->1)
    //     //updater 사용시 this.state.count는 업데이트되지 않지만 prevState는 계속 업데이트된다(2->3)
    //     console.log(`right after event: ${this.state.count}`)
    //     //-----------------------------------------------------//
    // }
    render(){
        //여기서 state가 업데이트된다
        //모든 이벤트가 종료되는 이 시점에서 state를 변경하고 render함수를 한번만 호출한다
        console.log('child')
        const {count} = this.state
        console.log(`state in render function: ${count}`)
        return(
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase}>Increase count</button>
            </>
        )
    }
}
export default Counter;