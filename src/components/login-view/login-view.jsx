import React from "react";
import { useState, useEffect } from "react";
import { Col, Row, Card, Button, Container, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';
import './login-view.scss';

const LoginView =({user, onLoggedIn })=>{

  useEffect(() => {
    if (!user) {
      document.body.classList.add('login-backdrop');
    } else {
      document.body.classList.remove('login-backdrop');
    }
  });
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

       <Form id='box-login' onSubmit={handleSubmit}>
        <div id='form-login'>
          <h2 className='font-style'>Sign In</h2>

      <Form.Group controlId="formUsername" className='mt-2 col-10' >
        {/* <Form.Label></Form.Label> */}
        <InputGroup>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="3" placeholder="Username" 
        />
        {/* <InputGroup.Text id="input-style-login">
        <BsFillPersonFill size={25} className='user-icon' />
        </InputGroup.Text> */}
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formPassword" className='mt-2 col-10' >
        <Form.Label></Form.Label>
        <InputGroup >
        <Form.Control 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required placeholder="Password"
        />
        {/* <InputGroup.Text id='input-style-login'>
                <AiFillLock size={25} className='user-icon' />
              </InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Label></Form.Label>
      <Button id='btn-login-nf'
            className='mt-4 col-5 font-style'
            type='submit'>
        Sign In
      </Button>

      <Row>
            <Col className='mt-5' >
            
              <span className='font-style-new-to'>New to myFlix?</span>{' '}
              <Link to={'/signup'} className='link-style-login font-style'>
                Signup now
              </Link>
              
            </Col>
          </Row>

      </div>
    </Form>

        
    );
};

export {LoginView};
































// =====================================

//   <Container fluid onSubmit={handleSubmit}> 

    //   <Row className='d-flex justify-content-center align-items-center h-100'>
    //     <Col col='12'>

    //       <Card className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
    //         <Card.Body className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

    //           <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    //           <p className="text-white-50 mb-5">Please enter your login and password!</p>

    //           <Form.Control wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
    //           <Form.Control wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>

    //           <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
    //           <Button outline className='mx-2 px-5' color='white' size='lg'>
    //             Login
    //           </Button>

    //           <div className='d-flex flex-row mt-3 mb-5'>
    //             <Button tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               {/* <MDBIcon fab icon='facebook-f' size="lg"/> */}
    //             </Button>

    //             <Button tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               {/* <MDBIcon fab icon='twitter' size="lg"/> */}
    //             </Button>

    //             <Button tag='a' color='none' className='m-3' style={{ color: 'white' }}>
    //               {/* <MDBIcon fab icon='google' size="lg"/> */}
    //             </Button>
    //           </div>

    //           <div>
    //             <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

    //           </div>
    //         </Card.Body>
    //       </Card>

    //     </Col>
    //   </Row>

    // </Container>

    //=========================================

    // <form onSubmit={handleSubmit}>
        //     <label>
        //         Username: <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} required minLength={6}/>
        //     </label>
        //     <label >
        //         Password: <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        //     </label>
        //     <button type="submit">Submit</button>
        // </form>