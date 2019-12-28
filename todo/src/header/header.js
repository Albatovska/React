import React from 'react'
import logo from "./logo.png"

const Header = ({count}) => {
    return(
      <div className={"header"}>
        <img src={logo} alt="" className="logo" /> 
        <div className="count">You have <span className="number">{count}</span> things to do</div>  
      </div>
    )
  }

export default Header  
