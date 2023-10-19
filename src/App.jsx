import { useState } from 'react'
import './App.css'
import Card from './componets/card'
import Navbar from './componets/Navbar'
import LogginFrom from './componets/logginForm'
import Cards from './componets/Cards'


function App() {
let iniUsers = [
  {
      "userName": "Persona 1",
      "password": "Persona1",
      "email":"Persona1@gmail.com",
      "description": "Lorem ipsum sit amet",
      "isAdminUser": true,
      "profileImg": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  {
      "userName": "Persona 2",
      "password": "Persona2",
      "email":"Persona2@gmail.com",
      "description": "Descripcion del perfil de la segunda persona",
      "isAdminUser": false,
      "profileImg": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  {
      "userName": "Persona 3",
      "password": "Persona3",
      "email":"Persona3@gmail.com",
      "description": "Hola Mundo",
      "isAdminUser": false,
      "profileImg": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  {
      "userName": "Persona 4",
      "password": "Persona4",
      "email":"Persona4@gmail.com",
      "description": "Acabo de crear mi perfil!! Sigueme",
      "isAdminUser": true,
      "profileImg": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }
]
  const [users,setUsers]  = useState(iniUsers)
  const [userAuth, setUserAuth] = useState({})
  return (
    <>
    <Navbar userName={userAuth.userName} setUserAuth={setUserAuth} />
    {Object.keys(userAuth).length !== 0?(<Cards users ={users}/>):
    (<LogginFrom users={users} setUserAuth={setUserAuth} />)}
    
    </>
  )
}

export default App
