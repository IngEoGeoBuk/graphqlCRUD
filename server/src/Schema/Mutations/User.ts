import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from '../../Entities/Users';

//// 
// type : ~~~   <-- mutation 또는 query가 return하는 것들의 type들을 정의하는 곳.
// args: { 
/// 

export const CREATE_USER = {
    type: UserType,
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { name, username, password } = args;
        await Users.insert({name, username, password});
        return args;
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }, 
        username: { type: GraphQLString },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        // 동영상 예제와 다르게 username을 통해 가져오는 게 아닌, id 값을 통해 가져오도록 쿼리 수정
        // const { username, oldPassword, newPassword } = args;
        // const user = await Users.findOne({ username: username });
        
        const { id, oldPassword, newPassword } = args;
        const user = await Users.findOne({ id: id });

        if(!user) {
            throw new Error("USER DOESNT EXIST");
        }

        const userPassword = user?.password;

        if (oldPassword === userPassword) {
            // return await Users.update({username: username}, {password: newPassword});
            await Users.update({id: id}, {password: newPassword});
            return { successful: true, message: "PASSWORD UPDATED" };
        } else {
            return { successful: false, message: "PASSWORDS DO NOT MATCH!" };
            // throw new Error("PASSWORDS DO NOT MATCH!");
        }
    },     
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any) {
        const id = args.id;
        await Users.delete(id);
        return { successful: true, message: "DELETE WORKED" };
    }, 
}