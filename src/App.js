import React,{useState} from 'react';
import Tweet from './Tweet'


function App(){

  const [users,setUsers] = useState([

    {name:"David", message : "Missatge Hola"},
    {name:"Toni", message : "El meu primer missatge"},
    {name:"Arnau", message : "Estaba escoltant"}
  ]);

   return (
     <div className="app">
       {users.map(user =>(
         <Tweet name={user.name} message={user.message}/>
       ))}
     </div>    
   );
}

export default App;