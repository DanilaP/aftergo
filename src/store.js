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
    changeFileName: false,
    changeFolderName: false,
    changeLegacyBoxName: false,
    selectedTypeOfAccount: {},
    selectedRoom: {},
    selectedMapAreaNumber: 1,
    selectedTombStone: {},
    allPrivelegiusForActiveTariff: [],
    imageSliderShown: false,
    videoShown: false
}
function reducer(state = initialState, action) {
    switch(action.type) {
        case "USERDATA": return { ...state, userData: action.value};
        case "CHOOSEROUTER": return { ...state, router: action.value};
        case "SETUSERIMAGE": return { ...state, userImage: action.payload};
        case "LASTROUTEMENU": return { ...state, lastRouteMenu: action.payload};
        //First user enter to site//
        case "SHOWFIRSTDIALOG": return { ...state, firstDialog: action.payload};
        case "SHOWSECONDDIALOG": return { ...state, secondDialog: action.payload};
        case "SHOWBUTTON": return { ...state, showButton: action.payload};
        case "LASTROUTE": return { ...state, lastRoute: action.payload};
        case "SHOWFIRSTSUB": return { ...state, isActiveFirstSub: action.payload};
        case "SHOWSECONDSUB": return { ...state, isActiveSecondSub: action.payload};
        case "SHOWFIRSTBUTTON": return { ...state, isActiveFirstModal: action.payload};

        //LegacyBoxStates//
        case "CREATEFOLDERSHOWN": return { ...state, isCreateFolderShown: action.payload};
        case "DELETEFOLDERFILEMODALBOX": return { ...state, isDeleteFileShown: action.payload};
        case "DELETEDFILEID": return { ...state, deleteFileId: action.payload};
        case "NEWFOLDER": return { ...state, newFolder: action.payload};

        case "CHANGEFILENAME": return {changeFileName: action.payload};
        case "CHANGEFOLDERNAME": return {changeFolderName: action.payload};
        case "CHANGELEGACYBOXNAME": return {changeLegacyBoxName: action.payload};
        case "SET_SELECTED_TYPE_OF_ACCOUNT": return { ...state, selectedTypeOfAccount: action.payload };
        case "SET_SELECTED_ROOM": return { ...state, selectedRoom: action.payload };
        case "SET_SELECTED_MAP_AREA_NUMBER": return { ...state, selectedMapAreaNumber: action.payload };
        case "SET_SELECTED_TOMBSTONE": return { ...state, selectedTombStone: action.payload };
        case "SET_ALL_PREVELEGIOS_FOR_ACTIVE_TARIFF": return { ...state, allPrivelegiusForActiveTariff: action.payload };
        case "IMAGESLIDERSHOWN": return {...state, imageSliderShown: action.payload};
        case "VIDEOSHOWN": return {...state, videoShown: action.payload};
        default: return state;
    }
}

const store = createStore(reducer);

export default store;