import React from 'react'
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import "./NavBar.css"
import ReactStars from "react-rating-stars-component";

function NavBar({getSearchInput, getRateInput}){
    const ratingChanged = (newRating) => {
        getRateInput(newRating)
      };
    
    
    const handleSearch=(e) =>{
        getSearchInput(e.target.value)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CinéDay</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>

            </Nav>
            <Form inline className="searchForm">
                <ReactStars
                        count={5}
                        isHal={true}
                        onChange={ratingChanged}
                        size={35}
                        activeColor="#ffd700"
                />,
                <FormControl type="text" placeholder="Search" className= "mr-sm-2 searchInput" onChange={handleSearch} />
                
            </Form>   
        </Navbar>
    )
}

export default NavBar;