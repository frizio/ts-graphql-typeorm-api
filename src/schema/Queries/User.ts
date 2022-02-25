import { UserType } from './../TypeDefs/User';
import { Users } from './../../entities/users';
import { GraphQLList, } from "graphql";

export const GET_ALL_USERS = {

  type: new GraphQLList(UserType),

  async resolve() {
    const result = await Users.find();
    //console.log(result);
    return result;
  }

};
