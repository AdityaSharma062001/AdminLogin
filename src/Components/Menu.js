import { Component } from "react";
import { Link } from "react-router-dom";

export default function Menu (){

    
    // $('.color-mode').click(function(){
    //     $('.color-mode-icon').toggleClass('active')
    //     $('body').toggleClass('dark-mode')
    // })
    var  myFunction=()=> {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
        return <>
        <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
            <a className="navbar-brand"><i className='uil uil-user'></i> IT_Stack</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><span data-hover="Home">Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link"><span data-hover="About">About</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/course" className="nav-link"><span data-hover="Course">Course</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link"><span data-hover="Contact">Contact</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link"><span data-hover="Login">Login</span></Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-lg-auto">
                    <div className="ml-lg-4">
                      <div className="color-mode d-lg-flex justify-content-center align-items-center" onClick={myFunction}>
                          <i className="color-mode-icon"></i>
                        Color mode
                      </div>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
        </>
    }