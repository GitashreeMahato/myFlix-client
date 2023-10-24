import "./movie-view.scss";
import { Col, Row, Card, Button,Container } from "react-bootstrap";
import PropTypes from 'prop-types';
const MovieView = ({movie, onBackClick})=>{
    return (
        <Container>
            <Row>
                <Col>
                <Card className="shadow p-4 border-0">
                    <Row>
                        <Col>
                        <Card.Img className="m-2" src={movie.imageURL} />
                        </Col>
                        <Col>
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text><span className="text-title">Genre:</span>{movie.Description}</Card.Text>
                            <Card.Text><span className="text-title">Director:</span>{movie.Directors}</Card.Text>
                            <Card.Text><span className="text-title">Actor:</span>{movie.Actors}</Card.Text>
                            <Card.Text><span className="text-title">Release_Date:</span>{movie.Release_Date}</Card.Text>
                            <Card.Text><span className="text-title">Ratings:</span>{movie.Ratings}</Card.Text>
                            <Card.Text><span className="text-title">Featured:</span>{movie.Featured}</Card.Text>

                            <Button onClick={onBackClick}
            className="back-button" 
            style={{ cursor: "pointer" }}>Back</Button>
                        </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </Col>
            </Row>
        </Container>
        
    );
};

// MovieView.propTypes = {
//     movie: PropTypes.shape({
//         ImageURL: PropTypes.string.isRequired,
//       Title: PropTypes.string.isRequired,
//       Genre: PropTypes.string.isRequired,
//       Description: PropTypes.string.isRequired,
//       Director: PropTypes.string.isRequired,
//       Featured: PropTypes.bool.isRequired
//     }).isRequired,
//     onBackClick: PropTypes.func.isRequired
//   };
export {MovieView} ;












































// ============================================ For my Reference =======================================


/* <>
        <div>
            <img  className="w-100" />
        </div>
        <br />
        <div>
            <span>Title : </span>
            <span></span>
        </div>
        <div>
            <span>Description : </span>
            <span></span>
        </div>
        <div>
            <span>Genres : </span>
            <span></span>
        </div>
        <div>
            <span>Directors : </span>
            <span>{movie.Directors}</span>
        </div>
        <div>
            <span>Actors : </span>
                <span>{movie.Actors}  </span>            
        </div>
        <div>
            <span> Release_Date: </span>
            <span>{movie.Release_Date}</span>
        </div>
        <div>
            <span>Ratings  : </span>
            <span>{movie.Ratings}</span>
        </div>
        <div>
            <span>Featured : </span>
            <span>{movie.Featured}</span>
        </div>  
        <br />
        <button
            </button>
        </> */