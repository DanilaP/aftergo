import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $api from './Components/Axios';

function App() {
  const history = useNavigate();
    useEffect(() => {
      if(localStorage.getItem("userToken")) {
        $api.get('http://aftergo-dev.eastus.azurecontainer.io:3000/api/auth/me')
        .then((response) => {
          if (response.data !== null) {
            history("/SecondWindowMenu");
          }
          else {
            history("/SecondWindow");
          }
        })
        .catch((error) => {
          localStorage.removeItem("userToken");
          history("/SecondWindow");
        })
      }
      else {
        history("/SecondWindow");
      }
    }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
