import { useState } from "react"

import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";

function Signup({setCurrentUser}){
    //state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState ('')
    
    //Event //
    function handleSubmit(e){
        e.preventDefault()

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({username, password})
          })
          .then(response => {
            if (response.ok) {
              response.json()
              .then(newUser => setCurrentUser(newUser) )
              console.log(username)
            } else {
              alert("Signup unsuccessful")
            }
          })
        }

    
    //Render
    return(
      <Paper>
        <form className="user-form" onSubmit={handleSubmit}>

            <input 
            className='input-field'
            type="text"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder='Username'
            />

            <input 
            className='input-field'
            type="text"
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            />

            <Button>
            <input 
            type="submit"
            value="signup"
            />
            </Button>
        </form>
      </Paper>
    )
}

export default Signup