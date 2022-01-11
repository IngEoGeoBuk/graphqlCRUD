import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema'
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Users } from './Entities/Users';

const main = async () => {
    await createConnection({
        type: 'mysql',
        database: 'graphqlcrud',
        username: 'root',
        password: 'qkdgkahr7365',
        logging: true,
        // synchronize: true, 로 하면 테이블 생성 
        synchronize: false,
        entities: [Users],
    });

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    })); 

    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    })
}

main().catch((err) => {
    console.log(err);
})