import React from 'react'
import Button from './partials/Button'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const Home = ({ startLogin }) => (
    <div className="body-container" id="home-container">
           <div id="main-heading">
                <h1 id="main-heading-1">Hick & Turk - Mathematics Tutoring</h1>
                <h3 id="main-heading-2">Year 7 to Year 12 Extension 2</h3>
            </div>
            
            <Button onClick={startLogin} title="LOGIN" id="main-login-button"
                // console.log('parent state: ' + this.state.auth)
                
                // this.setState((prevState) => {
                //     return {
                //         auth: !prevState.auth
                //     }
                // })
            />

          </div>     
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
  });

export default connect(undefined, mapDispatchToProps)(Home)