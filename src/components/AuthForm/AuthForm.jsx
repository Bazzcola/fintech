import { useState } from 'react';
import { useFinTechContext } from '../../context/Context';

import './AuthForm.scss';

export const AuthForm = () => {
const { login } = useFinTechContext();
const [userData, setUserData] = useState({
    user:null,
    password:null,
})

const setName = (value) => {
    setUserData({...userData, user: value})
}

const setPassword = (value) => {
    setUserData({...userData, password: value})
}

console.log(userData,'123')

return (<div className="auth-container">
            <div className="auth-form">
                <h2>Sign in</h2>
                <input placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => login(userData)}>Login</button>
            </div>
    </div>)
}