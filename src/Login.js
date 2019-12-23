import React from 'react';
import fire from './fire';

class Login extends React.Component{

Login =() =>{
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email,password)
    .then((u)=>{
        console.log('sucessfully loggedIn');
    }).catch((err)=>{
        console.log("Error : "+ err.toString(err));
    })
}

Signup =() =>{
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email,password)
    .then((u)=>{
        console.log('signed up sucessfully');
    }).catch((err)=>{
        console.log("Error : "+ err.toString(err));
    })
}

    render(){
        return(
            <div>
            <div>
                <h3 style={{"color":"blue"}} className="sans">Login Here!!</h3><br/>
            </div>
                <input type="email" placeholder=" Email" id="email" className=""/><br/><br/>
                <input type="password" placeholder=" Password" id="password" /><br/><br/>
                <button type="button" className="btn btn-primary  px-md-4 mr-2" onClick={this.Login}>Login</button>
                <button type="button"  className="btn btn-primary  px-md-4 ml-2" onClick={this.Signup}>Signup</button>
            </div>
        )
    }
}


export default Login;