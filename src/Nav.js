import React from "react";
import Button from "./Button";
import './Nav.css'

function Nav({menus}){
    const navigate = (url) => {
        window.location.href = url
    }

    return(
        <div className="nav-container">
            {menus.map(menu => {
                return(
                    <Button handleClick={()=>navigate(menu.siteUrl)}>{menu.siteTitle}</Button>
                )
            })}
        </div>
    )
}

export default Nav