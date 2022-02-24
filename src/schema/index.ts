import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING_QUERY } from './Queries/GreetingQ';
import { GREETING_MUTATION } from './Mutations/GreetingM';


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
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
