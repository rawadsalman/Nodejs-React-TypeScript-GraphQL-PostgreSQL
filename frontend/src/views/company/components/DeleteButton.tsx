import { useMutation } from '@apollo/client';
import React, {MouseEventHandler} from 'react';
import { DELETE_COMPANY } from '../../../gqlQueries/companies/deleteOne'
/* function DeleteButton() {
    const [deleteUser] = useMutation(DELETE_COMPANY);
  
    function handleDeleteClick(uuid:string) {
        //e.preventDefault();
        deleteUser({ variables: {uuid}}) }    
  
    return (
      <button type="button" onClick={handleDeleteClick('00000000-0000-0000-0000-000000000002')}>
        Go home
      </button>
    );
  }
  export default DeleteButton; */
  interface Props {
    uuid:string;
    value:string;
  }
 const  DeleteButton: React.FC<Props>=(props)=> {
    const [deleteUser] = useMutation(DELETE_COMPANY);

    const handleDeleteClick=(e: React.MouseEvent<HTMLInputElement>,uuid:string):void =>{
        //e.preventDefault();
        deleteUser({ variables: {uuid}}) }
  
    return (
       <input type="button" onClick={(event: React.MouseEvent<HTMLInputElement>) => {
        handleDeleteClick((event.target as any),props.uuid)
       }}/>
    );
  }
  
  export default DeleteButton; 

