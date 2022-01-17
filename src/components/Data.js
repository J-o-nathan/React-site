import React from 'react'
import { connect } from 'react-redux'
import { startDeleteDataAll } from '../actions/userData'
import Header from './partials/Header'
import DataItem from './partials/DataItem'


const Data = (props) => {

    const onClickDeleteAll = () => {
        console.log('clicked delete')
        props.startDeleteDataAll()
    }

    console.log(props)

    //need to pass history down to DataItem as a prop. DataItem doesn't have access to history as it's not a "Route".
    //push to the edit page with the params of the id
    //The id will be provided by the child when it's called.
    //DataItem (child) has access to each entries individual props (name, id, etc). This makes it easy to isolate that specific id and provide it to onClickEditPush.

    const onClickEditPush = (id) => {
        props.history.push(`/editPage/${id}`)
    }


    return (
        <div>
            <Header />
            <div className="body-container" id="about-container">
                <div>
                    {props.dataArray.map((dataItem) => {
                    return <DataItem key={dataItem.id} onClickEditPush={onClickEditPush} {...dataItem} />;
                    })}
                    <div id="minor-button-delete-all-container">
                        <button id='minor-button-delete-all' className='minor-button' onClick={onClickDeleteAll}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


const mapStateToProps = (state) => {
    return {
        dataArray: state.userData
    }
}

const mapDispatchToProps = (dispatch) => ({
    startDeleteDataAll: () => dispatch(startDeleteDataAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Data)