import React from "react";
import Card from "../Context";
import { UserContext } from "../App";

function Deposit() {  
    const { state, dispatch } = React.useContext(UserContext);
    const [depositNum, setDepositNum] = React.useState('');
    const [status, setStatus] = React.useState('');
    const currentIndex = state.users.length-1;
    const currentUser = state.users[currentIndex];
    const [currentBalance, setCurrentBalance] = React.useState(currentUser.balance);
   
    function validate(field){ 
      if (isNaN(field)) {
        setStatus('Error: Not a number');
        alert('Error: Not a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if (!field || field === 0) {
        setStatus('Error: No amount entered');
        alert('Error: No amount entered');
        setTimeout(() => setStatus(''),3000);
        return false; 
      } else if (field < 0) {
        setStatus('Error: Negative amount entered');
        alert('Error: Negative amount entered');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    return true;
  }

    function clearForm() {
      setDepositNum('');
      setStatus('Success: Your deposit has been received');
      setTimeout(() => setStatus(''),3000);
    }
    
    function handleDeposit() {
      let depositNumFloat = parseFloat(depositNum);
      if (!validate(depositNumFloat))     return;
      let newBalance = currentUser.balance + depositNumFloat;
      setCurrentBalance(newBalance);
      dispatch( { type: "UPDATE_BALANCE", payload: { newBalance } } );
      clearForm();
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={
              <div>
                <h5>Current Balance: {currentBalance}</h5><br />
                <div className="input-group mb-3">
                  <input type="input" className="form-control" id="depositNum" placeholder="Enter amount" value={depositNum} onChange={e => setDepositNum(e.currentTarget.value)} />
                </div>
                  <button type="submit" className="btn btn-light" disabled={!depositNum} onClick={handleDeposit}>Deposit</button>
              </div>
              }
      />
    )
}
export default Deposit;