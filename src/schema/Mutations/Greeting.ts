import { GraphQLString } from "graphql";

export const GREETING = {
  type: GraphQLString,
  resolve: () => 'Ciao frizio!'
};