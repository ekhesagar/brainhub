import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class EventForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Brainhub Event</h1>
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Group >
                        <Form.Label htmlFor='firstName'>First Name:</Form.Label>
                        <Form.Control 
                        id='firstName'
                        type="text" 
                        name="firstName" 
                        value={this.props.firstName} 
                        placeholder="Enter first name" 
                        onChange={this.props.handleChange.bind(this, 'firstName')} 
                        required 
                        />
                        {this.props.errors.firstName && <span style={{border: '1px solid black', backgroundColor: 'red'}}>{this.props.errors.firstName}</span>} 
                    </Form.Group>
    
                    <Form.Group >
                        <Form.Label htmlFor='lastName'>Last Name:</Form.Label>
                        <Form.Control 
                        id='lastName' 
                        type="text" 
                        name="lastName"
                        value={this.props.lastName}  
                        placeholder="Enter last name" 
                        onChange={this.props.handleChange.bind(this, 'lastName')}
                        required
                        />
                        {this.props.errors.lastName && <span style={{border: '1px solid black', backgroundColor: 'red'}}>{this.props.errors.lastName}</span>}
                        
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email:</Form.Label>
                        <Form.Control 
                        id='email' 
                        type="email" 
                        name="email"
                        value={this.props.email} 
                        placeholder="Email address" 
                        onChange={this.props.handleChange.bind(this, 'email')} 
                        required
                        />
                        {this.props.errors.email && 
                        <span 
                        style={{
                            border: '1px solid black', 
                            backgroundColor: 'red'
                        }}>
                        {this.props.errors.email}</span>}
                        
                    </Form.Group>
    
                    <Form.Group >
                        <Form.Label>Date: </Form.Label>
                        <Form.Control 
                        type="date" 
                        name="date" 
                        onChange={this.props.handleChange.bind(this, 'date')} 
                        />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    
            </div>
        )
    }
}

export default EventForm;