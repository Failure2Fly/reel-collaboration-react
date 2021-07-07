import React from 'react';
import { Link } from 'react-router-dom'

function NavBottom() {
  return (
    <nav className="navbar nav-bottom">
        <div className="container">
            <Link className="nav-link" to="/Tools">Tools</Link>
            <Link className="nav-link" to="/Advice">Advice</Link>
            <Link className="nav-link" to="/Festivals">Festivals</Link>
            <Link className="nav-link" to="/Forums">Forums</Link>
        </div>
    </nav>
  );
}

export default NavBottom;
