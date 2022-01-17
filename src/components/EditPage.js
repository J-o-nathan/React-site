import React from 'react'
import { connect } from 'react-redux'
import { startEditData } from '../actions/userData'
import Header from './partials/Header'
import Form from './partials/Form'


const EditPage = (props) => {

    const onClickEdit = (data) => {
        console.log('onClickEdit ' + data)
        props.startEditData(props.data.id, data)
        props.history.push('/Data')
    }

    return (
        <div>
            <Header />
            <div className="body-container" id="edit-page-container">
                <div>
                    <Form data={props.data} onSubmit={onClickEdit}/>
                </div>
            </div> 
        </div>
    )
}


//Set variable 'data' (the individual data object) to props. Get this from the state.UserData array.
//To find which specific 'data' object to set to the props, compare all the object id's in the array to the query string parameters of this specific page. 
//When you click edit expense it sends you to a URL with the spcific id in it. Grab this id from the URL to find your specific data object.

const mapStateToProps = (state, props) => ({
    data: state.userData.find((data) => data.id === props.match.params.id)
  });


  const mapDispatchToProps = (dispatch) => ({
    startEditData: (id, data) => dispatch(startEditData(id, data)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)