import React from 'react';
import {firebase} from '../../firebase'

class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
        console.log(event)
        console.log(this.state.email)
        console.log(this.state.password)
    }

    signInMethod = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log('Logged In')
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    render() {

    return (
        <div className="Nav">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Reel Collaboration</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarScroll">
                                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll full-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pre-Production
                                        </a>
                                        <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                                            <li><a className="dropdown-item" href="#">Post Casting Call</a></li>
                                            <li><a className="dropdown-item" href="#">Find Crew Members</a></li>
                                            <li><a className="dropdown-divider"></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Production
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><a className="dropdown-item" href="#">Budgeting</a></li>
                                            <li><a className="dropdown-item" href="#">Scheduling</a></li>
                                            <li><a className="dropdown-divider"></a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Post-Production
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><a className="dropdown-item" href="#">Post Trailer</a></li>
                                            <li><a className="dropdown-item" href="#">Enter Festivals</a></li>
                                            <li><a className="dropdown-divider"></a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                </div>
                            </div>
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid ">                            
                                    <ul className="navbar-nav  navbar-nav-scroll">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</a>
                                            {/* <a className="nav-link" href="#">Profile</a> */}
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sign Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </nav>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <form>
                                    <div classname="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                    </div>
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => this.signInMethod()}>Save</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Nav;
