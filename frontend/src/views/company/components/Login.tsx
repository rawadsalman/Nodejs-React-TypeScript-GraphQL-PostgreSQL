import React, { useState } from "react";

import { useForm } from "./UseForm";
import { CREATE_COMPANY } from '../../../gqlQueries/companies/addone'
import { useMutation } from "@apollo/client";

function Login() {
    // defining the initial state for the form
    const [createCompany, { data, loading, error }] = useMutation(CREATE_COMPANY);

    const initialState = {
       /*  email: "",
        password: "", */
        name: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // send "values" to database
        createCompany({ variables: {initialState } });

    }

    return (
        // don't mind this ugly form :P
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='name'
                id='name'
                type='name'
                placeholder='name'
                onChange={onChange}
                required
                />

          
            <button type='submit'>Save</button>
        </div>
        </form>
    );
}

export default Login;
