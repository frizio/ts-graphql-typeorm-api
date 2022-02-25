import { GraphQLString } from 'graphql';
import { GraphQLID, GraphQLObjectType } from 'graphql';

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "User Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});