import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../../actions/auth'
import Button from './Button'


const Header = ({startLogout}) => {

return (
    <header id="header-container">   
        {/* <NavLink to="/" className="header__element" activeClassName="is-active" exact={true}>Home</NavLink> */}
        <NavLink to="/About" className="header__element" activeClassName="is-active">About</NavLink>
        <NavLink to="/FindTutor" className="header__element" activeClassName="is-active">Find a Tutor</NavLink>
        <NavLink to="/Contact" className="header__element" activeClassName="is-active">Contact</NavLink>
        <NavLink to="/Data" className="header__element" activeClassName="is-active">Data</NavLink>
          <span id="logout-button-container">
            <Button title="LOGOUT" onClick={startLogout} id="main-logout-button" />
          </span>

    </header>)}


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });

  export default connect(undefined, mapDispatchToProps)(Header)




    



