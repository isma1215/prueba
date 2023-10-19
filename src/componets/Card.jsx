import { useState } from 'react'
import './Card.css'

export default function Card({user}){
    const [seguir , setSeguir] = useState(false)

    const handleClick=(e)=>{
        setSeguir(!seguir)
    }

    return(
        <>
        <div  className={user.isAdminUser? ("card card-admin"):("card")}>
            <img className="img-user" src={user.profileImg}></img>
            <div className='data-user'>
                <h5>{user.userName}</h5>
                <p>{user.description}</p>
                <p className ="seguir" onClick={handleClick}> {seguir?"- Eliminar":" +Seguir"} </p>
            </div>
            
        </div>
        </>
    )
}