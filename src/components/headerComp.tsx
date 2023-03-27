
import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import './headerCompStyle.css';

class HeaderComp extends Component{
    render(): React.ReactNode {
        return(
            <div className="headerContainer">
                <div className="AppName">Name</div>
                <div className="links">
                    <div>
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderComp;