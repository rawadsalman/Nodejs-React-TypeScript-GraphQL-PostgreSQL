 import { useMutation } from "@apollo/react-hooks";

 import { gql } from "apollo-boost";
//import { gql, useMutation } from '@apollo/client';
import React,{useState}from 'react'

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    insert_posts(objects: { body: $body, title: $title }) {
      affected_rows
    }
  }
`;

function NewPost() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [createPost, { loading, error }] = useMutation(CREATE_POST);

  function handleCreatePost(event) {
    event.preventDefault();
    // the mutate function also doesn't return a promise
    createPost({ variables: { title, body } });
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleCreatePost}>
        <input onChange={(event) => setTitle(event.target.value)} />
        <textarea onChange={(event) => setBody(event.target.value)} />
        <button disabled={loading} type="submit">
          Submit
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
export default NewPost;