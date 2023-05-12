import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [userEmail, updateEmail] = useState("");
  const [userPassword, updatePassword] = useState("");
  const [terms, updateTerms] = useState(false);
  const [msg, updateMsg] = useState('')

  const submitFormClicked = async event => {
    event.preventDefault();
    if (userEmail !== '' && userPassword !== '' && terms === true){
      const formData = {
        email: userEmail,
        password: userPassword
      }
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
          'Content-Type' : 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
      updateMsg(data)
      updateEmail('')
      updatePassword('')
      updateTerms(false)
    }else{
      alert("Please Fill the form and Agree T&C")
    }
  }

  return (
    <div className="d-flex flex-col justify-content-center align-items-center w-100 min-vh-100">
      <form onSubmit={submitFormClicked} className="shadow-lg p-5 m-5 h-25 rounded-2">
        <h1>Registration Form</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={event => {updateEmail(event.target.value) , updateMsg('')}}
            value={userEmail}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={event => {updatePassword(event.target.value) , updateMsg('')}}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={userPassword}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={terms}
            onChange={() => {updateTerms(!terms), updateMsg('')}}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Are you agree with our Terms & Condition.
          </label>
        </div>
        <button onClick={submitFormClicked} type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="mt-3 text-primary">{msg}</p>
      </form>
    </div>
  );
}

export default App;
