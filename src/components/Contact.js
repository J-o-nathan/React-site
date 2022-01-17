import React from 'react'
import { connect } from 'react-redux'
import { startDbUpdate } from '../actions/userData'
import Form from '../components/partials/Form'
import Header from './partials/Header'

const Contact = ({startDbUpdate, history}) => {

    //Pass in the onSubmit prop for the Form (child component) to access.
    //Use mapDispatchToProps to get the startDbUpdate function to use. This takes an arguments, "input".
    //Define the onSubmit handler using the startDbUpdate function passed into the props

    return (
        
        <div>
            <Header />
            <div className="body-container" id="contact-container">
                <h1>Contact</h1>
                <Form onSubmit={(input) => {
                console.log(input)
                startDbUpdate(input)
                history.push('/Data')
                 }}/>
            </div>
        </div>
        
    )
}


const mapDispatchToProps = (dispatch) => ({
    startDbUpdate: (input) => dispatch(startDbUpdate(input))
})

export default connect(undefined, mapDispatchToProps)(Contact)