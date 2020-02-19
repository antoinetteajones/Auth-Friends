import React from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';

class Login extends React.Component{

    state = {
            creds: {
                username: "",
                password: ""
            },
            isLoading: false
        }
    handleChange = e => {
            this.setState({
                creds:{
                    ...this.state.creds,
                    [e.target.name]: e.target.value
                }
            })
        }

    login = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.creds)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.PaymentResponse.history.push("/protected")
        })
        .catch(err => console.log(err.response))
    };
   render(){
    return this.state.isLoading ? (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        />) : (
        <div>
        <form onSubmit ={this.login}>
        <label>Username</label>
        <input 
        type ="text"
        name ="username"
        value = {this.state.creds.username}
        onChange = {this.handleChange}
        />

        <label>Password</label>
        <input 
        type="text"
        name ="password"
        value = {this.state.creds.password}
        onChange = {this.handleChange} />
        <button>Login</button>
        </form>
        </div>
        )
        
    }
}

export default Login;