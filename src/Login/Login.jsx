import { useState } from "react";

const  Login = () => {
    
    const [username, setUsername] = useState('Enter username');
    const [password, setPassword] = useState('Enter password');

return(

    <form>
        <label htmlFor = "username"> Username: &nbsp;</label>
        <input type = "text" name = "username" value = {username} onChange = {event => setUsername(event.target.value)} />
        <label htmlFor = "password"> Password: &nbsp;</label>
        <input type = "text" name = "password" value = {password} onChange = {event => setPassword(event.target.value)} />        
        <br/>
        <input type = "submit" value = "Enter"/>

    </form>

)

}

export default Login;