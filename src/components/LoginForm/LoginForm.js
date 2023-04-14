import React from "react";
import styles from "./LoginForm.module.css"
const LoginForm = () => {
    const [user,userDispatch] = React.useReducer()
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const submitHandler = (event) => {
        event.preventDefault()
        const user = {
            email: email,
            password: password
        }
        console.log(user)
        setEmail("")
        setPassword("")
    };

    return (
        <form className={styles.styledForm} onSubmit={submitHandler}>
            <label>Email</label>
            <input
                name={"email"}
                type={"text"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            <label>Password</label>
            <input
                name={"password"}
                type={"password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            <button type={"submit"}>Login</button>
        </form>
    )
}

export default LoginForm;