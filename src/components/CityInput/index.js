import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CityInput = ({city,setCity, fetchCityWeather}) => {
    
    const[error, setError] =useState("")
    const handleInputChange=(event)=>{
        setCity(event.target.value)
    }
    console.log(city)
    const handleSubmit=()=>{
        if(!city){
            setError("City field is empty")
        }else{
            setError("")
            //Make API call
            fetchCityWeather()

        }
    }
    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label ><h1>City Weather App</h1></Form.Label>
                    <Form.Control
                     value={city} 
                     type="text" 
                     placeholder="Enter City" 
                     onChange={handleInputChange} 
                     className="search"
                     />
                     <p className="text-danger">{error}</p>
                </Form.Group>

               
                <Button variant="secondary"  onClick={handleSubmit}>
                    FIND
         </Button>
            </Form>
        </Container>
    );
};

export default CityInput;