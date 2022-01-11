import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';

const CreateUser = () => {
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const [createUser, { error }] = useMutation(CREATE_USER); 

    return (
        <div className="createUser">
          <input 
            type="text" 
            placeholder='name'
            onChange={(e) => { setName(e.target.value); }}
          />
          <input 
            type="text" 
            placeholder='username'
            onChange={(e) => { setUsername(e.target.value); }}
          />
          <input 
            type="text" 
            placeholder='password'
            onChange={(e) => { setPassword(e.target.value); }}
          />
          <button 
            onClick={() => { 
              createUser({ 
                variables: { name, username, password },
              }) 
            }}
          >
            Create User
          </button>
        </div>
    )
}

export default CreateUser
