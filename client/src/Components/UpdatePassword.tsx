import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation';
import { useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../Graphql/Queries';

const UpdatePassword = () => {
    const [id, setId] = useState<number>(0);
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD, {
        refetchQueries : [
            { query: GET_ALL_USERS }
        ]
    })
    
    return (
        <div>
            <input 
                type="text" 
                placeholder='ID...'
                onChange={(e) => { setId(parseInt(e.target.value)) }}
            />
            <input 
                type="password" 
                placeholder='Current Password...' 
                onChange={(e) => { setCurrentPassword(e.target.value) }}
            />
            <input 
                type="password" 
                placeholder='New Password...' 
                onChange={(e) => { setNewPassword(e.target.value) }}
            />

            <button
                onClick={() => { 
                    updatePassword({ 
                        variables: {
                            id, oldPassword: currentPassword, newPassword
                        }
                    }) 
                }}
            >
                UPDATE PASSWORD
            </button>
        </div>
    )
}

export default UpdatePassword
