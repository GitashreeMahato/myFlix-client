import { Link, Navigate } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
// import { MovieCard } from '../movie-card/movie-card';
import { Button, Card } from 'react-bootstrap';
import './profile-view.scss';
import { FaUserEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { API_URL } from '../../config';

export const ProfileView = ({ user, token, loggedOut }) => {
  //function to do a delete request and delete the users account
  const deleteAccount = () => {
    fetch(`${API_URL}/users/${user.username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          //custom ui alert for a user deleting their account
          Swal.fire({
            title: "Are you sure you want to delete your account?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Deleted!",
                "Your account has been deleted.",
                "success"
              );
              // window.location.replace("/login"  );
              <Navigate to="/login" replace />
              loggedOut();
            }
          });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Container id='profile-container'>
        <div className='mx-auto' id='box-profile-view'>
          <div id='form-signUp'>
            
            <Col className='mt-2'>
            <Link to={`/users/updateUser`} className="user-edit">
              <FaUserEdit size={50} />
            </Link>
              <Card.Text className='font-style'>
                Username: {user.username}
              </Card.Text>
            </Col>
            <Col className='mt-2'>
              <Card.Text className='font-style'>
                Birthday: {user.birth_date}
              </Card.Text>
            </Col>
            <Col className='mt-2'>
              <Card.Text className='font-style'>Email: {user.email}</Card.Text>
            </Col>

            
            {/* <Col>
            
            <Link to={`/users/updateUser`} className="user-edit">
              <span className='edit-user font-style'>Manage Profile</span>
            </Link>
            </Col> */}
            <Button
              className='delete-btn font-style'
              variant='btn btn-danger'
              onClick={() => {
                deleteAccount();
              }}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};








































// ==========================================


/* <Col className='mt-2'>
              <Link
                to={`/users/password-update`}
                id='password-link'
                className='pass-edit'
              >
                <FaUserLock size={55} />
              </Link>
              <Link
                to={`/users/password-update`}
                id='password-link'
                className='pass-edit'
              >
                <Card.Text className='font-style'>Update Password</Card.Text>
              </Link>
            </Col> */