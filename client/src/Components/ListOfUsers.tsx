import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../Graphql/Queries';

const ListOfUsers = () => {
    const { data } = useQuery(GET_ALL_USERS);

    return (
        <div>
            {data && data.getAllUsers.map((user: any) => {
                return (
                    <div>
                        {" "}
                        {user.id}: {user.name} / {user.username}
                        {" "}
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfUsers
