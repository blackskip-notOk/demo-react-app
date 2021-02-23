import React from "react";

const Ul = () => {
    return (
        <ul className="header-nav-ul">
            <li className="li-image"><img className="image-logo" src="./github-logo.jpg" alt="github icon" /></li>
            <li className="li-search">
                <div className="div-search">
                    <span className="icon"><i className="fas fa-jedi"></i></span>
                        <input type="search" id="search" name="search" placeholder="Search..." />
                </div>
            </li>
            <li className="li-home">
                <div className="div-home">
                    <a className="home-icon" href="https://github.com/">
                        <i className="fab fa-galactic-republic"></i>
                    </a>
                    <div className="div-home-text">
                        <span className="span-home">HOME</span>
                    </div>
                </div>
            </li>
            <li className="li-friends">
                <div className="div-friends">
                    <a className="friends-icon" href="https://www.facebook.com/friends">
                        <i className="fab fa-old-republic"></i>
                    </a>
                    <div className="div-friends-text">
                        <span className="span-friends">FRIENDS</span>
                    </div>
                </div>
            </li>
            <li className="li-video">
                <div className="div-video">
                    <a className="video-icon" href="https://www.youtube.com/">
                        <i className="fab fa-jedi-order"></i>
                    </a>
                    <div className="div-video-text">
                        <span className="span-video">VIDEO</span>
                    </div>
                </div>
            </li>
            <li className="li-lessons">
                <div className="div-lessons">
                    <a className="lessons-icon" href="https://learn.javascript.ru/microtask-queue">
                        <i className="fab fa-galactic-senate"></i>
                    </a>
                    <div className="div-lessons-text">
                        <span className="span-lessons">LESSONS</span>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default Ul;