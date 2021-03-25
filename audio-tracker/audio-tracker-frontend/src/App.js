import './App.css';
import React, {useEffect} from "react"
import API from "./API"
import {UserAtom} from "./atom"
import {useRecoilState} from "recoil"
import AudioDetail from './components/AudioDetails';

function App() {

  const [user, setUser] = useRecoilState(UserAtom)

  useEffect(()=>{

    API.get(`/users/2`)
    .then(res => setUser(res.data) )

  },[setUser])
  return (
    <div className="App">
      {user && <div>
        logged in as {user.name}
        <br/>
        {user.audios.map(a => <AudioDetail key={`audio${a.id}`} audio={a}/>)}
        </div>}
    </div>
  );
}

export default App;
