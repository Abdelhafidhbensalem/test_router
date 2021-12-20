import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const Add = ({ handleAdd }) => {

    const {x,y}=useParams()
  
    const [newMovie, setNewMovie] = useState({

        title: "",
        description: "",
        posterUrl: "",
        rating: 0
    })
    const handleChange = (e) => {

        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }
    const handleClick = () => {
        handleAdd(newMovie);
        setNewMovie({
            title: "",
            description: "",
            posterUrl: "",
            rating: 0
        })
        handleClose();
    }
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Title>title</Modal.Title>
                    <input type="text" name="title"  value={x} onChange={handleChange} />
                    <Modal.Title>description</Modal.Title>
                    <input type="text" name="description"  onChange={handleChange} />
                    <Modal.Title>posterUrl</Modal.Title>
                    <input type="url" name="posterUrl" onChange={handleChange} />
                    <Modal.Title>rating</Modal.Title>
                    <input type="number" min="0" max="10" name="rating" onChange={handleChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
