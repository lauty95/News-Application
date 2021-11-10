import React from 'react'

function Nav() {
    return (
        <header className="container-fluid no-left-padding no-right-padding header_s header-fix header_s7">
            {/* SidePanel */}
            <div id="slidepanel-1" className="slidepanel">
                {/* Top Header */}
                <div className="container-fluid no-right-padding no-left-padding top-header">
                    {/* Container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-6">
                                <ul className="top-social">
                                    <li><a href="#" title="Facebook"><i className="ion-social-facebook-outline" /></a></li>
                                    <li><a href="#" title="Twitter"><i className="ion-social-twitter-outline" /></a></li>
                                    <li><a href="#" title="Instagram"><i className="ion-social-instagram-outline" /></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 logo-block">
                                <a href="index.html" title="Logo">minimag</a>
                            </div>
                            <div className="col-lg-4 col-6">
                                <ul className="top-right user-info">
                                    <li><a href="#search-box" data-toggle="collapse" className="search collapsed" title="Search"><i className="pe-7s-search sr-ic-open" /><i className="pe-7s-close sr-ic-close" /></a></li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" href="#"><i className="pe-7s-user" /></a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" title="Sign In">Sign In</a></li>
                                            <li><a className="dropdown-item" href="#" title="Subscribe">Subscribe </a></li>
                                            <li><a className="dropdown-item" href="#" title="Log In">Log In</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* Container /- */}
                </div>{/* Top Header /- */}
            </div>{/* SidePanel /- */}
            {/* Container */}
            <div className="container">
                {/* Menu Block */}
                <div className="container-fluid no-left-padding no-right-padding menu-block">
                    <nav className="navbar ownavigation navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">minimag</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar7" aria-controls="navbar7" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbar7">
                            <ul className="navbar-nav">
                                <li className="dropdown">
                                    <i className="ddl-switch fa fa-angle-down" />
                                    <a className="nav-link dropdown-toggle" title="Home" href="index.html">Home</a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown">
                                            <i className="ddl-switch fa fa-angle-down" />
                                            <a className="dropdown-item dropdown-toggle" href="index-2.html" title="Home 2">Home 2 - 11</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="index-2.html" title="Home 2">Home 2</a></li>
                                                <li><a className="dropdown-item" href="index-3.html" title="Home 3">Home 3</a></li>
                                                <li><a className="dropdown-item" href="index-4.html" title="Home 4">Home 4</a></li>
                                                <li><a className="dropdown-item" href="index-5.html" title="Home 5">Home 5</a></li>
                                                <li><a className="dropdown-item" href="index-6.html" title="Home 6">Home 6</a></li>
                                                <li><a className="dropdown-item" href="index-7.html" title="Home 7">Home 7</a></li>
                                                <li><a className="dropdown-item" href="index-8.html" title="Home 8">Home 8</a></li>
                                                <li><a className="dropdown-item" href="index-9.html" title="Home 9">Home 9</a></li>
                                                <li><a className="dropdown-item" href="index-10.html" title="Home 10">Home 10</a></li>
                                                <li><a className="dropdown-item" href="index-11.html" title="Home 11">Home 11</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="index-12.html" title="Home Food">Home Food</a></li>
                                        <li><a className="dropdown-item" href="index-13.html" title="Home Technology">Home Technology</a></li>
                                        <li><a className="dropdown-item" href="index-14.html" title="Home Beauty">Home Beauty</a></li>
                                        <li><a className="dropdown-item" href="index-15.html" title="Home Fashion">Home Fashion</a></li>
                                        <li><a className="dropdown-item" href="index-16.html" title="Home Travel">Home Travel</a></li>
                                        <li><a className="dropdown-item" href="index-17.html" title="Home Industrial">Home Industrial</a></li>
                                        <li><a className="dropdown-item" href="index-18.html" title="Home Business">Home Business</a></li>
                                        <li><a className="dropdown-item" href="index-19.html" title="Home Fitness">Home Fitness</a></li>
                                        <li><a className="dropdown-item" href="index-20.html" title="Home Architecture">Home Architecture</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <i className="ddl-switch fa fa-angle-down" />
                                    <a className="nav-link dropdown-toggle" title="Posts" href="#">Posts</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="blog-single.html" title="Blog Post">Blog Post</a></li>
                                        <li><a className="dropdown-item" href="blog-single-cover-containr-full.html" title="Blog Post 2">Blog Post 2</a></li>
                                        <li><a className="dropdown-item" href="blog-single-cover-full.html" title="Blog Post 3">Blog Post 3</a></li>
                                        <li><a className="dropdown-item" href="blog-single-no-sidebar.html" title="Post No Sidebar">Post No Sidebar</a></li>
                                        <li><a className="dropdown-item" href="blog-single-no-sidebar-2.html" title="Post No Sidebar 2">Post No Sidebar 2</a></li>
                                        <li><a className="dropdown-item" href="blog-single-no-sidebar-3.html" title="Post No Sidebar 3">Post No Sidebar 3</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <i className="ddl-switch fa fa-angle-down" />
                                    <a className="nav-link dropdown-toggle" title="Pages" href="#">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="header-page.html" title="Header">Header</a></li>
                                        <li><a className="dropdown-item" href="footer-page.html" title="Footer">Footer</a></li>
                                        <li><a className="dropdown-item" href="404.html" title={404}>404</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" title="Features" href="#">Features</a></li>
                                <li><a className="nav-link" title="Archives" href="#">Archives</a></li>
                                <li className="dropdown">
                                    <i className="ddl-switch fa fa-angle-down" />
                                    <a className="nav-link dropdown-toggle" title="About Us" href="aboutus.html">About Us</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="aboutus_fullwidth.html" title="About Us No sidebar">About Us No sidebar</a></li>
                                        <li><a className="dropdown-item" href="aboutme.html" title="About Me">About Me</a></li>
                                        <li><a className="dropdown-item" href="aboutme_fullwidth.html" title="About Me No sidebar">About Me No sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a className="nav-link" title="Contact" href="contact-us.html">Contact</a></li>
                            </ul>
                        </div>
                        <div id="loginpanel-1" className="desktop-hide">
                            <div className="right toggle" id="toggle-1">
                                <a id="slideit-1" className="slideit" href="#slidepanel"><i className="fo-icons fa fa-inbox" /></a>
                                <a id="closeit-1" className="closeit" href="#slidepanel"><i className="fo-icons fa fa-close" /></a>
                            </div>
                        </div>
                    </nav>
                </div>{/* Menu Block /- */}
            </div>{/* Container /- */}
            {/* Search Box */}
            <div className="search-box collapse" id="search-box">
                <div className="container">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." required />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="submit"><i className="pe-7s-search" /></button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>{/* Search Box /- */}
        </header>
    )
}

export default Nav
