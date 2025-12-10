import { useState } from "react";

const Form = () => {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

 const handlesubmit=(event)=>{
     event.preventDefault();
      const formdata={
          email,
          password
      };
 console.log(formdata);
  setemail('');
  setpassword('');
 }

  return (
    <div>
      <form onSubmit={handlesubmit}>
          <br/><br/>
          <input type="email" name="email" id="email"  placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
          <br/><br/>
          <input type="password" name="password" id="password" placeholder="password"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
          <br/><br/>
          <button type="submit"> submit</button>
      </form>
    </div>
  )
}

export default Form