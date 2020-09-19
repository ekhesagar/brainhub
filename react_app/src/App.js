import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventForm from './Form.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleValidation = this.handleValidation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Validating form data
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Validation for first name
    if(!fields['firstName']){
       formIsValid = false;
       errors["firstName"] = "Cannot be empty";
    }

    if(typeof fields["firstName"] !== "undefined"){
       if(!fields["firstName"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["firstName"] = "Only letters";
       }        
    }

    //validation for last name
    if(!fields['lastName']){
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
   }

   if(typeof fields["lastName"] !== "undefined"){
      if(!fields["lastName"].match(/^[a-zA-Z]+$/)){
         formIsValid = false;
         errors["lastName"] = "Only letters";
      }        
   }

    //Email validation
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  

   this.setState({errors: errors});
   return formIsValid;
}


  handleChange(field, event){
    let fields = this.state.fields
    fields[field] = event.target.value;        
    this.setState({fields});
}

// Submit form to api
handleSubmit(event) {
  event.preventDefault();


// Data will be sent to api only if there are no errors produced
  if(this.handleValidation()){
    fetch('http://localhost:9000/react', 
    {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.fields)
    }).then(function(response) {
        console.log(response)
        return response.json();
    });

    // **************** Uncomment below function to test form submission **********************
     //this.props.handleSubmit();
     console.log(this.state)
  }
    console.log(this.state)
}

  render(){
    return (
      <div className="App">
        <EventForm 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        errors={this.state.errors}
        />
      </div>
    );
  }
  
}

export default App;
