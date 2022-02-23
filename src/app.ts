import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from './schema/index';


const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
