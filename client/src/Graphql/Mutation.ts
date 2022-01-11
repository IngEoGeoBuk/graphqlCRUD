import { gql } from '@apollo/client';

// server쪽 mutation 이름이랑 맞춰야함(createUser, deleteUser 등등..)
export const CREATE_USER = gql`
    mutation createUser($name: String! $username: String! $password: String!) {
        createUser(name: $name, username: $username, password: $password) {
            id
            name
            username
        }
    }
`;