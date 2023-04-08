
import React, { useEffect, useState } from "react"
import axios from "axios"
import UserCard from "./UserCard";

const UserList =()=>{
const [user,setUser]=useState([])
console.log(user);
const getData =()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      setUser(response.data)
    })
    .catch((err)=>{
        console.log(err);
    })
}
useEffect(()=>{
getData()
},[])

return (
<div>
    {user.map((el,index)=>{
        return(
            <UserCard  use={el} key={index}/>
        )
      
    })}
</div>

)
}
export default UserList