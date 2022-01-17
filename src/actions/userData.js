import { firebase } from '../firebase/firebase'

//
// POSTING NEW DATA TO FIREBASE AND THE REDUX STORE
//

export const postData = (data) => ({
    type: 'POST_DATA',
    data
})

    // startDbUpdate is responsible for posting new data to firebase and then changing the state in the redux store to reflect the new firebase data.

export const startDbUpdate = (userData = {}) => {
    return (dispatch, getState) => {
  
    // Thunk middleware gives you access to dispatch and getState. Use getState to grab the uid state which is set when someone logs in.
    // Use the uid to ensure everyone is posting data to their unique account

        const uid = getState().auth.uid;

        const {
            name = '',
            mobile = '',
            message = '',
            timestamp = 0
          } = userData;
          const data = { name, mobile, message, timestamp }

    // The data is an object. The reference depends on the user's unique ID, so everyone pushes their data to their unique account.
    // Firebase provides an id for the individual entry. We will dispatch this ID to the store and use it to access that specific data entry.
    // We are passing in an object to postData

        return firebase.database().ref(`users/${uid}/datas`).push(data).then((ref) => {
            console.log('posting data: ' + data)
            
    // pass in an object to postData

            dispatch(postData({
                id: ref.key,
                ...data
              }))
        })
    }
};


//
// GETTING THE DATA FROM FIREBASE AND SENDING IT TO THE STATE IN THE REDUX STORE WHEN A PAGE NEEDS TO RENDER IT. 
//

    // Whenever we render data on a page we do this by getting the data from firebase to the state, then rendering the state.

export const getData = (data) => ({
    type: 'GET_DATA',
    data
})


export const startGetData = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        
        // get the user ID from the state, so we can request the data from the correct user account
        // firebase will return the user data (snapshot) in object form. Loop over all of them and push them into an array of objects.
        
        return firebase.database().ref(`users/${uid}/datas`).once('value').then((snapshot) => {
            const datas = []

            snapshot.forEach((childSnapshot) => {
                datas.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            // pass in the array of objects to getData

            dispatch(getData(datas))  

        })
    }

}


//
// DELETE THE DATA FROM FIREBASE AND THEN DISPATCH DELETE TO THE REDUX STORE TO DELETE THE STATE
//


export const deleteDataAll = () => ({
    type: 'DELETE_DATA_ALL'
})

export const startDeleteDataAll = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid

        firebase.database().ref(`users/${uid}/datas`).remove().then(() => {
            dispatch(deleteDataAll())
        })
    }
}


export const deleteData = ({ id } = {}) => ({
    type: 'DELETE_DATA',
    id
  });
  
  export const startDeleteData = ({ id } = {}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      
      return firebase.database().ref(`users/${uid}/datas/${id}`).remove().then(() => {
        dispatch(deleteData({ id }));
      });
    };
  };



//
// EDIT THE DATA IN FIREBASE USING THE USERS ID AND THE SPECIFIC DATA ENTRY ID. DISPATCH THIS CHANGE TO THE REDUX STORE TO CHANGE THE STATE ALSO.
//


export const editData = (id, updates) => ({
    type: 'EDIT_DATA',
    id, 
    updates
})

export const startEditData = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return firebase.database().ref(`users/${uid}/datas/${id}`).update(updates).then(() => {
            dispatch(editData(id, updates));
          })
    }
}


