import React from 'react';
import {NavLink} from 'react-router-dom'
function Header(){


    return(
    <div class="navBar">
        <div className="navButtons">
        <NavLink className="item change" to="/Islam">Islam</NavLink>
        </div>
        <div className="navButtons">
        <NavLink className="item change" to="/Christian">christian</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Judaism">Judaism</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Hinduism">Hinduism</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Atheism">Atheism</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Zorastrianism">zorastrianism</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Shintoism">Shintoism</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Budhissm">Budhissm</NavLink>
        </div>
        <div className="navButtons" >
        <NavLink className="item change" to="/Taoism">taoism</NavLink>
        </div>
    </div>
    );

}


export default Header;