import { UserType } from "./../TypeDefs/User";
import { Users } from "./../../entities/users";
import { GraphQLID, GraphQLList } from "graphql";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve() {
    const result = await Users.find();
    //console.log(result);
    return result;
  },
};

export const GET_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const id = args.id;
    const result = await Users.findOne(id);
    return result;
  },
};
