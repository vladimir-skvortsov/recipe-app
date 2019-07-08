import { makeExecutableSchema } from 'graphql-tools'

import rawSchema from '@server/assets/schema.graphql'

import resolvers from '@server/utils/resolvers/resolvers'


const schema = makeExecutableSchema({
  resolvers,
  typeDefs: rawSchema,
})


export default schema