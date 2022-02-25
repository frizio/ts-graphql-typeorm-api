import { GraphQLString } from "graphql";

export const GET_ALL_USERS = {
  
  type: GraphQLString,

  resolve() {
    return 'users list';
  }

};
