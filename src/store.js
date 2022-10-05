import { createStore } from 'redux';

const initialState = {
    userData: {},
    router: "",
    userImage: "",
    firstDialog: false,
    secondDialog: false,
    showButton: false,
    lastRoute: "",
    isActiveFirstSub: false,
    isActiveSecondSub: false,
    isActiveFirstModal: false,

}
function reducer(state = initialState, action) {
    switch(action.type) {
        case "USERDATA": return {userData: action.value};
        case "CHOOSEROUTER": return {router: action.value};
        case "SETUSERIMAGE": return {userImage: action.payload};
        //First user enter to site//
        case "SHOWFIRSTDIALOG": return {firstDialog: action.payload};
        case "SHOWSECONDDIALOG": return {secondDialog: action.payload};
        case "SHOWBUTTON": return {showButton: action.payload};
        case "LASTROUTE": return {lastRoute: action.payload};
        case "SHOWFIRSTSUB": return {isActiveFirstSub: action.payload};
        case "SHOWSECONDSUB": return {isActiveSecondSub: action.payload};
        case "SHOWFIRSTBUTTON": return {isActiveFirstModal: action.payload};
        default: return state;
    }
}

const store = createStore(reducer);

export default store;