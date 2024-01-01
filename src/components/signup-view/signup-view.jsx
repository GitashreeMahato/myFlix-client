import { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from 'react-router-dom';
// import { BsFillPersonFill } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiFillLock } from 'react-icons/ai';
// import { MdEmail } from 'react-icons/md';
// import { FaBirthdayCake } from 'react-icons/fa';
import "./signup-view.scss";
import { API_URL } from "../../config";

const SignupView = ({ user })=>{
  useEffect(() => {
    if (!user) {
      document.body.classList.add('signup-backdrop');
    } else {
      document.body.classList.remove('signup-backdrop');
    }
  });
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[birth_date, setBirth_Date] = useState("");
    const [controlPassword, setControlPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // const data = {
            
        //     username : username,
        //     password : password,
        //     email: email,
        //     birth_date: birth_date
        // }

        if (password === controlPassword) {
            var data = {
              username: username,
              password: password,
              email: email,
              birth_date: birth_date
            };
          } else {
            // Toast.fire({
            //   icon: 'error',
            //   title: "sorry passwords don't match try again"
              alert("sorry passwords don't match try again")
            // });
            return;
          }
        fetch(API_URL + "/users",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if(response.ok){
                alert("Signup successful");
                // window.location.reload();
                <Navigate to="/login" replace />
            }else{
                alert("Signup failed")
            }
        })
    };

//returns a signup form
return (
    <Form id='box-signup' onSubmit={handleSubmit}>
      <div id='form-signup'>
        <h2 className='font-style signup-header p-2'>Signup</h2>
        <Container id='form-position'>
          <Form.Group controlId='formUsername'>
            <Form.Label></Form.Label>
            <InputGroup>
              <Form.Control
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength='10'
                placeholder='Username'
              />
                {/* <InputGroup.Text id='input-style-signup'>
                    <BsFillPersonFill size={25} className='user-icon' />
                </InputGroup.Text> */}
            </InputGroup>
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label></Form.Label>
            <InputGroup>
              <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength='10'
                placeholder='Password'
              />
              </InputGroup>
              {/* <InputGroup.Text id='input-style-signup'>
                <AiFillLock size={25} className='user-icon' />
              </InputGroup.Text> */}
              <Form.Group controlId='formControlPassword' >
                <Form.Label></Form.Label>
                <InputGroup>
                  <Form.Control
                    type='password'
                    value={controlPassword}
                    onChange={(e) => setControlPassword(e.target.value)}
                    placeholder='Confirm Password'
                    minLength='10'
                  />
                  {/* <InputGroup.Text id='input-style-update-user'>
                    <AiFillLock size={25} className='user-icon' />
                  </InputGroup.Text> */}
                </InputGroup>
              </Form.Group>
            
          </Form.Group>
          <Form.Group controlId='formEmail'>
            <Form.Label></Form.Label>
            <InputGroup>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Email'
              />
              {/* <InputGroup.Text id='input-style-signup'>
                <MdEmail size={25} className='user-icon' />
              </InputGroup.Text> */}
            </InputGroup>
          </Form.Group>
          <Form.Group controlId='formBirthday'>
            <Form.Label></Form.Label>
            <InputGroup>
              <Form.Control
                type='date'
                value={birth_date}
                onChange={(e) => setBirth_Date(e.target.value)}
                required
                placeholder='Birthday'
              />
              {/* <InputGroup.Text id='input-style-signup'>
                <FaBirthdayCake size={25} className='user-icon' />
              </InputGroup.Text> */}
            </InputGroup>
          </Form.Group>

          <Button
            className='p-1 mt-4 col-8 font-style' 
            style={{marginLeft: "42px"}}          
            variant='btn btn-danger'
            type='submit'
          >
            Get Started
          </Button>
        </Container>
          <Link to={'/login'} className='link-style-signup font-style mt-3'
          >
          Already a member?
        </Link>
      </div>
    </Form>
  );
};
  
export {SignupView};
















































// ==================================================for my reference


// return (
    //     <Form id='box-signup' onSubmit={handleSubmit}>
    //         <Form.Group controlId= "formUsername" class="col-md-5 mb-3">
    //             <Form.Label>Username:</Form.Label>
    //             <Form.Control 
    //             type="text"
    //             value={username}
                
    //             onChange={(e)=> setUsername(e.target.value)}
    //             required minLength="4" placeholder="Username"/>
    //         </Form.Group>
    //         <Form.Group controlId= "formPassword" class="col-md-5 mb-3">
    //             <Form.Label>Password:</Form.Label>
    //             <Form.Control 
    //             type="text"
    //             value={password}
    //             onChange={(e)=> setPassword(e.target.value)}
    //             required placeholder="Password"/>
    //         </Form.Group>
    //         <Form.Group controlId= "formEmail" class="col-md-5 mb-3">
    //             <Form.Label>Email:</Form.Label>
    //             <Form.Control 
    //             type="email"
    //             value={email}
    //             onChange={(e)=> setEmail(e.target.value)}
    //             required placeholder="Email" />
    //         </Form.Group>
    //         <Form.Group controlId= "formBirthDate" class="col-md-5 mb-3">
    //             <Form.Label>Date of Birth:</Form.Label>
    //             <Form.Control 
    //             type="date"
    //             value={birth_date}
    //             onChange={(e)=> setBirth_Date(e.target.value)}
    //             />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">Submit</Button>
    
    //         {/* </Form> */}
    //         {/* <label htmlFor="">Username:
    //         <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
    //         </label>
    //         <label htmlFor="">Password:
    //         <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    //         </label>
    //         <label htmlFor="">Email:
    //         <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    //         </label>
    //         <label htmlFor="">DoB:
    //         <input type="date" value={birth_date} onChange={(e)=>{setBirth_Date(e.target.value)}} />
    //         </label>
    //       <button type="submit">Submit</button> */}
    //     </Form>
    //   );
    // };

