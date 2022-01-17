import React from 'react';
import { connect } from 'react-redux'
import { startDeleteData } from '../../actions/userData';
import { Link } from 'react-router-dom';

const DataItem = ({ name, mobile, message, timestamp, startDeleteData, dataArray, id, onClickEditPush }) => {
  
  const onClickDeleteOne = () => {
    const objectToDelete = dataArray.filter((object) => Object.values(object).includes(id))[0]
    startDeleteData({ id: objectToDelete.id });
  }

  const onClickEditRedirect = () => {
    console.log('onClickEditRedirect')
    onClickEditPush(id)
}


 return (
    <div id="data-item-container">
      <div>
        <p className="list-item">{'Name: ' + name}</p>
        <p className="list-item">{'Mobile: ' + mobile}</p>
        <p className="list-item">{'Message: ' + message}</p>
        <p className="list-item">{'Sent: ' + timestamp}</p>
      </div>
      
      <div className="edit-button-container">
        <button className='minor-button' onClick={onClickEditRedirect}>Edit</button>
        <button className='minor-button' onClick={onClickDeleteOne}>Delete</button>
      </div>
      
    </div>
 )
};

const mapStateToProps = (state) => ({
  dataArray: state.userData
});

const mapDispatchToProps = (dispatch) => ({
  startDeleteData: (data) => dispatch(startDeleteData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DataItem);
