import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../Graphql/Mutation';
import { GET_ALL_USERS } from '../Graphql/Queries';

const ListOfUsers = () => {
    const { data } = useQuery(GET_ALL_USERS);

    const [deleteUser, { error }] = useMutation(DELETE_USER);

    return (
        <div>
            {data && data.getAllUsers.map((user: any, key: number) => {
                return (
                    <div key={user.id}>
                        {user.id}: {user.name} / {user.username} / {user.password}
                        <button 
                            onClick={() => { deleteUser({variables: {id: user.id}} )}}
                        >
                            Delete User
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfUsers
