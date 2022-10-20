import { useState } from 'react';
import './Share.scss';
import $api from '../Axios';
import { useEffect } from 'react';

function Share({func, id, lvl}) {
  const [friendsEmail, setFriendsEmail] = useState();
  const [friendsArray, setFriendsArray] = useState([]);

  const addFriendToLegacyBox = async () => {
    let newFriend = {
      email: friendsEmail, 
      level: "view",
    }
    let array = friendsArray;
    array = [...friendsArray, newFriend];
    await $api.post('https://aftergo-api-dev.azurewebsites.net/api/lands/' + id + "/access", array)
    .then((response) => {
      setFriendsArray(response.data);
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const removeFriend = async (idElem) => {
    await $api.delete('https://aftergo-api-dev.azurewebsites.net/api/lands/' + id + '/access', {data: [{email: friendsArray[idElem].email}]})
    .then((response) => {
      console.log(response)
      setFriendsArray(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    $api.get('https://aftergo-api-dev.azurewebsites.net/api/lands/' + id + "/access")
    .then((response) => {
      setFriendsArray(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <div className="share">
        <div className="share__box">
            <div onClick={func} className="close__btn__share">x</div>
            <div className="big__text">SHARE LEGACY BOX</div>
            <div className="input__box__share">
                <input onChange={(e) => setFriendsEmail(e.target.value)} type = "text" placeholder='Email' />
                <div className='send__button'>
                    <button onClick={addFriendToLegacyBox}><b>SEND INVITE</b></button>
                </div>
            </div>
            <div className="small__text__share">
                <div>Everyone in this list has access to edit this legacy box content</div>
                <div className='number__of__friends'>You can invite {4 - friendsArray.length} of 4</div>
            </div>
            <div className="friends__box">
              {friendsArray.map((e, id) => {
                return (
                  <div className='friend'>
                    <div className='avatar'>

                    </div>
                    {e.email}
                    <div className="remove">
                      <div className="point">|</div>
                        <div onClick={() => removeFriend(id)} className='txt'>remove</div>
                      </div>
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  );
}

export default Share;


