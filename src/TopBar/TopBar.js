import React from 'react'
import "./TopBar.css";

const TopBar = () => {
    return (
        <div className="top">
        <div className="topLeft" >
        <i class="topIcon fab fa-facebook-f"></i>
        <i class="topIcon fab fa-twitter-square"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
        <i class="topIcon fab fa-instagram"></i>
        </div> 
        <div className="topCenter" >
          <ul className="topList">
          <li className="topListItem">Home</li>   
          <li className="topListItem">About</li> 
          <li className="topListItem">Contact</li> 
          <li className="topListItem">Write</li> 
          <li className="topListItem">Log</li>  
        </ul>  
            
        </div> 
        <div className="topRight" >
       <img className="topImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
       <i class=" topSearch fas fa-search"></i>
      </div> 
        </div>
    )
}

export default TopBar
