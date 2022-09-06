import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow mb-4">
                <a class="navbar-brand mx-3" href="#">GroupUp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <Link to='/profile' className='nav-item nav-link'>Profile</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar