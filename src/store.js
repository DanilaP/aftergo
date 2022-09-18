import { createStore } from 'redux';

const initialState = {
    userData: {},
    router: "",
    userImage: "",
}
function reducer(state = initialState, action) {
    switch(action.type) {
        case "USERDATA": return {userData: action.value};
        case "CHOOSEROUTER": return {router: action.value};
        case "SETUSERIMAGE": return {userImage: action.payload};
        default: return state;
    }
}

const store = createStore(reducer);

export default store;