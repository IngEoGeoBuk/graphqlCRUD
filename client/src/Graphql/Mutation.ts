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

export const UPDATE_PASSWORD = gql`
    mutation updatePassword($id: ID! $oldPassword: String! $newPassword: String!) {
        updatePassword(id: $id, oldPassword: $oldPassword, newPassword: $newPassword) {
            message
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            message
        }
    }
`;
