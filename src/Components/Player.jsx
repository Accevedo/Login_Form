import React from 'react'

const Player = ({PlayerUser, setPlayerUser, deleteUser}) => {
    //console.log(PlayerUser)
const {Nombre, Email, Date, ID, Password, Confirmando} =  PlayerUser;

function handleDelete(){
    const answer =  confirm("Do you want elimante this register");
    if(answer){
        deleteUser(ID);
    }
}
 
  return (
    <>
    <div className="flex bg-white text-black rounded-lg hover:bg-black 
     hover:text-slate-200 border-2 mb-3 cursor-pointer regiters 
     transition duration-300 ease-in-out">
        
            <div className='p-5 w-full  lg:w-2/5 border-2 mx-auto'>
                <h2 
                    className="text-xl font-bold newFont mb-2 titulo">
                    User Infromation
                </h2>
                {/*  ################  Name   ################### */}
                <div className="mb-2">
                <label htmlFor="Name"
                className="fontForm font-bold">
                    Name:</label> {" "}
                <span className=" text-lg">{Nombre}</span>
                </div>
                {/*  ################  EMAIL   ################### */}
                <div className="mb-2">
                <label htmlFor="Email"
                className="fontForm font-bold">
                    Email:</label> {" "}
                <span className=" text-lg">{Email}</span>
                </div>
                {/*  ################  Date   ################### */}
                <div className="mb-2">
                <label htmlFor="Email"
                className="fontForm font-bold">
                    Register Date:</label> {" "}
                <span className=" text-lg">{Date}</span>
                </div>
               {/*  ################  ID   ################### */}
                <div className="mb-2">
                <label htmlFor="Email"
                className="fontForm font-bold">
                    yourUserID:</label> {" "}
                <span className=" text-lg">{ID}</span>
                </div>
                 {/* Botones para eliminar y editar */}
                <div className='grid grid-rows-2 gap-4'>
                    {/* boton para editar */}
                <button className='bg-orange-500 rounded-lg p-3' 
                onClick={() => setPlayerUser(PlayerUser)}>
                    Editar
                </button>

                   {/* Boton eliminar  */}
                <button className=' bg-red-600 rounded-lg'
                onClick={handleDelete}>
                    Eliminar
                </button>
                </div>
            </div>


            <div className='w-3/5  imgenFondoRegister h-96 ocultarFotoRegistro'>
                      

            </div>
    </div>
    </>
  )
}

export default Player