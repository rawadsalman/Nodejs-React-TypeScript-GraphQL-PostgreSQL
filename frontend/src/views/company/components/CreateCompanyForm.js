import React, { PureComponent } from 'react';
 export class CreateCompanyForm extends PureComponent { 
     
    handleSubmit = () => { 
         // get variable values for example from the state
         first_name= 'Samuel'; 
      last_name= 'De Pooter';
         this.props.createUser({ variables: { input: { first_name, last_name } } }) 
     }      
     render() { 
          return ( 
               <form onSubmit={this.handleSubmit}> 

               </form> 
          ) 
       } 
} 
