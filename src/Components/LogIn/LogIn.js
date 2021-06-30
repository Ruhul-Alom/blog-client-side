import React from 'react'
import { Redirect, useHistory } from 'react-router-dom';

const LogIn = () => {
    const history=useHistory();
    const handleemail= (e) => {
        console.log("click");
        e.preventDefault();
      const  email= e.target.email.value;
      const  password= e.target.password.value;
      console.log(email, password);
      if(email=='test@test.com' && password=='#2021dev'){
        
        // <Redirect to='/admin'/>
        history.push('/allBlog');
      }
      else{
        alert('password may be incorrect')
      }
    }

    return (
        <div className="login-page container">
           
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
          <h2 className="text-center">Admin login</h2>
          <form onSubmit={handleemail}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control"name="password"  />
            </div>
            <button  type="submit" className="form-control" className="btn btn-primary w-100">submit</button>
          </form> 
        </div>
      </div>
      </div>
      
    )
}

export default LogIn
