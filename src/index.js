import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstWindow from './Components/FirstWindow/firstWindow';
import LogInFirst from './Components/LogInFirst';
import RegistrationForGift from './Components/RegistrationForGift';
import ForgetPasswordFirst from './Components/ForgetPasswordFirst';
import ForgetPasswordCode from './Components/ForgetPasswordCode';
import CreatePassword from './Components/createPassword';
import ChooseLandMenu from './Components/LegacyBoxComponents/ChooseLandMenu';
import OrderNewLand from './Components/LegacyBoxComponents/OrderNewLand/OrderNewLand';
import ChoosePlace from './Components/LegacyBoxComponents/ChoosePlace/ChoosePlace';
import ChooseTombstone from './Components/LegacyBoxComponents/ChooseTombstone/ChooseTombstone';
import ChooseLegacyRoom from './Components/LegacyBoxComponents/ChooseLegacyRoom';
import CustomDesignLegacyRoom from './Components/LegacyBoxComponents/CustomDesignLegacyRoom';
import Support from './Components/LegacyBoxComponents/Support';
import LegacyBoxSettingFULL from './Components/LegacyBoxComponents/LegacyBoxSettingFull/LegacyBoxSettingFULL';
import LegacyBoxFriendData from './Components/LegacyBoxComponents/LegacyBoxFriendData';
import CustomTombstoneDesign from './Components/LegacyBoxComponents/CustomTombstoneDesign';
import EmailConfirmation from './Components/LegacyBoxComponents/EmailConfirmationForBuying';
import SecondWindow from './Components/secondWindow';
import Profile from './Components/ProfileComponents/Profile';
import ProfileNetworkConnection from './Components/ProfileComponents/ProfileNetworkConnection';
import SecondWindowMenu from './Components/secondWindowMenu';
import Cropper from './Components/ProfileComponents/Cropper';
import FirstSubtitleComponent from './Components/FirstEnterComponents/FirstSubtitleComponent';
import SecondSubtitleComponent from './Components/FirstEnterComponents/SecondSubtitleComponent';
import ContinueButton from './Components/FirstEnterComponents/ContinueButton';
import FirstEnterMenu from './Components/FirstEnterComponents/FirstEnterMenu';
import LegacyBox from './Components/UserLegacyBox/LegacyBox';
import DeleteFileModalBox from './Components/UserLegacyBox/DeleteFileModalBox';
import CreateFolderBox from './Components/UserLegacyBox/CreateFolderBox';
import ChooseLand from './Components/LegacyBoxComponents/ChooseLand/ChooseLand';
import MyPersonalData from './Components/LegacyBoxComponents/MyPersonalData/MyPersonalData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/FirstWindow" element={<FirstWindow/> }/>
          <Route path="/SecondWindow" element={<SecondWindow/>}/>
          <Route path="/LogInFirst" element={<LogInFirst/>}/>
          <Route path="/RegistrationForGift" element={<RegistrationForGift/>}/>
          <Route path="/ForgetPasswordFirst" element={<ForgetPasswordFirst/>}/>
          <Route path="/ForgetPasswordCode" element={<ForgetPasswordCode/>}/>
          <Route path="/CreatePassword" element={<CreatePassword/>}/>
          <Route path="/LegacyBoxSettingFULL" element={<LegacyBoxSettingFULL/>}/>
          <Route path="/ChooseLandMenu" element={<ChooseLandMenu/>}/>
          <Route path="/OrderNewLand" element={<OrderNewLand/>}/>
          <Route path="/ChoosePlace" element={<ChoosePlace/>}/>
          <Route path="/ChooseTombstone" element={<ChooseTombstone/>}/>
          <Route path="/ChooseLegacyRoom" element={<ChooseLegacyRoom/>}/>
          <Route path="/CustomDesignLegacyRoom" element={<CustomDesignLegacyRoom/>}/>
          <Route path="/Support" element={<Support/>}/>
          <Route path="/LegacyBoxFriendData" element={<LegacyBoxFriendData/>}/>
          <Route path="/CustomTombstoneDesign" element={<CustomTombstoneDesign/>}/>
          <Route path="/EmailConfirmation" element={<EmailConfirmation/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/ProfileNetworkConnection" element={<ProfileNetworkConnection/>}/>
          <Route path="/SecondWindowMenu" element={<SecondWindowMenu/>}/>
          <Route path="/Cropper" element={<Cropper/>}/>
          <Route path="/FirstSubtitles" element={<FirstSubtitleComponent/> }/>
          <Route path="/SecondSubtitles" element={<SecondSubtitleComponent/> }/>
          <Route path="/ContinueButton" element={<ContinueButton/> }/>
          <Route path="/FirstEnterMenu" element={<FirstEnterMenu/> }/>
          <Route path="/LegacyBox" element={<LegacyBox/> }/>
          <Route path='/DeleteFileModalBox' element={<DeleteFileModalBox/> }/>
          <Route path='/CreateFolderBox' element={<CreateFolderBox /> }/>
          <Route path='/ChooseLand' element={<ChooseLand /> }/>
          <Route path='/MyPersonalData' element={<MyPersonalData /> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

