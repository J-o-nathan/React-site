//Use this file to set up the reducer to change state related to userData
//The defualt state is an empty array. We will end up with an array of objects representing each data entry.

export default (state = [], action) => {
    switch(action.type) {
        case 'POST_DATA':
            console.log('reducer POST_DATA' + [action.data])
//The previous state will be an array of objects. Create a new array, spreading out the previous data and adding on the new data object.
            return [
                ...state, 
                action.data]

        case 'GET_DATA':
            console.log('reducer GET_DATA')
            return action.data
        
        case 'DELETE_DATA_ALL':
            console.log('reducer DELETE_DATA_ALL') 
            return [] 

        case 'DELETE_DATA':
            console.log('reducer DELETE_DATA')
            return state.filter((data) => data.id !== action.id)

        case 'EDIT_DATA':
            console.log('reducer EDIT_DATA')
// Return an array of objects, but if the action.id matches the data id, change that specific onject in the array. Spread out the old object and override with the update.
            return state.map((data) => {
                if (data.id === action.id) {
                  return {
                    ...data,
                    ...action.updates
                  };
                } else {
                  return data;
                };
              })

            default:
                return state

    }   
}