import { GraphQLString } from 'graphql';

export const GREETING_MUTATION = {
  type: GraphQLString,
  resolve: () => {
    return 'hola mutated';
  }
};
