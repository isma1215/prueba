import Card from "./card";

export default function Cards({users}) {
    return(<>
        <h2>Cartas</h2>
        {users.map((user,index)=>{
            return <Card key={index} user={user}/>
        })}
        </>)
}