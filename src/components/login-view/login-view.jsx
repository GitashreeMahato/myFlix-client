import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const LoginView =({ onLoggedIn })=>{
    const [username, setUsername]= useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        // this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
    
        const data = {
            username: username,
            password: password,
            
        };
    
        fetch("https://user-movies-b3ba594615fa.herokuapp.com/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => {
          console.log("Login response: ", data);
          if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
          } else {
            alert("No such user");
          }
        })
        .catch((e) => {
          alert("Something went wrong");
        });
    } 
    return(

        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername" className="col-md-5 mb-3">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3" placeholder="Username" 
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="col-md-5 mb-4">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        // <form onSubmit={handleSubmit}>
        //     <label>
        //         Username: <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} required minLength={6}/>
        //     </label>
        //     <label >
        //         Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        //     </label>
        //     <button type="submit">Submit</button>
        // </form>
    );
};

export {LoginView};