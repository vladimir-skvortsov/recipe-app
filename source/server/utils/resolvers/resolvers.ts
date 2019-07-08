import ping from '@server/resolvers/ping/ping'

import signIn from '@server/resolvers/signIn/signIn'
import signUp from '@server/resolvers/signUp/signUp'


const resolvers = {
  Query: {
    ping,
  },

  Mutation: {
    signIn,
    signUp,
  },
}


export default resolvers