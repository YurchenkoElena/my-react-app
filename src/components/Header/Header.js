import React from "react";
import logo from "../../images/horizontal_on_white_by_logaster.png";

const Header = () => {
    return (
        <header className="header ">
            <div className="container">
                <img src={logo} alt='horizontal_on_white_by_logaster' />

                <div className="wrapper-menu">
                    <div id="menuToggle">
                        <input type="checkbox" />
                            <span id="span1"></span>
                            <span id="span2"></span>
                            <span id="span3"></span>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/music">Music</a></li>
                            <li><a href="/video">Video</a></li>
                            <li><a href="/friends">Friends</a></li>
                            <li><a href="/settings">Settings</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Header;