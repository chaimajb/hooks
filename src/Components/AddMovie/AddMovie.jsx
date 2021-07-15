import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import "./AddMovie.css"

function AddMovie({getNewMovie}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie]= useState({title:"", description:"", posterURL:"",rating : 0})
  const handleChange = (e) =>{
    setNewMovie({...newMovie, [e.target.name]: e.target.value})
    
  }

  const handleSubmit =() => {
    getNewMovie(newMovie)
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>new movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="inputArea">
          <Form.Control type="email" placeholder="Enter title..." name="title" onChange={handleChange}/>
          <Form.Control type="email" as="textarea" placeholder="Enter description" name="description" onChange={handleChange}/>
          <Form.Control type="email" placeholder="Enter posterURL" name="posterURL" onChange={handleChange}/>
          <Form.Control type="number" placeholder="Enter rating" name="rating" onChange={handleChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            + Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;