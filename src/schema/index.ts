import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from './Mutations/Greeting';


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery
});
