import {useState} from 'react'
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";


function Login({setCurrentUser}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({username, password})
          }).then(response => {
            if(response.ok) {
              response.json()
              .then(user => setCurrentUser(user))
            }else{
              alert('invalid username or password')
            }
          })
        }

    return (
      <Paper>
            <form className='user-form' onSubmit={handleSubmit}>

                <input 
                className='input-field' 
                type="text"
                onChange={e => setUsername(e.target.value)}
                value={username}
                placeholder='username'
                />

                <input 
                className='input-field' 
                type="text"
                onChange = {e => setPassword(e.target.value)}
                value={password}
                placeholder='password'
                />
                <Button>
                  <input 
                  type="submit"
                  value='Login'
                  />
                </Button>
                
            </form>

        </Paper>
    )
}

export default Login