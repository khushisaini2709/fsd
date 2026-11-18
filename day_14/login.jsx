import React from 'react';
const Login = () => {
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const loginHandler=()=>{
        console.log(email,password);
    }
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input 
      type="password" 
      placeholder="Enter your password" value={password} 
      onChange={(e)=>setPassword(e.target.value)} />
      <br></br>
      <button>Login</button>
    </div>
  );
}

export default Login;