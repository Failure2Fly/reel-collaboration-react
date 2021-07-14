import React from 'react'

export default function MainHeader({loggedIn}) {
    
    if(loggedIn){
        return null
    }
    else {
        return (
            <div className="main-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col-4">
                        <div className="main-header-text">
                            <h3 className="main-header-title">What is Reel Collaboration?</h3>
                            <h5 className="main-header-innerText">Reel Collaboration is a place for all those in the film industry <span>(or just starting out)</span> to work on projects together, to showcase their previous work and to find all one needs to finish a film from start to end. </h5>
                        </div>
                        </div>
                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}