import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const { auth,profile } = props
    //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Plan</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    //console.log(state)
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }//try console logging state to understand everything
}

export default connect(mapStateToProps)(Navbar);