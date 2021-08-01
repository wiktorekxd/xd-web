import React, { useState } from 'react'
import Login from './login/login'
import Register from './register/register'
import "./login-page.scss";

export default function LoginPage() {
    const [loginForm, setLoginForm] = useState(true)

    const currentForm = loginForm ? <Login setLoginForm={setLoginForm} /> : <Register setLoginForm={setLoginForm} />

    return (
        <div className="login-land-page">
            <div className="login-ctn">
                {currentForm}
            </div>
        </div>
    )
}
