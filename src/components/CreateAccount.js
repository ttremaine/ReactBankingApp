import React from "react";
import Card from "../Context";
import { UserContext } from "../App";

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const { userIndex, setUserIndex, state, dispatch } = React.useContext(UserContext);  
    
  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      alert("Error: " + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } else if (field === password && password.length < 8) {
      setStatus('Error: password must be at least 8 characters long')
      alert("Error: password must be at least 8 characters long");
      setTimeout(() => setStatus(''),3000);
      return false;
    } else
    return true;
  }

  function indexCounter() {
    let newIndex = userIndex + 1;
    setUserIndex(newIndex);
  }

 
  function handleCreate() {
    indexCounter();
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const newUser = {isCurrentUser:true, index: state.users.length, name, email, password, balance:100};
    dispatch( { type: "CREATE_USER", payload: {newUser} });
    //dispatch( { type: "LOGIN_USER", payload: { newUser } });
    setShow(false);
  }    

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  
  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" disabled={!name && !email && !password} onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}
  export default CreateAccount;