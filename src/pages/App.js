import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component{

    constructor(){
        super();
    }

    render(){
       return (  
           
                <div>
                       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="https://github.com/eduardofpu/react-bootstrap-router">Git</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                <li className="nav-item active">
                                   
                                    <IndexLink to="/" className="nav-link">Home </IndexLink>
                                    
                                </li>
                                <li className="nav-item">
                                <Link to="/home2" className="nav-link">Home2 </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </nav>
                            <section className="section">
                                <div className="container">
                                    {this.props.children}
                                </div>
                            </section>
                </div>
       );
    }

}