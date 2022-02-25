import { Users } from './../../entities/users';
import { GraphQLString } from "graphql";

export const GET_ALL_USERS = {

  type: GraphQLString,

  async resolve() {
    const result = await Users.find();
    console.log(result);
    return 'users list';
  }

};
