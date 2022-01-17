import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//Use PrivateRoute as a wrapper for private components.
//Destructure all the props passed into PrivateRouter. Use the isAuthenticated prop to determine what to render.
//A component in Route is defined by it's props. Pass all of those props into the component.

const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? ( <Component {...props} />) : (
            <Redirect to="/" />
        )
    )} />
)


//Access the state to determine is a user ID exists. If yes then they must be logged in.

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)