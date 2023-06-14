import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand mx-5" to="/">Resume Builder <i class="fa-regular fa-handshake fa-lg"></i></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto mx-5">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/Create-Resume">Create Resume</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">View</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="#">Pricing</Link>
                            </li> */}
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav