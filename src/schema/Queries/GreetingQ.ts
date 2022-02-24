import { GraphQLString } from "graphql";

export const GREETING_QUERY = {
  type: GraphQLString,
  resolve: () => 'Hola Query!'
};
