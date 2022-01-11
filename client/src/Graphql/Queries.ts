import { gql } from '@apollo/client';

// server쪽 mutation 이름이랑 맞춰야함(createUser, deleteUser 등등..)
export const GET_ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            id
            name
            username
        }
    }
`;