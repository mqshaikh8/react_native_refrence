import React, {useState} from "react";

function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    let handleLogin = (evt) => {
        evt.preventDefault()  
        console.log(name)
        fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password
            })
        })
        .then(res => res.json())
        .then(credentials =>{
            
            if(credentials.error){
                console.log("AAAAAAhhhh, you screwed up something that was so easy")
            }else if(credentials.found){
                console.log("Baaam What!!")
            }
            console.log("sofbwibvowfbnvikwrbviwrbnvolnvw")
        })
    }
  
return(
    <form onSubmit={handleLogin} className="loginForm">
        <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
            Password:
            <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
            <input type="submit" value="Submit"  />
    </form>
)
}

export default Login