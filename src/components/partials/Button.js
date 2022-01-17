import React from 'react'
import { connect } from 'react-redux'
import { firebase, googleAuthProvider} from '../../firebase/firebase'

//The button has it's onClick hander defined by the props passed in from the parent component.
//The title and id of the button are also defined by props from the parent.

const Button = ({ onClick, title, id }) => (
    <div id="button-container">
        <button className="btn" id={id} onClick={onClick}>{title}</button>
    </div>
)

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.uid
    }
}


export default connect(mapStateToProps)(Button)