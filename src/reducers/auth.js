export default (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log('store LOGIN')
            return {
                uid: action.uid
            }

        case 'LOGOUT':
            console.log('store LOGOUT') 
            return {}

        default: return state
    }   
}