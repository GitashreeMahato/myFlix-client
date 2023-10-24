import { useState } from "react";
import { Button, Form } from "react-bootstrap";
const SignupView = ()=>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[birth_date, setBirth_Date] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            
            username : username,
            password : password,
            email: email,
            birth_date: birth_date
        }
        fetch("https://user-movies-b3ba594615fa.herokuapp.com/users",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if(response.ok){
                alert("Signup successful");
                window.location.reload();
            }else{
                alert("Signup failed")
            }
        })
    };

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId= "formUsername" class="col-md-5 mb-3">
            <Form.Label>Username:</Form.Label>
            <Form.Control 
            type="text"
            value={username}
            
            onChange={(e)=> setUsername(e.target.value)}
            required minLength="4" placeholder="Username"/>
        </Form.Group>
        <Form.Group controlId= "formPassword" class="col-md-5 mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control 
            type="text"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required placeholder="Password"/>
        </Form.Group>
        <Form.Group controlId= "formEmail" class="col-md-5 mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control 
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required placeholder="Email" />
        </Form.Group>
        <Form.Group controlId= "formBirthDate" class="col-md-5 mb-3">
            <Form.Label>Date of Birth:</Form.Label>
            <Form.Control 
            type="date"
            value={birth_date}
            onChange={(e)=> setBirth_Date(e.target.value)}
            />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>

        {/* </Form> */}
        {/* <label htmlFor="">Username:
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </label>
        <label htmlFor="">Password:
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </label>
        <label htmlFor="">Email:
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </label>
        <label htmlFor="">DoB:
        <input type="date" value={birth_date} onChange={(e)=>{setBirth_Date(e.target.value)}} />
        </label>
      <button type="submit">Submit</button> */}
    </Form>
  );
};
export {SignupView};