import React, { useEffect, useState } from 'react'
import Warning from './Warning';


const Form = ({Players, setPlayers, PlayerUser, setPlayerUser}) => {

//variables del formulario

function getID(){
      const unique =  Math.random().toString().substring(3)

      return unique
}

    const [Nombre, setNombre] =  useState("");
    const [Email, setEmail] =  useState("");
    const [Date, setDate] =  useState("");
    const [Password, setPassword] =  useState("");
    const [Confirmando, setConfirmando] =  useState("");


    const[error,  setError] = useState(false);

   useEffect(() => {

    if(Object.keys(PlayerUser).length > 0){

        setNombre(PlayerUser.Nombre);
        setEmail(PlayerUser.Email);
        setDate(PlayerUser.Date);
        setPassword(PlayerUser.Password);
        setConfirmando(PlayerUser.Confirmando)
    }
     
   }, [PlayerUser])

  

    const handleSubmit = (e) => {
         e.preventDefault()

         //Validando form
         if([Nombre,Email,Date,Password,Confirmando].includes("")){
            console.log("todos los campos deben estar llenos")
            setError(true)
            return
         }
            console.log("gracias por los datos suministrados")
            setError(false)
         


         //Lista de Jugadores 
         const listPlayers =  {
            Nombre: Nombre,
            Email : Email,
            Date : Date,
            Password : Password,
            Confirmando : Confirmando,
            
            
         }



         if(PlayerUser.ID){
            listPlayers.ID =   PlayerUser.ID
            const PlayerUpdating  = Players.map((PlayersUpdate) => {

               return(
                    
                PlayersUpdate.ID === PlayerUser.ID ?  listPlayers : PlayersUpdate

               )

            })


            setPlayers(PlayerUpdating);
            setPlayerUser({});
            
         }else{
             console.log("Add new register")
             listPlayers.ID =  getID();
             setPlayers([...Players, listPlayers]);
         }


        


         //Resetear form 
         setNombre("");
         setEmail("");
         setDate("");
         setPassword("")
         setConfirmando("")

    }

  return (
    <>
    {/* DIV PADRE */}   
      <div className= "flex text-center  rounded-lg  p-3  lg:opacity-80 lg:hover:opacity-100" >
            {/* <h2>Join Us to be part of something Biger </h2> */}
            {/* Div del formulario */}
            <div className=" lg:w-2/5 p-5 mx-auto bg-slate-900">
              <form action=""
              onSubmit={handleSubmit}>
                {/* ##########NaME@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                {error && <Warning>Debes llenar todos los campos</Warning>}
                <label htmlFor="Name" className="block text-start font-bold mb-3 text-white fontForm">
                    Name:
                </label>
                <input type="text" name="Name" id="Name" 
                className=" rounded-md w-full py-1 px-3 mb-10 font-bold"
                placeholder='YourName'
                value={Nombre}
                onInput={e => setNombre(e.target.value)}
                />
                 {/* ##########  Email @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                <label htmlFor="Email" className="block text-start mb-3 text-white
                fontForm font-bold">
                    Email:
                </label>
                <input type="Email" name="Email" id="Email" 
                className=" rounded-md w-full py-1 px-3 mb-10 font-bold"
                value={Email}
                onInput={e => setEmail(e.target.value)}
                placeholder='Email@example.com'
                />

                <label htmlFor="Date" className="block text-start font-bold mb-3 text-white fontForm">
                    Register Date:
                </label>
                <input type="Date" name="Date" id="Date" 
                className=" rounded-md w-full py-1 px-3 mb-10 font-bold"
                value={Date}
                onInput={e => setDate(e.target.value)}
                placeholder='YourName'
                />
                  {/* ##########  password @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                  <label htmlFor="password" className="block text-start mb-3 text-white
                  fontForm font-bold fontForm">
                    Password:
                </label>
                <input type="password" name="password" id="password" 
                className=" rounded-md w-full py-1 px-3 mb-10"
                value={Password}
                onInput={e => setPassword(e.target.value)}
                placeholder='write a password'
                />

                 {/* ########## confirm password @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                 <label htmlFor="Confrimpassword" className="block text-start mb-3 text-white fontForm font-bold">
                    Confirm your Passwrod:
                </label>
                <input type="new-password" name="Confrimandopassword" id="Confrimandopassword" 
                className=" rounded-md w-full py-1 px-3 mb-10"
                value={Confirmando}
                onInput={e => setConfirmando(e.target.value)}
                placeholder='confirm Password'
                />
                {/* ####################### Submit buttom ###########################*/}
                 <input type="submit" value={Object.keys(PlayerUser).length > 0 ? "Editar" : "Submit"} 
                  className= "text-white border-2 border-red-500 w-full rounded-lg p-3 opacity-75 hover:opacity-100 hover:cursor-pointer font-bold hover:bg-red-700"
                 />
              </form>
            </div>
            {/* div de la imagen */}
            <div 
            className=" imgenFondo ocultar w-3/5 ">
                
            </div>
        
        </div>
    </>
  )
}

export default Form
