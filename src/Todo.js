import React, {Component} from "react";

function Todo({user, name, done, description}){
    return(
        <>
            <h2>user: {user}</h2>
            <h3>name: {name}</h3>
            <h4>done: {done? "finished":"not done"}</h4>
            <p>description: {description}</p>
        </>
    )
}

export default Todo;