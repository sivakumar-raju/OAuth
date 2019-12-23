import React from 'react';
import fire from './fire';

class Login extends React.Component{

    Logout = () =>{
      fire.auth().signOut();
    }

    render(){
        return(
            <div>
                {/* <h3>you are loggedIn...</h3>
                <button type="button"  className="btn btn-primary" onClick={this.Logout}>Logout</button> */}
            </div>
        )
    }
}


export default Login;