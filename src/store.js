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
    lastRouteMenu: "",
    isCreateFolderShown: false,
    isDeleteFileShown: false,
    deleteFileId: "",
    newFolder: {
        name: "",
        id: "",
        folderId: "",
        landId: ""
    },
    selectedTypeOfAccount: {},
    selectedRoom: {},
    selectedMapAreaNumber: 1
}
function reducer(state = initialState, action) {
    switch(action.type) {
        case "USERDATA": return {userData: action.value};
        case "CHOOSEROUTER": return {router: action.value};
        case "SETUSERIMAGE": return {userImage: action.payload};
        case "LASTROUTEMENU": return {lastRouteMenu: action.payload};
        //First user enter to site//
        case "SHOWFIRSTDIALOG": return {firstDialog: action.payload};
        case "SHOWSECONDDIALOG": return {secondDialog: action.payload};
        case "SHOWBUTTON": return {showButton: action.payload};
        case "LASTROUTE": return {lastRoute: action.payload};
        case "SHOWFIRSTSUB": return {isActiveFirstSub: action.payload};
        case "SHOWSECONDSUB": return {isActiveSecondSub: action.payload};
        case "SHOWFIRSTBUTTON": return {isActiveFirstModal: action.payload};

        //LegacyBoxStates//
        case "CREATEFOLDERSHOWN": return {isCreateFolderShown: action.payload};
        case "DELETEFOLDERFILEMODALBOX": return {isDeleteFileShown: action.payload};
        case "DELETEDFILEID": return {deleteFileId: action.payload};
        case "NEWFOLDER": return {newFolder: action.payload};
        case "SET_SELECTED_TYPE_OF_ACCOUNT": return { ...state, selectedTypeOfAccount: action.payload };
        case "SET_SELECTED_ROOM": return { ...state, selectedRoom: action.payload }
        case "SET_SELECTED_MAP_AREA_NUMBER": return { ...state, selectedMapAreaNumber: action.payload }
        default: return state;
    }
}

const store = createStore(reducer);

export default store;