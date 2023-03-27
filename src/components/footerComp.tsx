
import React, {Component} from "react";

import './footerCompStyle.css'

class FooterComp extends Component{
    render(): React.ReactNode {
        return(
            <footer className="footerContainer">
                <div>Contact</div>
                <div>Name</div>
                <div>Email</div>
            </footer>
        )
    }
}

export default FooterComp;