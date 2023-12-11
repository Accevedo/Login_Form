import React from 'react'
import Player from './Player'

const RegisterList = ({Players,  setPlayerUser, deleteUser}) => {
        //console.log(Players);
  
    return (
    <>

    {Players.length   ?   <div className='mt-3 mb-3'>
        <h2 className="text-center text-3xl text-white mb-2 mt-2 newFont">
            All our registrations
        </h2>
          {Players.map(PlayerUser => {
            return(

                <Player
                 key={PlayerUser.ID}
                 PlayerUser = {PlayerUser}
                 setPlayerUser = {setPlayerUser}
                 deleteUser = {deleteUser}
                />
            )
            

          })}

      </div>  : 
      
         <div className='mt-3'> 
           <h2 className=' text-white text-3xl text-center newFont'>
            There are not registration yet, Add one!!
            </h2>
         </div>
      
      }
      
    </>
  )
}

export default RegisterList