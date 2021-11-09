import React from "react";

function Person(props){
        //초기 데이터
        const name = 'asdf'
        const age = 3
        const {country} = props//부모로쿠터 전달되는 값
        
        //html 템플릿
        return(
            <>
                <h1>{country}</h1>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </>
        )
}

export default Person;