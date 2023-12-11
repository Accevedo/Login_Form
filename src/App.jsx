import { useEffect, useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'
import Player from './Components/Player'
import RegisterList from './Components/RegisterList'

import './App.css'

function App() {
  const [Players, setPlayers] = useState([]);
  const [PlayerUser, setPlayerUser] = useState({});


  // EliminarRegistro
  function deleteUser(ID){
      console.log("Deleting...")
           const userDeleted =  Players.filter(deluser => deluser.ID !== ID);
           setPlayers(userDeleted)
  }

  useEffect(() =>{
   function checkLocal(){
    const gettingLocal = JSON.parse(localStorage.getItem('Player')) ?? [];
    console.log( typeof gettingLocal)
    console.log( gettingLocal)
    setPlayers(gettingLocal)
   }
    
   checkLocal();

  }, []);

  useEffect(() =>{

     localStorage.setItem('Player', JSON.stringify(Players))

  }, [Player])

  return (
    <>
      <div className='p-5 md:w-4/5 m-auto'>
       <Header/>
       <Form
         Players = {Players}
         setPlayers = {setPlayers}
         PlayerUser = {PlayerUser}
         setPlayerUser = {setPlayerUser}
       />
       <RegisterList
       Players = {Players}
       setPlayerUser = {setPlayerUser}
       deleteUser = {deleteUser}
       />
      </div>
      
    </>
  )
}

export default App
