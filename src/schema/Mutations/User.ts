import { UserType } from "./../TypeDefs/User";
import { Users } from "./../../entities/users";
import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";
import bcrypt from "bcryptjs";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { name, username, password } = args;
    const encryptPassword = await bcrypt.hash(password, 10);
    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptPassword,
    });
    //console.log(result);
    const id = result.identifiers[0].id;
    const output = {
      id,
      name,
      username,
      password: encryptPassword,
    };
    return output;
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const id = args.id;
    const result = await Users.delete(id);
    console.log(result);
    if (result.affected === 1) {
      return true;
    }
    return false;
  },
};
