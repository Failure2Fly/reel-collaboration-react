import React from 'react';
import {firebase} from '../../firebase'
import '../../css/nav.css'

class Nav extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            loggedIn: false,
            signUp: false
        }
        this.signInOrUp = this.signInOrUp.bind(this)
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

    signUpMethod = () => {
        console.log('hello')
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            this.setState({
                loggedIn: true
            
            })
            console.log('note')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    signInMethod = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.setState({
                loggedIn: true
            })
            console.log(this.state.loggedIn)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    signOutMethod = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            this.setState({
                loggedIn: false
            })
          })
          .catch((error) => {
            // An error happened.
          });
    }


    signInOrUp = () => {
        console.log('hello')
        return <div className="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="singIn" >Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUserName1" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="exampleInputUserName1" name="username" value={this.state.username} onChange={this.handleChange}></input>
                            </div>
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
                        <button type="button" className="btn btn-primary" onClick={() => this.signUpMethod()}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    }
    


    render() {

    const greeting = () => {
        if(this.state.loggedIn){
            return <div className="container-fluid ">                            
                <ul className="navbar-nav  navbar-nav-scroll">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.username}
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item" href="#">Account</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" tabindex="-1"  onClick={() => this.signOutMethod('')}>Sign Out</a>
                    </li>
                </ul>                          
            </div>
        }
        else{
            return <div className="container-fluid ">                            
                <ul className="navbar-nav  navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#signIn" onClick={() => this.signInOrUp('')}>Sign In</a>  
                    </li>
                </ul>                          
            </div>
        }
    }


    return (
        <div className="Nav sticky-top">
            <nav className="navbar navbar-expand-lg ">
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
                <nav className="navbar navbar-light bg-light nav-right-search">
                    {greeting()} 
                </nav>
            </nav>
        </div>
        );
    }
}

export default Nav;




const signInOrUp = () => { 
    return <div className="modal fade" id="signIn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div className="cont_principal">
                    <div className="cont_centrar">
                        <div className="cont_login">
                            <form action="" name="sign_form">
                                <div className="cont_tabs_login">
                                    <ul className='ul_tabs'>
                                        <li className="active"><a href="#in" onclick="sign_in()">SIGN IN</a>
                                            <span className="linea_bajo_nom"></span>
                                        </li>
                                        <li><a href="#up" onclick="sign_up()">SIGN UP</a><span className="linea_bajo_nom"></span>
                                        </li>
                                    </ul>
                                </div>
                            <div className="cont_text_inputs">
                            <input type="text" className="input_form_sign" placeholder="Name" name="name_us" onblur="checkName(this)" onChange={e => setName(e.target.value)}/>
                                <p className="name_right">Please type the name with number or Chinese or English.</p>
                                <input type="text" className="input_form_sign d_block active_inp" placeholder="Email" name="email_us" onblur="checkEmail(this)" onChange={e => setEmail(e.target.value)}/>
                                <p className="email_right"></p>
                                <input type="password" className="input_form_sign d_block  active_inp" placeholder="Password" name="pass_us" onblur="checkPass(this)" onChange={e => setPassword(e.target.value)}/>
                                <p className="pass_right">Please type the password contains 6-20 uppercase or lowercase letters , numbers or underline.</p>
                                <input type="password" className="input_form_sign" placeholder="Confirm Password" name="conf_pass_us" onblur="checkConfPass(this)" onChange={e => setPassword(e.target.value)}/>
                                <p className="confpass_right">Please type the password same with you just type.</p>
                                <a href="#/" className="link_forgot_pass d_block" >Forgot Password ?</a>    
                                
                            </div>
                            <div className="cont_btn">
                                <button id="btn_sign">SIGN IN</button>    
                            </div>     
                            </form>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
}