import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import './update-user.scss';
import { API_URL } from '../../config';
import Swal from 'sweetalert2';

export const UpdateUser = ({ user, token, updatedUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setBirth_Date] = useState('');

  const handleSubmitUpdate = (event) => {
    event.preventDefault();

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    const data = {
      username: username,
      password: password,
      email: email,
      birth_date: birth_date
    };

    fetch(`${API_URL}/users/${user.username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          Toast.fire({
            icon: 'error',
            title: 'failed trying to change settings'
          });
          return false;
        }
      })
      .then((user) => {
        if (user) {
          Toast.fire({
            icon: 'success',
            title: 'Settings updated'
          });
          setTimeout(function () {
            <Navigate to="/profile" replace  />
            window.location.replace('/users');
          }, 2000);
          updatedUser(user);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Form
      className='mx-auto'
      id='box-update-user'
      onSubmit={handleSubmitUpdate}
    >
      <div id='form-update-user'>
        <h2>Edit Profile</h2>
        <Form.Group controlId='formNewPassword' className='mt-2 col-10'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength='7'
              placeholder='Username'
            />
            {/* <InputGroup.Text id='input-style-update-user'>
              <BsFillPersonFill size={25} className='user-icon' />
            </InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formPassword' className='mt-2 col-10'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              minLength='5'
            />
            {/* <InputGroup.Text id='input-style-update-user'>
              <AiFillLock size={25} className='user-icon' />
            </InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formEmail' className='mt-2 col-10'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            {/* <InputGroup.Text id='input-style-update-user'>
              <MdEmail size={25} className='user-icon' />
            </InputGroup.Text> */}
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formBirthday' className='mt-2 col-10'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='date'
              value={birth_date}
              onChange={(e) => setBirth_Date(e.target.value)}
              
            />
            {/* <InputGroup.  */}
          </InputGroup>
        </Form.Group>
        <Button className='mt-4 col-4' variant='btn btn-light' type='submit'>
          Save
        </Button>
        <Link to={'/profile'} className='link-style-update-user'>
          Back to Profile
        </Link>
      </div>
    </Form>
  );
};