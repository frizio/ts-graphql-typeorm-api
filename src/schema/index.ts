import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING_QUERY } from './Queries/GreetingQ';
import { GREETING_MUTATION } from './Mutations/GreetingM';
import { CREATE_USER } from "./Mutations/User";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING_QUERY
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    greetingMutation: GREETING_MUTATION,
    createUser: CREATE_USER
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
